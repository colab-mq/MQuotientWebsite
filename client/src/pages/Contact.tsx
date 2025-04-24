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
                    53/16, Richmond Road<br />
                    Bangalore - 560025<br />
                    Karnataka, India
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9942373402377!2d77.60129027504607!3d12.969148987392629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae167e3faa4ad5%3A0xaddffd328fff986!2sRichmond%20Rd%2C%20Bengaluru%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sus!4v1679908105800!5m2!1sen!2sus" 
                width="100%" 
                height="450" 
                style={{ border: 0 }}
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="MQuotient Office Location"
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
