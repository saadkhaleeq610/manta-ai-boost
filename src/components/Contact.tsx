import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("https://bluemantalabs.app.n8n.cloud/webhook/04f5855f-74a2-4243-b658-ec8d0c140730", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", company: "", phone: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

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
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" value={form.name} onChange={handleChange} placeholder="Your full name" />
              </div>
              
              <div>
                <Label htmlFor="company">Company Name</Label>
                <Input id="company" value={form.company} onChange={handleChange} placeholder="Your company name" />
              </div>
              
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" value={form.phone} onChange={handleChange} placeholder="Your phone number" />
              </div>
              
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" value={form.email} onChange={handleChange} placeholder="Your email address" />
              </div>
              
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  rows={5}
                />
              </div>
              
              <Button
                className="w-full bg-light-blue hover:bg-light-blue/90 text-light-blue-foreground"
                type="submit"
                disabled={status === "loading"}
              >
                {status === "loading" ? "Sending..." : "Submit"}
              </Button>
              
              {status === "success" && (
                <p className="text-green-600 text-center">Thank you! We'll be in touch soon.</p>
              )}
              
              {status === "error" && (
                <p className="text-red-600 text-center">Something went wrong. Please try again.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;