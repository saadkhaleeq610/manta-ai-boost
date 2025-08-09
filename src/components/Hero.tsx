import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen bg-hero-gradient overflow-hidden">
      {/* Logo at top left */}
      <div className="absolute top-8 left-28 z-20">
        <h1 className="text-xl lg:text-2xl font-bold text-accent">
          Blue Manta Labs
        </h1>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center flex items-center justify-center min-h-screen">
        {/* Hero Content */}
        <div className="max-w-4xl mx-auto">
          {/* Logo Circle */}
          <div className="flex justify-center mb-8">
            <div
              className="w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-primary border-4 border-primary flex items-center justify-center"
              style={{
                boxShadow: '0 6px 20px 2px hsla(199, 89%, 58%, 0.6)'
              }}
            >
              <img
                src="/lovable-uploads/a42b1506-349c-4671-bc58-b5acd43957bc.png"
                alt="Blue Manta Labs Logo"
                className="w-16 h-16 lg:w-20 lg:h-20 object-contain"
              />
            </div>
          </div>

          
          <h1 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
            AI Solutions That Transform Your Business
          </h1>
          
          <p className="text-lg lg:text-xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
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