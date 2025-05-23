import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { externalApiRequest } from "@/utils/externalApi";
import { API_CONFIG } from "@/config/api";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { FaMapMarkerAlt, FaEnvelope, FaLinkedinIn, FaCheck } from "react-icons/fa";
import { Send, ArrowRight } from "lucide-react";
import { mapContactFormToApiPayload } from "@/utils/mapper";

const contactFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string()
    .email({
      message: "Please enter a valid email address.",
    })
    .refine((email) => {
      // Get domain part of email (after @)
      const domain = email.split('@')[1];
      // List of common personal email domains
      const personalDomains = [
        'gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 
        'aol.com', 'icloud.com', 'mail.com', 'protonmail.com',
        'zoho.com', 'yandex.com', 'gmx.com', 'live.com',
        'msn.com', 'me.com', 'inbox.com'
      ];
      // Return true if domain is not in the list of personal domains
      return !personalDomains.includes(domain);
    }, {
      message: "Please use your company email address.",
    }),
  company: z.string().min(1, {
    message: "Company name is required.",
  }),
  countryCode: z.string().optional(),
  phone: z.string().optional(),
  serviceArea: z.string({
    required_error: "Please select a service area.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      countryCode: "",
      phone: "",
      serviceArea: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormValues) => {
      // If custom country code is selected, use the custom value
      if (data.countryCode === 'custom' && customCountryCode) {
        data = { ...data, countryCode: customCountryCode };
      }
      const mappedData = mapContactFormToApiPayload(data);
      // Use the external PHP backend instead of the local API
      return await externalApiRequest("POST", API_CONFIG.ENDPOINTS.PUBLIC.CONTACT, mappedData);
    },
    onSuccess: (data) => {
      toast({
        title: "Success!",
        description: data.message || "Your message has been sent successfully.",
      });
      form.reset();
      setCustomCountryCode("");
      setIsSubmitting(false);
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to send message. Please try again.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    },
  });

  function onSubmit(data: ContactFormValues) {
    setIsSubmitting(true);
    contactMutation.mutate(data);
  }

  const services = [
    "Intelligent Business Automation: AI + RPA",
    "Microsoft Power Platform Solutions",
    "AI-Powered Data Entry Workforce",
    "Cloud Services",
    "Managed Automation Services"
  ];
  
  const serviceAreas = [
    ...services,
    "Other (Please specify in message)"
  ];
  
  const countryCodes = [
    { value: "+1", label: "United States (+1)" },
    { value: "+44", label: "United Kingdom (+44)" },
    { value: "+91", label: "India (+91)" },
    { value: "+61", label: "Australia (+61)" },
    { value: "+49", label: "Germany (+49)" },
    { value: "+33", label: "France (+33)" },
    { value: "+81", label: "Japan (+81)" },
    { value: "+86", label: "China (+86)" },
    { value: "+65", label: "Singapore (+65)" },
    { value: "+971", label: "UAE (+971)" },
    { value: "+974", label: "Qatar (+974)" },
    { value: "+966", label: "Saudi Arabia (+966)" },
    { value: "+55", label: "Brazil (+55)" },
    { value: "+52", label: "Mexico (+52)" },
    { value: "+27", label: "South Africa (+27)" },
    { value: "+31", label: "Netherlands (+31)" },
    { value: "custom", label: "Not listed (enter manually)" },
  ];
  
  const [customCountryCode, setCustomCountryCode] = useState("");

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="contact" className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 z-0" />
      <div className="absolute top-40 left-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/5 rounded-full filter blur-3xl" />
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-heading">
          <h2 className="section-title">
            Let's Solve Big Problems — <span className="gradient-text">Partner With Us</span>
          </h2>
          <div className="section-divider"></div>
          <p className="section-subtitle max-w-3xl mx-auto">
            Ready to unlock the full potential of automation and AI?<br/>
            Whether you're starting your transformation journey or accelerating your next breakthrough, mquotient is here to make it real — and make it extraordinary.<br/>
            Let's create smarter, faster, future-proof solutions — tailored just for you.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <div className="mb-10">
              <h3 className="text-2xl font-semibold mb-6 relative inline-block">
                <span className="relative z-10">Contact Information</span>
                <span className="absolute bottom-0 left-0 w-full h-1 bg-primary/20 rounded-full"></span>
              </h3>
              <div className="space-y-5">
                <div className="flex items-start">
                  <div className="bg-background text-primary h-10 w-10 rounded-full flex items-center justify-center shadow-sm border border-border mr-4 flex-shrink-0 mt-0.5">
                    <FaMapMarkerAlt className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Address</h4>
                    <p className="text-foreground/80">C-61/3, Okhla Industrial Area, Phase II, New Delhi 110020, India</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-background text-primary h-10 w-10 rounded-full flex items-center justify-center shadow-sm border border-border mr-4 flex-shrink-0 mt-0.5">
                    <FaEnvelope className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Email</h4>
                    <p className="text-foreground/80">hi@mquotient.net</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-background text-primary h-10 w-10 rounded-full flex items-center justify-center shadow-sm border border-border mr-4 flex-shrink-0 mt-0.5">
                    <FaLinkedinIn className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">LinkedIn</h4>
                    <a 
                      href="https://www.linkedin.com/company/mquotient/" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="text-foreground/80 hover:text-primary transition-colors duration-200"
                    >
                      linkedin.com/company/mquotient
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 relative inline-block">
                <span className="relative z-10">Our Services</span>
                <span className="absolute bottom-0 left-0 w-full h-1 bg-primary/20 rounded-full"></span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center group">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 group-hover:bg-primary/20 transition-all duration-300">
                      <FaCheck className="text-primary h-3 w-3" />
                    </div>
                    <span className="text-foreground/80">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="bg-background border border-border rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl font-semibold mb-2 relative inline-block">
                <span className="relative z-10">Let's Talk Transformation</span>
                <span className="absolute bottom-0 left-0 w-full h-1 bg-primary/20 rounded-full"></span>
              </h3>
              <p className="mb-6 text-foreground/70 text-sm">No hard sells. Just a conversation about what's possible.</p>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your name" 
                              className="rounded-lg border-border focus:border-primary/50" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your company email" 
                              className="rounded-lg border-border focus:border-primary/50" 
                              {...field} 
                            />
                          </FormControl>
                          <p className="text-xs text-muted-foreground mt-1">Please use your company email address</p>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your company" 
                            className="rounded-lg border-border focus:border-primary/50" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="countryCode"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Country Code</FormLabel>
                          <Select 
                            onValueChange={(value) => {
                              field.onChange(value);
                              // Reset custom country code when changing selection
                              if (value !== 'custom') {
                                setCustomCountryCode("");
                              }
                            }}
                            value={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="rounded-lg border-border focus:border-primary/50">
                                <SelectValue placeholder="Select a country code" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {countryCodes.map((country) => (
                                <SelectItem key={country.value} value={country.value}>
                                  {country.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          {field.value === 'custom' && (
                            <div className="mt-2">
                              <Input
                                placeholder="Enter country code (e.g. +123)"
                                value={customCountryCode}
                                onChange={(e) => setCustomCountryCode(e.target.value)}
                                className="rounded-lg border-border focus:border-primary/50"
                              />
                            </div>
                          )}
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Phone number" 
                              className="rounded-lg border-border focus:border-primary/50" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="serviceArea"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Service Area</FormLabel>
                        <Select 
                          onValueChange={field.onChange}
                          value={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="rounded-lg border-border focus:border-primary/50">
                              <SelectValue placeholder="Select a service area" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {serviceAreas.map((service) => (
                              <SelectItem key={service} value={service}>
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Your message" 
                            className="resize-none rounded-lg border-border focus:border-primary/50" 
                            rows={4} 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full btn-primary border-none focus:ring-offset-0"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>Sending... <Send className="ml-2 h-4 w-4 animate-pulse" /></>
                    ) : (
                      <>Send Message <ArrowRight className="ml-2 h-4 w-4" /></>
                    )}
                  </Button>
                </form>
              </Form>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
