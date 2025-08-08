import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Contact Us</h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Tell us where you want to go.<br />
              We'll help you get there.<br />
              Fill out the form to schedule your strategy call.
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-lg mb-2">Phone</h3>
                <p className="text-accent text-lg">(714) 769-0249</p>
              </div>
              
              <div>
                <h3 className="font-bold text-lg mb-2">Email Support</h3>
                <p className="text-accent text-lg">Support@BlueMantaLabs.com</p>
              </div>
              
              <div>
                <h3 className="font-bold text-lg mb-2">Location</h3>
                <p className="text-muted-foreground">San Diego, CA</p>
              </div>
            </div>
          </div>
          
          {/* Right Content - Contact Form */}
          <div className="service-card">
            <form className="space-y-6">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your full name" />
              </div>
              
              <div>
                <Label htmlFor="company">Company Name</Label>
                <Input id="company" placeholder="Your company name" />
              </div>
              
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" placeholder="Your phone number" />
              </div>
              
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="Your email address" />
              </div>
              
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your project..."
                  rows={5}
                />
              </div>
              
              <Button className="w-full bg-light-blue hover:bg-light-blue/90 text-light-blue-foreground">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;