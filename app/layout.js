import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";
import { CartProvider } from "../components/CartProvider";
import FloatingCartButton from "../components/FloatingCartButton";
import SiteHeader from "../components/SiteHeader";
import Footer from "../components/Footer";

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
  title: "Harmony of Cells | Nature. Science. Preventive Wellness.",
  description:
    "Evidence-informed essential oil education and preventive wellness through practical, responsible guidance.",
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
          <SiteHeader />
          {children}
          <Footer />
          <FloatingCartButton />
        </CartProvider>
      </body>
    </html>
  );
}
