import { FaCheck } from "react-icons/fa";

const AboutSection = () => {
  const leaders = [
    {
      name: "Rishi Behal",
      position: "Managing Director",
      bio: "Leading MQuotient's strategic vision and growth initiatives, with extensive experience in technology consulting and digital transformation.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Technical Leadership",
      position: "CTO",
      bio: "Guiding our technical strategy and innovation efforts, ensuring we deliver cutting-edge automation solutions to our clients.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Operations Leadership",
      position: "COO",
      bio: "Overseeing day-to-day operations and ensuring smooth delivery of client projects with excellence and efficiency.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    }
  ];

  return (
    <section id="about" className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-heading">
          <h2 className="section-title">About MQuotient</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle max-w-3xl mx-auto">
            MQuotient Business Services is a specialized provider of hyperautomation solutions, helping organizations transform their business processes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="mb-6">
              At MQuotient, we deliver innovative automation solutions that streamline operations, reduce costs, and increase productivity. Our expert team specializes in RPA implementation, custom software development, and digital transformation strategies.
            </p>
            <h3 className="text-2xl font-semibold mb-4">Our Approach</h3>
            <p className="mb-6">
              We partner with leading technology providers to deliver comprehensive solutions customized to your specific business needs. Our methodology focuses on identifying high-value automation opportunities and implementing solutions with measurable ROI.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="flex items-center">
                <div className="bg-muted p-3 rounded-full mr-4">
                  <FaCheck className="text-green-500" />
                </div>
                <span className="font-medium">Process Excellence</span>
              </div>
              <div className="flex items-center">
                <div className="bg-muted p-3 rounded-full mr-4">
                  <FaCheck className="text-green-500" />
                </div>
                <span className="font-medium">Technical Expertise</span>
              </div>
              <div className="flex items-center">
                <div className="bg-muted p-3 rounded-full mr-4">
                  <FaCheck className="text-green-500" />
                </div>
                <span className="font-medium">Continuous Innovation</span>
              </div>
              <div className="flex items-center">
                <div className="bg-muted p-3 rounded-full mr-4">
                  <FaCheck className="text-green-500" />
                </div>
                <span className="font-medium">Client Partnership</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="MQuotient Team" 
              className="rounded-lg shadow-xl" 
              width="600" 
              height="400"
            />
            <div className="absolute -bottom-8 -left-8 bg-background p-6 rounded-lg shadow-lg hidden md:block">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold">Years of Experience</h4>
                <span className="text-secondary font-bold text-3xl">7+</span>
              </div>
              <div className="flex items-center justify-between">
                <h4 className="font-semibold">Successful Projects</h4>
                <span className="text-secondary font-bold text-3xl">100+</span>
              </div>
            </div>
          </div>
        </div>

        {/* Leadership */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold">Our Leadership</h3>
            <div className="w-16 h-1 bg-secondary mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leaders.map((leader, index) => (
              <div 
                key={index} 
                className="team-card"
              >
                <div className="text-center mb-4">
                  <div className="team-image">
                    <img 
                      src={leader.image} 
                      alt={leader.name} 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h4 className="font-semibold text-xl">{leader.name}</h4>
                  <p className="text-muted-foreground">{leader.position}</p>
                </div>
                <p className="text-center">
                  {leader.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
