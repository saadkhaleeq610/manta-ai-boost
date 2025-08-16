import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const CallToAction = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("https://bluemantalabs.app.n8n.cloud/webhook/f5fcb29c-e86f-4a54-8173-b26d5f0ab124", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="bg-[#3392FF] py-20 px-4">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl text-[#071024] font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-12 text-[#071024] leading-relaxed">
            Let's discuss how our AI solutions can solve your specific challenges and unlock new opportunities for growth.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                placeholder="Enter your email address"
                className="flex-1 bg-white/20 border-white/30 text-primary placeholder:text-primary/60"
                value={email}
                onChange={e => setEmail(e.target.value)}
                type="email"
                required
              />
              <Button
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8"
                type="submit"
                disabled={status === "loading"}
              >
                {status === "loading" ? "Submitting..." : "Submit"}
              </Button>
            </div>
            {status === "success" && (
              <p className="text-green-700 mt-4">Email sent successfully!</p>
            )}
            {status === "error" && (
              <p className="text-red-600 mt-4">Something went wrong. Please try again.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;