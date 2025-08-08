import { Button } from "@/components/ui/button";

const WhyChooseUs = () => {
  const benefits = [
    {
      title: "Built for the Industry",
      description: "Our tools are tailored specifically for suppliers—no bloated dashboard."
    },
    {
      title: "Simple, Fast Setup", 
      description: "No tech team needed. We'll get you live in under a week and train your crew to use it."
    },
    {
      title: "Real Human Support",
      description: "Have a question? Need a tweak? We're here when you need us—by phone or email."
    },
    {
      title: "Proven Results",
      description: "From missed follow-ups to new revenue—our clients are seeing real impact in weeks."
    }
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-left">
              Why Suppliers Trust Blue Manta Labs
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 text-left leading-relaxed">
              We're not just a tech company. We understand the jobsite hustle, the sales grind, and the real problems suppliers face every day.
            </p>
            
            <Button 
              onClick={scrollToContact}
              className="hero-button"
            >
              Book Your Consultation
            </Button>
          </div>
          
          {/* Right Content - Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="service-card">
                <div className="icon-circle">
                  {/* Placeholder for icon */}
                </div>
                
                <h3 className="text-lg font-bold mb-3">{benefit.title}</h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;