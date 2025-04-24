import { FaCheck } from "react-icons/fa";

const About = () => {
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

  const values = [
    {
      title: "Excellence",
      description: "We strive for excellence in everything we do, from the solutions we build to the service we provide."
    },
    {
      title: "Innovation",
      description: "We embrace innovation and continuously explore new technologies and approaches to deliver better results."
    },
    {
      title: "Integrity",
      description: "We act with integrity and transparency, building trust-based relationships with our clients and partners."
    },
    {
      title: "Client Focus",
      description: "We put our clients at the center of everything we do, focusing on delivering solutions that address their specific challenges."
    }
  ];

  return (
    <div className="pt-16 pb-16">
      <div className="bg-gradient-to-r from-primary to-primary-dark text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About MQuotient</h1>
          <p className="text-xl max-w-3xl">
            We're a specialized provider of hyperautomation solutions, helping organizations transform their business processes for greater efficiency and growth.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="mb-4">
              MQuotient Business Services was founded with a vision to help organizations leverage automation and digital technologies to transform their operations and drive growth. Over the years, we've built a reputation for delivering innovative solutions that address complex business challenges.
            </p>
            <p className="mb-4">
              With a team of experienced professionals specializing in RPA, Power Platform, and custom development, we've successfully delivered over 100 projects across various industries, helping our clients achieve significant improvements in operational efficiency and cost savings.
            </p>
            <p>
              Our commitment to excellence, technical expertise, and client-focused approach has made us a trusted partner for organizations looking to embark on their digital transformation journey.
            </p>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Team Collaboration" 
              className="rounded-lg shadow-xl" 
            />
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-muted p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Technology Expertise</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-3" />
                  <span>UiPath and Blue Prism RPA platforms</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-3" />
                  <span>Microsoft Power Platform (Power Apps, Power Automate, Power BI)</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-3" />
                  <span>Custom application development</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-3" />
                  <span>System integration</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-3" />
                  <span>Test automation</span>
                </li>
              </ul>
            </div>
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Industry Experience</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-3" />
                  <span>Technology and IT Services</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-3" />
                  <span>Healthcare and Life Sciences</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-3" />
                  <span>Financial Services</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-3" />
                  <span>Retail and Distribution</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-3" />
                  <span>Manufacturing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-6 text-center">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leaders.map((leader, index) => (
              <div key={index} className="team-card">
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
    </div>
  );
};

export default About;
