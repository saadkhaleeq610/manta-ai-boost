import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import VapiLauncher from "./Vapi";

const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

const Pricing = () => {
  const plans = [
    {
      name: "Base",
      price: "$999",
      period: "/mo",
      features: [
        "Smart website chatbot",
        "Basic AI follow-up", 
        "Lead tracking",
        "Setup and onboarding"
      ]
    },
    {
      name: "Premium",
      price: "$1499",
      period: "/mo",
      popular: true,
      features: [
        "Everything in Starter, plus:",
        "AI-powered follow-up tools",
        "Manager dashboard",
        "Team activity & reporting"
      ]
    },
    {
      name: "Elite", 
      price: "$2999",
      period: "/mo",
      features: [
        "Everything in Growth, plus:",
        "Multi-user dashboards",
        "Lead scoring & priority alerts",
        "Advanced analytics & insights"
      ]
    }
  ];

  const comparisonFeatures = [
    {
      name: "Smart Website Chatbot",
      description: "Instantly engage your visitors, answer common questions, and capture high-quality leads 24/7.",
      base: true,
      premium: true,
      elite: true
    },
    {
      name: "Basic AI Follow-Up",
      description: "Automatically sends personalized responses to new leads via email or text with no rep required.",
      base: true,
      premium: true,
      elite: true
    },
    {
      name: "Lead Tracking",
      description: "Get a simple, visual list of incoming leads, their messages, and their contact info. Nothing slips through the cracks.",
      base: true,
      premium: true,
      elite: true
    },
    {
      name: "Setup and Onboarding", 
      description: "We handle the entire install process — no tech skills needed. Includes support to go live fast.",
      base: true,
      premium: true,
      elite: true
    },
    {
      name: "AI-Powered Follow-Up Tools",
      description: "Send smarter, multi-touch sequences by email/SMS that adapt based on how the lead responds, fully automated.",
      base: false,
      premium: true,
      elite: true
    },
    {
      name: "Manager Dashboard",
      description: "See performance at a glance: response times, conversation volume, and sales opportunities by rep or source.",
      base: false,
      premium: true,
      elite: true
    },
    {
      name: "Team Activity & Reporting",
      description: "Know what your team is doing — and what they're missing. Track engagement, follow-ups, and handoffs with clarity.",
      base: false,
      premium: true,
      elite: true
    },
    {
      name: "Multi-User Dashboards",
      description: "Custom views for sales reps, managers, and admins. Tailored data access based on role.",
      base: false,
      premium: false,
      elite: true
    },
    {
      name: "Lead Scoring & Priority Alerts",
      description: "Focus on what matters. We rank leads by urgency and notify your team when a hot one comes in.",
      base: false,
      premium: false,
      elite: true
    },
    {
      name: "Advanced Analytics & Insights",
      description: "Deep performance reports to spot trends, improve conversion, and drive smarter decisions across the pipeline.",
      base: false,
      premium: false,
      elite: true
    }
  ];

  return (
    <section className="py-20 px-4">
      <VapiLauncher/>
      <div className="container mx-auto">
        {/* Pricing Plans */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-12">Our Pricing</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div 
                key={index} 
                className={`pricing-card ${plan.popular ? 'pricing-popular' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold">
                      Popular
                    </span>
                  </div>
                )}
                
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                
                <div className="flex items-baseline justify-center mb-8">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">{plan.period}</span>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-left">
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button onClick={scrollToContact} className="w-full hero-button">
                  Get Started
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mt-20">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
            Compare Pricing Plans to Find the Best
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-4 font-bold">Pricing Plans</th>
                  <th className="text-center p-4 font-bold">Base</th>
                  <th className="text-center p-4 font-bold">Premium</th>
                  <th className="text-center p-4 font-bold">Elite</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feature, index) => (
                  <tr key={index} className="border-b border-border">
                    <td className="p-4">
                      <div>
                        <h4 className="font-semibold mb-1">{feature.name}</h4>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </td>
                    <td className="p-4 text-center">
                      {feature.base && <Check className="feature-check w-5 h-5 mx-auto" />}
                    </td>
                    <td className="p-4 text-center">
                      {feature.premium && <Check className="feature-check w-5 h-5 mx-auto" />}
                    </td>
                    <td className="p-4 text-center">
                      {feature.elite && <Check className="feature-check w-5 h-5 mx-auto" />}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;