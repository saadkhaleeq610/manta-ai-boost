import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen bg-hero-gradient overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-sky-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-slate-700/25 rounded-full blur-2xl animate-pulse" style={{animationDelay: '4s'}}></div>
        
        {/* Geometric shapes */}
        <div className="absolute top-20 right-20 w-32 h-32 border border-sky-400/30 rotate-45 animate-spin" style={{animationDuration: '20s'}}></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 border border-blue-500/40 rotate-12 animate-spin" style={{animationDuration: '15s', animationDirection: 'reverse'}}></div>
        
        {/* Floating particles */}
        <div className="absolute top-32 left-1/3 w-2 h-2 bg-sky-300 rounded-full opacity-60 animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-400 rounded-full opacity-70 animate-bounce" style={{animationDelay: '3s'}}></div>
        <div className="absolute bottom-1/3 left-2/3 w-3 h-3 bg-slate-600 rounded-full opacity-50 animate-bounce" style={{animationDelay: '5s'}}></div>
        
        {/* Circuit-like lines */}
        <div className="absolute top-1/3 left-0 w-1/2 h-px bg-gradient-to-r from-transparent via-sky-400/40 to-transparent"></div>
        <div className="absolute top-2/3 right-0 w-1/3 h-px bg-gradient-to-l from-transparent via-blue-500/30 to-transparent"></div>
        <div className="absolute left-1/4 top-0 w-px h-1/2 bg-gradient-to-b from-transparent via-slate-600/30 to-transparent"></div>
      </div>

      {/* Logo at top left */}
      <div className="absolute top-8 left-28 z-20">
        <h1 className="text-xl lg:text-2xl font-bold text-accent">
          Blue Manta Labs
        </h1>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center flex items-center justify-center min-h-screen">
        <div className="max-w-4xl mx-auto">
          {/* Logo Circle */}
          <div className="flex justify-center mb-8">
            <div
              className="w-32 h-32 lg:w-40 lg:h-40 rounded-full bg-primary border-4 border-primary flex items-center justify-center transition-transform duration-500 ease-out hover:scale-110 hover:rotate-6"
              style={{
                boxShadow: "0 8px 25px 4px hsla(199, 89%, 58%, 0.6)",
              }}
            >
              <img
                src="/lovable-uploads/a42b1506-349c-4671-bc58-b5acd43957bc.png"
                alt="Blue Manta Labs Logo"
                className="w-20 h-20 lg:w-24 lg:h-24 object-contain transition-transform duration-500 ease-out hover:scale-110"
              />
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-4xl lg:text-6xl font-extrabold mb-4 leading-tight bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 text-transparent bg-clip-text">
            AI Solutions That Transform Your Business
          </h1>

          {/* Tagline */}
          <p
            className="text-base lg:text-lg font-medium mb-10 max-w-2xl mx-auto bg-gradient-to-r from-sky-300 via-blue-400 to-indigo-400 text-transparent bg-clip-text opacity-0 animate-fadeIn"
            style={{
              animation: "fadeIn 1.5s ease-out forwards",
            }}
          >
            Empowering your vision with next-gen intelligence, seamless automation, and the human touch of innovation.
          </p>

          {/* Button */}
          <Button
            onClick={scrollToContact}
            className="relative group bg-gradient-to-r from-sky-400 via-blue-500 to-slate-800 hover:from-sky-500 hover:via-blue-600 hover:to-slate-900 text-white text-base font-semibold px-8 py-4 rounded-lg shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-sky-400/50 overflow-hidden"
          >
            {/* Animated background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-sky-400 via-blue-500 to-slate-800 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300"></div>
            
            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
            
            {/* Button content */}
            <span className="relative z-10 flex items-center gap-2">
              Schedule Your Consultation
              <svg 
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </Button>
        </div>
      </div>

      {/* Fade-in animation */}
      <style jsx>{`
        @keyframes fadeIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
          from {
            opacity: 0;
            transform: translateY(10px);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
