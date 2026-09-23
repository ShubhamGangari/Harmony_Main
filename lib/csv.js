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

    return url.toString();
  } catch {
    return "";
  }
}
