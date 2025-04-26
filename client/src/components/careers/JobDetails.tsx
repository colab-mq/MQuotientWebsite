import { JobListing } from "@/types/careers";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Calendar, Briefcase } from "lucide-react";

interface JobDetailsProps {
  job: JobListing;
  onApplyClick: () => void;
}

const JobDetails = ({ job, onApplyClick }: JobDetailsProps) => {
  // Function to get the appropriate flag for location
  const getLocationFlag = (location: string) => {
    if (location.includes("India")) {
      return "🇮🇳"; // Indian flag
    } else if (location.includes("Philippines")) {
      return "🇵🇭"; // Philippines flag
    } else if (location.includes("UK")) {
      return "🇬🇧"; // UK flag
    } else {
      return "🌎"; // Global/default
    }
  };

  // Check if location contains both India and Philippines
  const displayFlag = job.location.includes("India or Philippines") 
    ? "🇮🇳 🇵🇭" 
    : getLocationFlag(job.location);

  return (
    <div className="space-y-8">
      <Card className="border border-border overflow-hidden">
        <CardHeader className="bg-slate-50">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
            <div>
              <CardTitle className="text-2xl text-primary mb-2">{job.title}</CardTitle>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="flex items-center gap-1 px-3 py-1">
                  <MapPin className="h-3 w-3" /> 
                  <span className="flex items-center gap-1">
                    {displayFlag} {job.location}
                  </span>
                </Badge>
                <Badge variant="outline" className="flex items-center gap-1 px-3 py-1">
                  <Clock className="h-3 w-3" /> {job.type}
                </Badge>
              </div>
            </div>
            <Button 
              className="bg-primary hover:bg-primary-dark text-white" 
              onClick={onApplyClick}
            >
              Apply Now
            </Button>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Job Description</h3>
              <p className="text-muted-foreground whitespace-pre-line">{job.description}</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3">Responsibilities</h3>
              <ul className="ml-6 list-disc space-y-1 text-muted-foreground">
                {job.responsibilities.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3">Requirements</h3>
              <ul className="ml-6 list-disc space-y-1 text-muted-foreground">
                {job.requirements.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            
            {job.desirable && job.desirable.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold mb-3">Nice to Have</h3>
                <ul className="ml-6 list-disc space-y-1 text-muted-foreground">
                  {job.desirable.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
      
      <div className="flex justify-center">
        <Button 
          size="lg"
          className="bg-primary hover:bg-primary-dark text-white" 
          onClick={onApplyClick}
        >
          Apply for This Position
        </Button>
      </div>
    </div>
  );
};

export default JobDetails;