import { JobListing } from "@/types/careers";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Send } from "lucide-react";

interface JobDetailsProps {
  job: JobListing;
  onApplyClick: () => void;
}

const JobDetails = ({ job, onApplyClick }: JobDetailsProps) => {
  return (
    <div className="space-y-8">
      <Card className="border border-border overflow-hidden">
        <div className="h-2 bg-gradient-to-r from-primary to-primary-dark"></div>
        <CardHeader className="pb-2">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
            <div>
              <CardTitle className="text-2xl md:text-3xl mb-2">{job.title}</CardTitle>
              <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" /> {job.location}
                </div>
                <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20">
                  {job.type}
                </Badge>
              </div>
            </div>
            <Button 
              onClick={onApplyClick} 
              className="px-8"
            >
              Apply Now <Send className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Job Description</h3>
              <p className="text-muted-foreground whitespace-pre-line">
                {job.description}
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3">Key Responsibilities</h3>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                {job.responsibilities.map((responsibility, index) => (
                  <li key={index}>{responsibility}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3">Requirements</h3>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                {job.requirements.map((requirement, index) => (
                  <li key={index}>{requirement}</li>
                ))}
              </ul>
            </div>
            
            {job.desirable && job.desirable.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold mb-3">Nice to Have</h3>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  {job.desirable.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
            
            <div className="pt-4">
              <Button 
                onClick={onApplyClick} 
                size="lg"
                className="w-full sm:w-auto"
              >
                Apply for this Position <Send className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default JobDetails;