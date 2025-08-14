import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const CallToAction = () => {
  return (
    <section className="bg-[#66D9FF] py-20 px-4">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl text-[#071024] font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          
          <p className="text-xl mb-12 text-[#071024] leading-relaxed">
            Let's discuss how our AI solutions can solve your specific challenges and unlock new opportunities for growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              placeholder="Enter your email address"
              className="flex-1 bg-white/20 border-white/30 text-primary placeholder:text-primary/60"
            />
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8">
              Submit
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;