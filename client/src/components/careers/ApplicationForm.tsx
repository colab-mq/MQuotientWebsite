import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { JobListing } from "@/types/careers";
import { useToast } from "@/hooks/use-toast";
import { uploadFormData } from "@/utils/externalApi";
import { API_CONFIG } from "@/config/api";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { X } from "lucide-react";

// Validation schema for the application form
const applicationFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  countryCode: z.string().optional(),
  phone: z.string().min(5, { message: "Please enter a valid phone number" }),
  position: z.string().min(1, { message: "Position is required" }),
  message: z.string().min(10, { message: "Cover letter must be at least 10 characters" }).max(1000, { message: "Cover letter must not exceed 1000 characters" }),
  sendCopy: z.boolean().optional(),
});

type ApplicationFormValues = z.infer<typeof applicationFormSchema>;

interface ApplicationFormProps {
  job: JobListing;
}

const ApplicationForm = ({ job }: ApplicationFormProps) => {
  const { toast } = useToast();
  const [resume, setResume] = useState<File | null>(null);
  const [resumeName, setResumeName] = useState<string>("");
  const [customCountryCode, setCustomCountryCode] = useState("");
  
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
  
  const form = useForm<ApplicationFormValues>({
    resolver: zodResolver(applicationFormSchema),
    defaultValues: {
      name: "",
      email: "",
      countryCode: "",
      phone: "",
      position: job.title,
      message: "",
      sendCopy: true,
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: ApplicationFormValues) => {
      // If custom country code is selected, use the custom value
      if (data.countryCode === 'custom' && customCountryCode) {
        data = { ...data, countryCode: customCountryCode };
      }
      
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("countryCode", data.countryCode || "");
      formData.append("phone", data.phone);
      formData.append("position", data.position);
      formData.append("message", data.message);
      formData.append("sendCopy", data.sendCopy ? "true" : "false");
      
      if (resume) {
        formData.append("resume", resume);
      }
      
      // Using our uploadFormData utility to send to the PHP backend
      return await uploadFormData(API_CONFIG.ENDPOINTS.CAREERS_APPLY, formData);
    },
    onSuccess: () => {
      toast({
        title: "Application Submitted",
        description: "Your application has been successfully submitted. We'll be in touch soon!",
      });
      form.reset();
      setResume(null);
      setCustomCountryCode("");
    },
    onError: (error) => {
      toast({
        title: "Submission Failed",
        description: "There was a problem submitting your application. Please try again later.",
        variant: "destructive",
      });
      console.error("Application submission error:", error);
    },
  });

  const onSubmit = (data: ApplicationFormValues) => {
    mutation.mutate(data);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setResume(file);
      setResumeName(file.name);
    }
  };
  
  const handleRemoveResume = () => {
    setResume(null);
    setResumeName("");
    
    // Reset the file input by recreating it
    const fileInput = document.getElementById("resume") as HTMLInputElement;
    if (fileInput) {
      fileInput.value = "";
    }
  };

  return (
    <Card className="border border-border">
      <CardHeader className="bg-slate-50">
        <CardTitle className="text-xl">
          Apply for: <span className="text-primary">{job.title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Maya Rosario" {...field} />
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
                      <Input type="email" placeholder="maya.rosario@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="space-y-4">
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
                          <SelectTrigger>
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
                        <Input placeholder="Enter phone number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="position"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Position</FormLabel>
                    <FormControl>
                      <Input {...field} readOnly />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cover Letter</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Tell us about your experience, skills, and why you're interested in this position..."
                      className="min-h-[150px]"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Introduce yourself and explain why you're a good fit for this role.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div>
              <FormLabel htmlFor="resume">Resume/CV (Optional)</FormLabel>
              {resume ? (
                <div className="flex items-center gap-2 p-2 border rounded-md mt-1">
                  <div className="flex-1 text-sm truncate">
                    {resumeName}
                  </div>
                  <Button 
                    type="button" 
                    variant="ghost" 
                    size="sm" 
                    onClick={handleRemoveResume}
                    className="h-8 w-8 p-0"
                  >
                    <X className="h-4 w-4" />
                    <span className="sr-only">Remove file</span>
                  </Button>
                </div>
              ) : (
                <Input
                  id="resume"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="mt-1"
                />
              )}
              <FormDescription>
                Upload your resume in PDF, DOC, or DOCX format (max 5MB).
              </FormDescription>
            </div>
            
            <div className="flex items-center space-x-2 my-4">
              <FormField
                control={form.control}
                name="sendCopy"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>
                        Send me a copy of this application
                      </FormLabel>
                      <FormDescription>
                        We'll email a copy of your submission to the email address you provided.
                      </FormDescription>
                    </div>
                  </FormItem>
                )}
              />
            </div>
            
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary-dark text-white"
              disabled={mutation.isPending}
            >
              {mutation.isPending ? "Submitting..." : "Submit Application"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default ApplicationForm;