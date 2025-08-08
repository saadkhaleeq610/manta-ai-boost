import captureLeadsImg from "@/assets/capture-leads.jpg";
import followUpImg from "@/assets/follow-up.jpg";
import trackMattersImg from "@/assets/track-matters.jpg";
import closeSalesImg from "@/assets/close-sales.jpg";

const HowWeHelp = () => {
  const helpItems = [
    {
      title: "Capture Every Lead",
      description: "AI chatbot on your website answers questions and collects contact info, even after hours.",
      image: captureLeadsImg
    },
    {
      title: "Follow Up Instantly", 
      description: "Sales reps get instant suggestions for who to contact and what to say next.",
      image: followUpImg
    },
    {
      title: "Track What Matters",
      description: "Managers see who's engaging, what's converting, and where the team needs support.",
      image: trackMattersImg
    },
    {
      title: "Close More Sales, Faster",
      description: "Our system keeps conversations alive, prevents leads from going cold, and helps your team close more clients without the chaos.",
      image: closeSalesImg
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Here's How We Help You Grow</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We combine smart AI tools with real-world sales workflows—built specifically for your business.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {helpItems.map((item, index) => (
            <div key={index} className="service-card text-center">
              <div className="mb-6">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeHelp;