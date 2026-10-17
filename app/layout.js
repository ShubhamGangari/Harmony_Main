import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";
import { CartProvider } from "../components/CartProvider";
import FloatingCartButton from "../components/FloatingCartButton";
import SiteHeader from "../components/SiteHeader";
import Footer from "../components/Footer";
import { SITE_CONFIG } from "../lib/config";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap"
});

export const metadata = {
  metadataBase: new URL(SITE_CONFIG.siteUrl || "https://harmonyofcells.com"),
  title: {
    default: "Harmony of Cells | Nervous System & Lifestyle Wellness",
    template: "%s | Harmony of Cells",
  },
  description:
    "Nervous System Wellness for Everyday Life. Education, lifestyle practices, sensory wellness, and responsible aromatherapy for calmer, healthier daily rhythms.",
  openGraph: {
    title: "Harmony of Cells | Nervous System & Lifestyle Wellness",
    description:
      "Nervous System Wellness for Everyday Life. Education, lifestyle practices, sensory wellness, and responsible aromatherapy for calmer, healthier daily rhythms.",
    url: "https://harmonyofcells.com",
    siteName: "Harmony of Cells",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harmony of Cells | Nervous System & Lifestyle Wellness",
    description:
      "Nervous System Wellness for Everyday Life. Education, lifestyle practices, sensory wellness, and responsible aromatherapy.",
  },
  icons: {
    icon: [
      { url: "/assets/harmony-logo.png" },
      { url: "/icon.png" }
    ],
    shortcut: "/assets/harmony-logo.png",
    apple: "/assets/harmony-logo.png"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
        <CartProvider>
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
          <SiteHeader />
          <div id="main-content">
            {children}
          </div>
          <Footer />
          <FloatingCartButton />
        </CartProvider>
      </body>
    </html>
  );
}
