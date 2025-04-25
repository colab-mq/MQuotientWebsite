import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { apiRequest } from "@/lib/queryClient";
import { JobListing } from "../types/careers";
import JobListingCard from "@/components/careers/JobListingCard";
import JobDetails from "@/components/careers/JobDetails";
import ApplicationForm from "@/components/careers/ApplicationForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, BriefcaseBusiness, Users, BadgeCheck, GraduationCap } from "lucide-react";

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState<JobListing | null>(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);

  const { data: jobs, isLoading, error } = useQuery<JobListing[]>({
    queryKey: ['/api/careers/jobs'],
  });

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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
          <p className="text-xl max-w-3xl">
            We're looking for exceptional talent to help us build innovative solutions. 
            Explore our open positions and become part of the MQuotient family.
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
                <span className="relative z-10">Why Work With Us</span>
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
                <span className="relative z-10">Open Positions</span>
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
            <span className="relative z-10">Our Benefits</span>
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
                <h3 className="text-xl font-semibold mb-2">Competitive Compensation</h3>
                <p className="text-muted-foreground">
                  We offer competitive salary packages that recognize your skills and experience.
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
                <h3 className="text-xl font-semibold mb-2">Health Insurance</h3>
                <p className="text-muted-foreground">
                  Comprehensive health coverage for you and your family.
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
                <h3 className="text-xl font-semibold mb-2">Flexible Work</h3>
                <p className="text-muted-foreground">
                  Remote work options and flexible hours to help you maintain work-life balance.
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
                <h3 className="text-xl font-semibold mb-2">Professional Development</h3>
                <p className="text-muted-foreground">
                  Budget for training, certifications, and conference attendance.
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
                <h3 className="text-xl font-semibold mb-2">Paid Time Off</h3>
                <p className="text-muted-foreground">
                  Generous vacation policy, plus paid sick leave and holidays.
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
                <h3 className="text-xl font-semibold mb-2">Team Events</h3>
                <p className="text-muted-foreground">
                  Regular team-building activities and social events to foster community.
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