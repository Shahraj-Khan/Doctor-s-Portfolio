import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { WhyChooseMe } from "@/components/WhyChooseMe";
import { Expertise } from "@/components/Expertise";
import { Services } from "@/components/Services";
import { Pricing } from "@/components/Pricing";
import { Contact } from "@/components/Contact";
import { CaseStudies } from "@/components/CaseStudies";
import { FAQ } from "@/components/FAQ";
import { Testimonials } from "@/components/Testimonials";
import { Articles } from "@/components/Articles";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-mint-100 min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <WhyChooseMe />
      <Expertise />
      <Services />
      <Pricing />
      <Contact />
      <CaseStudies />
      <FAQ />
      <Testimonials />
      <Articles />
      <Footer />
    </main>
  );
}
