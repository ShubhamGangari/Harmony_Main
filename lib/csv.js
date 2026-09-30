export function normalizeRows(rows) {
  return rows
    .map((row) => {
      const normalized = {};
      Object.entries(row).forEach(([key, value]) => {
        const cleanKey = key
          .trim()
          .toLowerCase()
          .replace(/\s+/g, "_");
        normalized[cleanKey] =
          typeof value === "string" ? value.trim() : value;
      });

      // Keep the existing sheet's "Payment URL" header compatible with the
      // canonical product field used by the payment workflow.
      if (!normalized.razorpay_url && normalized.payment_url) {
        normalized.razorpay_url = normalized.payment_url;
      }

      return normalized;
    })
    .filter((row) => Object.values(row).some((value) => value !== ""));
}

export function validExternalUrl(value) {
  if (!value) return "";
  const trimmed = value.trim();
  
  if (trimmed.startsWith('/')) {
    return trimmed;
  }

  try {
    const url = new URL(trimmed);
    if (!["http:", "https:"].includes(url.protocol)) {
      return "";
    }

    // Transform Google Drive links to direct image links
    if (url.hostname.includes("drive.google.com")) {
      const idMatch = trimmed.match(/\/d\/([a-zA-Z0-9_-]+)/) || trimmed.match(/[?&]id=([a-zA-Z0-9_-]+)/);
      if (idMatch && idMatch[1]) {
        return `https://drive.google.com/thumbnail?id=${idMatch[1]}&sz=w1000`;
      }
    }

    // Transform Canto preview/viewer links to direct binary image links
    if (url.hostname.includes("canto.com")) {
      const match = trimmed.match(/\/image\/([a-zA-Z0-9_-]+)/);
      if (match && match[1]) {
        return `https://doterra.canto.com/rest/v/DigitalMarketingKit/binary/image/${match[1]}`;
      }
    }

    return url.toString();
  } catch {
    return "";
  }
}

export function mergeProductCatalog(remoteRows = [], defaultCatalog = []) {
  if (!Array.isArray(defaultCatalog) || !defaultCatalog.length) {
    return remoteRows;
  }

  // Create a normalized lookup map of remote rows
  const remoteByName = new Map();
  remoteRows.forEach((row) => {
    if (!row || !row.name) return;
    const rawClean = String(row.name).trim().toLowerCase();
    const clean = rawClean.replace(/[()]/g, "").replace(/\s+/g, " ");
    remoteByName.set(clean, row);
    remoteByName.set(rawClean, row);

    // If explicit size column exists (e.g. name: "Lavender", size: "5ml")
    const baseClean = clean.replace(/\s*\d+\s*(?:ml|l)\b/i, "").trim();
    if (row.size) {
      const explicitSize = String(row.size).toLowerCase().trim();
      remoteByName.set(`${baseClean} ${explicitSize}`, row);
    }

    // Also store base name without ml suffix for fuzzy matching (e.g. "lavender" -> "lavender 15ml")
    if (baseClean && !remoteByName.has(`base:${baseClean}`)) {
      remoteByName.set(`base:${baseClean}`, row);
    }
  });

  const matchedRemoteKeys = new Set();

  const merged = defaultCatalog.map((product) => {
    const rawCleanName = String(product.name).trim().toLowerCase();
    const cleanName = rawCleanName.replace(/[()]/g, "").replace(/\s+/g, " ");
    const baseName = cleanName.replace(/\s*\d+\s*(?:ml|l)\b/i, "").trim();

    let remoteMatch =
      remoteByName.get(cleanName) ||
      remoteByName.get(rawCleanName) ||
      (product.size ? remoteByName.get(`${baseName} ${String(product.size).toLowerCase().trim()}`) : null);

    if (remoteMatch) {
      matchedRemoteKeys.add(String(remoteMatch.name).trim().toLowerCase());
    } else if (cleanName.includes("15ml") && remoteByName.has(`base:${baseName}`)) {
      // If the sheet just has e.g. "Lavender" or "Peppermint", map it to the standard 15ml size
      remoteMatch = remoteByName.get(`base:${baseName}`);
      matchedRemoteKeys.add(String(remoteMatch.name).trim().toLowerCase());
    }

    if (!remoteMatch) {
      return { ...product };
    }

    return {
      ...product,
      price:
        remoteMatch.price && remoteMatch.price !== "CLIENT TO PROVIDE"
          ? remoteMatch.price
          : product.price,
      description:
        remoteMatch.description && remoteMatch.description !== "CLIENT TO PROVIDE"
          ? remoteMatch.description
          : product.description,
      image_url: remoteMatch.image_url || product.image_url || "",
      recommended_with:
        remoteMatch.recommended_with || product.recommended_with || "",
      available: remoteMatch.available !== undefined ? remoteMatch.available : "true",
      category: remoteMatch.category || product.category || "Single Oil",
      size: remoteMatch.size || product.size || "",
    };
  });

  // Also include any new products present in remote CSV that aren't in defaultCatalog
  remoteRows.forEach((row) => {
    if (!row || !row.name) return;
    const clean = String(row.name).trim().toLowerCase();
    if (!matchedRemoteKeys.has(clean) && !merged.some((p) => p.name.toLowerCase() === clean)) {
      merged.push({
        name: row.name,
        category: row.category || "Single Oil",
        size: row.size || "",
        price: row.price || "CLIENT TO PROVIDE",
        description: row.description || "Product details are being updated.",
        image_url: row.image_url || "",
        recommended_with: row.recommended_with || "",
        available: row.available || "true",
      });
    }
  });

  return merged;
}

