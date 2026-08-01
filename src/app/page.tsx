import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { PortfolioTeaser } from "@/components/sections/portfolio-teaser";
import { Process } from "@/components/sections/process";
import { AboutTeaser } from "@/components/sections/about-teaser";
import { Testimonials } from "@/components/sections/testimonials";
import { ClientLogos } from "@/components/sections/client-logos";
import { Faq } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";
import { CtaBand } from "@/components/sections/cta-band";

export default function Home() {
  return (
    <>
      <Hero />
      <ClientLogos />
      <Services />
      <WhyChooseUs />
      <PortfolioTeaser />
      <Process />
      <AboutTeaser />
      <Testimonials />
      <Faq />
      <Contact />
      <CtaBand />
    </>
  );
}
