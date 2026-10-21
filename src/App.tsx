import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import Portfolio from "@/pages/Portfolio";
import ServicesPage from "@/pages/ServicesPage";
import PricingPage from "@/pages/PricingPage";
import AboutPage from "@/pages/AboutPage";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";
import DemoProject from "@/pages/DemoProject";
import { CartProvider } from "@/components/watch/CartContext";
import { CartDrawer } from "@/components/watch/CartDrawer";
import ArLuxeHome from "@/pages/arluxe/ArLuxeHome";
import ArLuxeCatalogue from "@/pages/arluxe/ArLuxeCatalogue";
import ArLuxeProduct from "@/pages/arluxe/ArLuxeProduct";
import ArLuxeCheckout from "@/pages/arluxe/ArLuxeCheckout";
import ArLuxeCraftsmanship from "@/pages/arluxe/ArLuxeCraftsmanship";
import ArLuxeFaq from "@/pages/arluxe/ArLuxeFaq";
import ArLuxeCaseStudy from "@/pages/arluxe/ArLuxeCaseStudy";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="pricing" element={<PricingPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        {/* Demo project pages (own top bar, no agency chrome) */}
        <Route path="/projects/:id" element={<DemoProject />} />

        {/* AR LUXE watch store — wrapped in CartProvider */}
        <Route
          path="/projects/arluxe"
          element={
            <CartProvider>
              <ArLuxeHome />
              <CartDrawer />
            </CartProvider>
          }
        />
        <Route
          path="/projects/arluxe/catalogue"
          element={
            <CartProvider>
              <ArLuxeCatalogue />
              <CartDrawer />
            </CartProvider>
          }
        />
        <Route
          path="/projects/arluxe/craftsmanship"
          element={
            <CartProvider>
              <ArLuxeCraftsmanship />
              <CartDrawer />
            </CartProvider>
          }
        />
        <Route
          path="/projects/arluxe/faq"
          element={
            <CartProvider>
              <ArLuxeFaq />
              <CartDrawer />
            </CartProvider>
          }
        />
        <Route
          path="/projects/arluxe/case-study"
          element={<ArLuxeCaseStudy />}
        />
        <Route
          path="/projects/arluxe/watches/:slug"
          element={
            <CartProvider>
              <ArLuxeProduct />
              <CartDrawer />
            </CartProvider>
          }
        />
        <Route
          path="/projects/arluxe/checkout"
          element={
            <CartProvider>
              <ArLuxeCheckout />
              <CartDrawer />
            </CartProvider>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
