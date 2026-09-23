import SiteHeader from "../../components/SiteHeader";
import Footer from "../../components/Footer";
import CartPage from "../../components/CartPage";

export const metadata = { title: "Cart | Harmony of Cells", description: "Review your product and course selections." };

export default function CartRoute() {
  return <><SiteHeader /><main><CartPage /></main><Footer /></>;
}
