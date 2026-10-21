import Seo from "@/components/Seo";
import Hero from "@/sections/Hero";
import TrustValues from "@/sections/TrustValues";
import FeaturedPortfolio from "@/sections/FeaturedPortfolio";
import Services from "@/sections/Services";
import Process from "@/sections/Process";
import Pricing from "@/sections/Pricing";
import About from "@/sections/About";
import Testimonials from "@/sections/Testimonials";
import Faq from "@/sections/Faq";
import FinalCta from "@/sections/FinalCta";

export default function Home() {
  return (
    <>
      <Seo
        title="AR Studio — Digital Experiences That Define Brands"
        description="AR Studio designs and builds premium websites for businesses, personal brands, and ambitious founders. Thoughtful design. Seamless experiences. Built to convert."
        path="/"
      />
      <Hero />
      <TrustValues />
      <FeaturedPortfolio />
      <Services />
      <Process />
      <Pricing />
      <About />
      <Testimonials />
      <Faq />
      <FinalCta />
    </>
  );
}
