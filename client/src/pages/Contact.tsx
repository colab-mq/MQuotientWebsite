import ContactSection from "@/components/home/ContactSection";
import { FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="pt-16 pb-16">
      <div className="bg-gradient-to-r from-primary to-primary-dark text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl">
            We're here to help you with your digital transformation journey. Get in touch with us today.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
            <p className="mb-8">
              Whether you have a question about our services, want to discuss a potential project, 
              or are interested in learning more about how we can help your organization, 
              our team is ready to assist you.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/20 text-primary flex items-center justify-center mr-4">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Headquarters</h3>
                  <p className="text-muted-foreground">
                    C-61/3, Okhla Industrial Area<br />
                    Phase II, New Delhi 110020<br />
                    India
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/20 text-primary flex items-center justify-center mr-4">
                  <FaPhone />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Schedule a Call</h3>
                  <p className="text-muted-foreground">
                    Fill out our contact form, and our team will reach out to schedule a call at your convenience.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-muted rounded-lg overflow-hidden h-full">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.0086510421546!2d77.2694848!3d28.5665036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3d451db0e43%3A0x2b6ece9fc1ab07a6!2sC-61%2F3%2C%20Okhla%20Industrial%20Area%2C%20Phase%202%2C%20Okhla%20Industrial%20Estate%2C%20New%20Delhi%2C%20Delhi%20110020!5e0!3m2!1sen!2sin!4v1745673700712!5m2!1sen!2sin" 
                width="100%" 
                height="450" 
                style={{ border: 0 }}
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="mquotient Office Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <ContactSection />
    </div>
  );
};

export default Contact;
