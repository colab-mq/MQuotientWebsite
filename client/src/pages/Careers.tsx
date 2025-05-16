import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { apiRequest } from "@/lib/queryClient";
import { externalApiRequest } from "@/utils/externalApi";
import { API_CONFIG } from "@/config/api";
import { JobListing } from "@/types/careers";
import JobListingCard from "@/components/careers/JobListingCard";
import JobDetails from "@/components/careers/JobDetails";
import ApplicationForm from "@/components/careers/ApplicationForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, BriefcaseBusiness, Users, BadgeCheck, GraduationCap } from "lucide-react";

const Careers = () => {
  // Update page title for SEO
  useEffect(() => {
    document.title = "Careers at mquotient | Join Our Team of Automation Experts";
  }, []);
  const [selectedJob, setSelectedJob] = useState<JobListing | null>(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);

  // Define the correct order for job IDs as specified
  const jobOrder = [
    "technical-presales-lead-001",
    "business-analyst-001",
    "developer-001", // Now labeled as "Automation Solutions Consultant"
    "csharp-engineer-001",
    "ml-intern-001"
  ];

  const { data: fetchedJobs, isLoading, error } = useQuery<JobListing[]>({
    queryKey: ['careers/jobs'],
    queryFn: async () => {
      // Use the PHP backend API instead of the local API
      return await externalApiRequest('GET', API_CONFIG.ENDPOINTS.CAREERS_JOBS);
    }
  });
  
  // Sort jobs based on the predefined order
  const jobs = fetchedJobs ? [...fetchedJobs].sort((a, b) => {
    return jobOrder.indexOf(a.id) - jobOrder.indexOf(b.id);
  }) : undefined;

  const handleJobClick = (job: JobListing) => {
    setSelectedJob(job);
    setShowApplicationForm(false);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleApplyClick = () => {
    setShowApplicationForm(true);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleBackClick = () => {
    setShowApplicationForm(false);
  };

  // Animations
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="pt-16 pb-16 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-primary-dark text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Build More Than a Career — Build Ownership</h1>
          <p className="text-xl max-w-3xl">
            We're looking for exceptional talent to help us build innovative solutions. 
            Explore our open positions and become part of the mquotient family.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {showApplicationForm && selectedJob ? (
          <div className="mb-8">
            <button 
              onClick={handleBackClick}
              className="mb-4 text-primary hover:text-primary-dark flex items-center gap-2"
            >
              ← Back to job details
            </button>
            <ApplicationForm job={selectedJob} />
          </div>
        ) : selectedJob ? (
          <div className="mb-16">
            <button 
              onClick={() => setSelectedJob(null)}
              className="mb-4 text-primary hover:text-primary-dark flex items-center gap-2"
            >
              ← Back to all positions
            </button>
            <JobDetails job={selectedJob} onApplyClick={handleApplyClick} />
          </div>
        ) : (
          <>
            {/* Why Work With Us Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-10 text-center relative">
                <span className="relative z-10">Your Growth. Your Rewards. Your Future.</span>
                <span className="absolute bottom-0 left-0 right-0 h-1 bg-primary/20 rounded-full"></span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="border border-border hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                      <BriefcaseBusiness className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Meaningful Work</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Work on challenging projects that make a real impact on our clients' businesses.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border border-border hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Growth & Learning</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Continuous learning opportunities and a clear career progression path.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border border-border hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Great Culture</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      A supportive and collaborative environment where your ideas are valued.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border border-border hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                      <BadgeCheck className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Work-Life Balance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Flexible work arrangements and a strong focus on employee wellbeing.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* Open Positions Section */}
            <div>
              <h2 className="text-3xl font-bold mb-10 text-center relative">
                <span className="relative z-10">Join Us, Build, Thrive</span>
                <span className="absolute bottom-0 left-0 right-0 h-1 bg-primary/20 rounded-full"></span>
              </h2>
              
              {isLoading ? (
                <div className="text-center py-8">Loading open positions...</div>
              ) : error ? (
                <div className="text-center py-8 text-red-500">
                  Failed to load job listings. Please try again later.
                </div>
              ) : jobs && jobs.length > 0 ? (
                <motion.div 
                  className="grid grid-cols-1 lg:grid-cols-2 gap-6"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {jobs.map((job) => (
                    <motion.div key={job.id} variants={itemVariants}>
                      <JobListingCard job={job} onClick={() => handleJobClick(job)} />
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <div className="text-center py-8">
                  No open positions available at the moment. Please check back later.
                </div>
              )}
            </div>
          </>
        )}
      </div>
      
      {/* Benefits Section */}
      <div className="bg-slate-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-10 text-center relative">
            <span className="relative z-10">Benefits: Beyond a Job, Your Future</span>
            <span className="absolute bottom-0 left-0 right-0 h-1 bg-primary/20 rounded-full"></span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            <div className="flex items-start gap-4">
              <div className="mt-1">
                <div className="rounded-full bg-primary/10 p-1">
                  <Check className="h-5 w-5 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Grow. Deliver. Thrive.</h3>
                <p className="text-muted-foreground">
                  We fuel your growth with training, skill-building, and opportunities to excel. Your progress drives our success. We invest in your potential, celebrate your milestones, and reward your impact. When you grow, we all win.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="mt-1">
                <div className="rounded-full bg-primary/10 p-1">
                  <Check className="h-5 w-5 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Performance Over Punching the Clock</h3>
                <p className="text-muted-foreground">
                  We focus on outcomes, not hours. Our flexible hours and remote work options empower you to deliver your best. Work smart, recharge fully, and make time for what matters most — your family, your passions, your life.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="mt-1">
                <div className="rounded-full bg-primary/10 p-1">
                  <Check className="h-5 w-5 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Partners in Success</h3>
                <p className="text-muted-foreground">
                  When the company wins, you win. Through profit-sharing and employee stock ownership plans (ESOPs), you're not just part of the team — you're a true partner in our success story.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="mt-1">
                <div className="rounded-full bg-primary/10 p-1">
                  <Check className="h-5 w-5 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Happiness is Non-Negotiable</h3>
                <p className="text-muted-foreground">
                  Happiness Drives Excellence. We create a positive, energizing workplace where you feel valued and supported. Your joy fuels our success, and positivity is the foundation of our journey together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;