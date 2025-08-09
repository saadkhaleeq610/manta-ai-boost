import { Button } from "@/components/ui/button";
import resultIcon from "../assets/result.png";
import humanIcon from "../assets/human.png";
import industryIcon from "../assets/industry.png";
import fastIcon from "../assets/fast.png";

const WhyChooseUs = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-40 px-4">
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
            
            <Button onClick={scrollToContact} className="hero-button">
              Book Your Consultation
            </Button>
          </div>
          
          {/* Right Content - Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            
            {/* Benefit 1 */}
            <div className="service-card">
              <div className="icon-circle"><img className="w-[30px] h-[30px]" src={industryIcon}/></div>
              <h3 className="text-lg font-bold mb-3">Built for the Industry</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Our tools are tailored specifically for suppliers—no bloated dashboard.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="service-card">
              <div className="icon-circle"><img className="w-[30px] h-[30px]" src={fastIcon}/></div>
              <h3 className="text-lg font-bold mb-3">Simple, Fast Setup</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                No tech team needed. We'll get you live in under a week and train your crew to use it.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="service-card">
              <div className="icon-circle"><img className="w-[30px] h-[30px]" src={humanIcon}/></div>
              <h3 className="text-lg font-bold mb-3">Real Human Support</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Have a question? Need a tweak? We're here when you need us—by phone or email.
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="service-card">
              <div className="icon-circle"><img className="w-[30px] h-[30px]" src={resultIcon}/></div>
              <h3 className="text-lg font-bold mb-3">Proven Results</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                From missed follow-ups to new revenue—our clients are seeing real impact in weeks.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
