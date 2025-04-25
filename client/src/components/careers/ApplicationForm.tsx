import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { JobListing, CareerApplication } from "@/types/careers";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage,
  FormDescription
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Send, Loader2, FileText } from "lucide-react";

// Define form validation schema
const applicationFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters."
  }),
  email: z.string().email({
    message: "Please enter a valid email address."
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number."
  }),
  position: z.string().min(1, {
    message: "Position is required."
  }),
  message: z.string().min(10, {
    message: "Cover letter must be at least 10 characters."
  })
});

type ApplicationFormValues = z.infer<typeof applicationFormSchema>;

interface ApplicationFormProps {
  job: JobListing;
}

const ApplicationForm = ({ job }: ApplicationFormProps) => {
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const { toast } = useToast();

  const form = useForm<ApplicationFormValues>({
    resolver: zodResolver(applicationFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      position: job.title,
      message: ""
    }
  });

  const applicationMutation = useMutation({
    mutationFn: async (data: ApplicationFormValues) => {
      const formData = new FormData();
      
      // Add form fields to FormData
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("phone", data.phone);
      formData.append("position", data.position);
      formData.append("message", data.message);
      
      // Add resume file if it exists
      if (resumeFile) {
        formData.append("resume", resumeFile);
      }
      
      const response = await fetch("/api/careers/apply", {
        method: "POST",
        body: formData,
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to submit application");
      }
      
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Application Submitted!",
        description: "Thank you for your application. We will get back to you soon.",
      });
      form.reset();
      setResumeFile(null);
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to submit application. Please try again.",
        variant: "destructive",
      });
    }
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      
      // Check file size (limit to 10MB)
      if (file.size > 10 * 1024 * 1024) {
        toast({
          title: "File Too Large",
          description: "Resume file must be smaller than 10MB.",
          variant: "destructive",
        });
        return;
      }
      
      // Check file type
      const allowedTypes = [
        "application/pdf", 
        "application/msword", 
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "text/plain",
        "application/rtf"
      ];
      
      if (!allowedTypes.includes(file.type)) {
        toast({
          title: "Invalid File Type",
          description: "Please upload a PDF, DOC, DOCX, TXT, or RTF file.",
          variant: "destructive",
        });
        return;
      }
      
      setResumeFile(file);
    }
  };

  const onSubmit = (data: ApplicationFormValues) => {
    if (!resumeFile) {
      toast({
        title: "Resume Required",
        description: "Please upload your resume before submitting.",
        variant: "destructive",
      });
      return;
    }
    
    applicationMutation.mutate(data);
  };

  return (
    <Card className="border border-border">
      <CardHeader className="pb-3">
        <CardTitle className="text-2xl">Apply for: {job.title}</CardTitle>
      </CardHeader>
      <CardContent>
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
                      <Input placeholder="Your name" {...field} />
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
                      <Input placeholder="Your email address" type="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input placeholder="Your phone number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

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
                  <FormLabel>Cover Letter / Additional Information</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Tell us why you're a good fit for this position..." 
                      className="min-h-32 resize-y"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div>
              <FormLabel htmlFor="resume">Resume</FormLabel>
              <div className="mt-1 flex items-center gap-3">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => document.getElementById("resume")?.click()}
                  className="gap-2"
                >
                  <FileText className="h-4 w-4" />
                  {resumeFile ? "Change Resume" : "Upload Resume"}
                </Button>
                {resumeFile && (
                  <span className="text-sm text-muted-foreground">
                    {resumeFile.name} ({(resumeFile.size / 1024 / 1024).toFixed(2)} MB)
                  </span>
                )}
              </div>
              <FormDescription className="mt-2">
                PDF, DOC, DOCX, TXT, or RTF file. Max 10MB.
              </FormDescription>
              <input
                id="resume"
                type="file"
                accept=".pdf,.doc,.docx,.txt,.rtf,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,text/plain,application/rtf"
                className="hidden"
                onChange={handleFileChange}
              />
            </div>

            <Button 
              type="submit"
              className="w-full"
              disabled={applicationMutation.isPending}
            >
              {applicationMutation.isPending ? (
                <>Submitting... <Loader2 className="ml-2 h-4 w-4 animate-spin" /></>
              ) : (
                <>Submit Application <Send className="ml-2 h-4 w-4" /></>
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default ApplicationForm;