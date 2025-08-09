import chatbotIcon from "../assets/chatbot.png";
import processIcon from "../assets/process.png";
import mlIcon from "../assets/ml.png";
import analyticsIcon from "../assets/analytics.png";
import voiceIcon from "../assets/voiceai.png";
import integrationIcon from "../assets/integration.png";

const Services = () => {
  return (
    <section className="py-40 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our AI Services</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            From conversational AI to machine learning models, we offer comprehensive AI solutions that drive innovation and growth for your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="service-card">
            <div className="icon-circle"><img className="w-[30px] h-[30px]" src={chatbotIcon}/></div>
            <h3 className="text-xl font-bold mb-4">AI Agents</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Custom conversational AI solutions that handle customer service, leads, and support 24/7.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center text-sm">
                <span className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></span>
                Natural Language Output
              </li>
              <li className="flex items-center text-sm">
                <span className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></span>
                Multi-platform Integration
              </li>
              <li className="flex items-center text-sm">
                <span className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></span>
                Custom Training
              </li>
            </ul>
          </div>

          {/* Service 2 */}
          <div className="service-card">
            <div className="icon-circle"><img className="w-[30px] h-[30px]" src={voiceIcon}/></div>
            <h3 className="text-xl font-bold mb-4">Voice AI Solutions</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Voice technology integration using VAPI and other cutting-edge voice AI platforms.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center text-sm">
                <span className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></span>
                Voice Recognition
              </li>
              <li className="flex items-center text-sm">
                <span className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></span>
                Real-time Processing
              </li>
              <li className="flex items-center text-sm">
                <span className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></span>
                Custom Voice Models
              </li>
            </ul>
          </div>

          {/* Service 3 */}
          <div className="service-card">
            <div className="icon-circle"><img className="w-[30px] h-[30px]" src={mlIcon}/></div>
            <h3 className="text-xl font-bold mb-4">Machine Learning Models</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Develop and deploy custom ML models tailored to your specific business needs and data.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center text-sm">
                <span className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></span>
                Predictive Analytics
              </li>
              <li className="flex items-center text-sm">
                <span className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></span>
                Data Processing
              </li>
              <li className="flex items-center text-sm">
                <span className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></span>
                Model Optimization
              </li>
            </ul>
          </div>

          {/* Service 4 */}
          <div className="service-card">
            <div className="icon-circle"><img className="w-[30px] h-[30px]" src={integrationIcon}/></div>
            <h3 className="text-xl font-bold mb-4">AI Integration</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Seamlessly integrate AI capabilities into your existing systems and workflows.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center text-sm">
                <span className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></span>
                API Development
              </li>
              <li className="flex items-center text-sm">
                <span className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></span>
                System Integration
              </li>
              <li className="flex items-center text-sm">
                <span className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></span>
                Custom Solutions
              </li>
            </ul>
          </div>

          {/* Service 5 */}
          <div className="service-card">
            <div className="icon-circle"><img className="w-[30px] h-[30px]" src={analyticsIcon}/></div>
            <h3 className="text-xl font-bold mb-4">AI Analytics & Insights</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Transform your data into actionable insights with advanced AI-powered analytics.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center text-sm">
                <span className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></span>
                Data Visualization
              </li>
              <li className="flex items-center text-sm">
                <span className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></span>
                Automated Reporting
              </li>
              <li className="flex items-center text-sm">
                <span className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></span>
                Trend Analysis
              </li>
            </ul>
          </div>

          {/* Service 6 */}
          <div className="service-card">
            <div className="icon-circle"><img className="w-[30px] h-[30px]" src={processIcon}/></div>
            <h3 className="text-xl font-bold mb-4">Process Automation</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Automate repetitive tasks and workflows using intelligent AI-driven solutions.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center text-sm">
                <span className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></span>
                Workflow Optimization
              </li>
              <li className="flex items-center text-sm">
                <span className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></span>
                Task Automation
              </li>
              <li className="flex items-center text-sm">
                <span className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></span>
                Efficiency Improvement
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
