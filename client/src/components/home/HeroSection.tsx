import { Link } from "wouter";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-primary to-primary-dark text-primary-foreground py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              Empowering Digital Transformation Through Hyperautomation
            </h2>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              We help organizations optimize their business processes with intelligent automation solutions that drive efficiency and growth.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/services" className="btn-outline">
                Explore Our Services
              </Link>
              <Link href="/contact" className="btn-secondary">
                Get Started
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Digital Transformation" 
              className="rounded-lg shadow-2xl max-w-full h-auto" 
              width="600" 
              height="400"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
