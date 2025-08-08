import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-ai-background.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-background/80"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Logo */}
        <div className="mb-8">
          <h1 className="text-2xl lg:text-3xl font-bold text-accent mb-2">
            Blue Manta Labs
          </h1>
        </div>
        
        {/* Hero Content */}
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            AI Solutions That Transform Your Business
          </h1>
          
          <p className="text-xl lg:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
            We specialize in custom AI solutions, voice technology integration, and intelligent automation that drives real results.
          </p>
          
          <Button 
            onClick={scrollToContact}
            className="hero-button text-lg px-8 py-6"
          >
            Schedule Your Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;