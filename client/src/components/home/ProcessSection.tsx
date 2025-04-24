import { FaArrowRight } from "react-icons/fa";

const ProcessSection = () => {
  const steps = [
    {
      number: "1",
      title: "Assess & Design",
      description: "We analyze your processes, identify automation opportunities, and design optimal solutions tailored to your needs."
    },
    {
      number: "2",
      title: "Build & Test",
      description: "We develop automation solutions and thoroughly test them to ensure they meet all requirements and function correctly."
    },
    {
      number: "3",
      title: "Deploy & Go Live",
      description: "We implement the solution in your production environment, ensuring a smooth transition and minimal disruption."
    },
    {
      number: "4",
      title: "Support & Optimize",
      description: "We provide ongoing support and continuously optimize your automation solutions to maximize their value and effectiveness."
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-heading">
          <h2 className="section-title">Our Approach</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle max-w-3xl mx-auto">
            We follow a structured methodology to ensure successful implementation of automation solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="process-step">
                <div className="process-number">
                  <span>{step.number}</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-foreground">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                  <FaArrowRight className="text-2xl text-primary-light" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
