import { FaQuoteLeft } from "react-icons/fa";

const ClientsSection = () => {
  const clients = [
    "Ingram Micro",
    "Trustmarque",
    "Camelot",
    "SWAST"
  ];

  const caseStudies = [
    {
      title: "Meter Reading Automation",
      description: "Implemented UiPath RPA solution for Ingram Micro to automate the meter reading process, significantly reducing manual effort and improving accuracy.",
      tags: ["RPA", "UiPath"],
      year: "2025"
    },
    {
      title: "Power Platform Tool Enhancement",
      description: "Enhanced an existing Power Platform tool for Ingram Micro, adding new features and improving user experience to better track and manage lean initiatives.",
      tags: ["Power Platform", "Dataverse"],
      year: "2025"
    }
  ];

  const testimonials = [
    {
      quote: "MQuotient delivered an exceptional RPA solution that automated our meter reading process, saving us countless hours of manual work and virtually eliminating errors. Their expertise and professionalism were evident throughout the project.",
      name: "Simon Hill",
      position: "Business Development Manager, Ingram Micro UK",
      initials: "SH"
    },
    {
      quote: "Working with MQuotient on our Power Platform tool enhancement project was a great experience. Their team understood our requirements perfectly and delivered a solution that exceeded our expectations.",
      name: "Client Testimonial",
      position: "Project Manager, Technology Company",
      initials: "TM"
    }
  ];

  return (
    <section id="clients" className="py-16 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-heading">
          <h2 className="section-title">Our Clients</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle max-w-3xl mx-auto">
            We work with leading organizations across various industries to drive digital transformation.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {clients.map((client, index) => (
            <div key={index} className="flex items-center justify-center p-4 bg-background rounded-lg shadow-md">
              <p className="font-bold text-xl">{client}</p>
            </div>
          ))}
        </div>

        {/* Case Studies */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold">Featured Projects</h3>
            <div className="w-16 h-1 bg-secondary mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-background rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-4">{study.title}</h4>
                  <p className="mb-4">
                    {study.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span><i className="fas fa-tag mr-1"></i> {study.tags.join(", ")}</span>
                    <span><i className="fas fa-calendar mr-1"></i> {study.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold">What Our Clients Say</h3>
            <div className="w-16 h-1 bg-secondary mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-background rounded-lg shadow-lg p-8 relative">
                <div className="text-primary/20 text-5xl absolute top-4 left-4">
                  <FaQuoteLeft />
                </div>
                <div className="relative z-10">
                  <p className="italic mb-6">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center">
                    <div className="mr-4">
                      <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center">
                        <span className="font-bold text-primary">{testimonial.initials}</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-muted-foreground text-sm">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
