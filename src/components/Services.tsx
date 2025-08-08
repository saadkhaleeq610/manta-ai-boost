const Services = () => {
  const services = [
    {
      title: "AI Agents",
      description: "Custom conversational AI solutions that handle customer service, leads, and support 24/7.",
      features: ["Natural Language Output", "Multi-platform Integration", "Custom Training"]
    },
    {
      title: "Voice AI Solutions", 
      description: "Voice technology integration using VAPI and other cutting-edge voice AI platforms.",
      features: ["Voice Recognition", "Real-time Processing", "Custom Voice Models"]
    },
    {
      title: "Machine Learning Models",
      description: "Develop and deploy custom ML models tailored to your specific business needs and data.",
      features: ["Predictive Analytics", "Data Processing", "Model Optimization"]
    },
    {
      title: "AI Integration",
      description: "Seamlessly integrate AI capabilities into your existing systems and workflows.",
      features: ["API Development", "System Integration", "Custom Solutions"]
    },
    {
      title: "AI Analytics & Insights",
      description: "Transform your data into actionable insights with advanced AI-powered analytics.",
      features: ["Data Visualization", "Automated Reporting", "Trend Analysis"]
    },
    {
      title: "Process Automation",
      description: "Automate repetitive tasks and workflows using intelligent AI-driven solutions.",
      features: ["Workflow Optimization", "Task Automation", "Efficiency Improvement"]
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our AI Services</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            From conversational AI to machine learning models, we offer comprehensive AI solutions that drive innovation and growth for your business.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="icon-circle">
                {/* Placeholder for icon */}
              </div>
              
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;