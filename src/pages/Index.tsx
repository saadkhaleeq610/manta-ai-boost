import Hero from "@/components/Hero";
import Services from "@/components/Services";
import HowWeHelp from "@/components/HowWeHelp";
import CallToAction from "@/components/CallToAction";
import WhyChooseUs from "@/components/WhyChooseUs";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <HowWeHelp />
      <CallToAction />
      <WhyChooseUs />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
