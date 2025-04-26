import { JobListing } from "@/types/careers";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, ArrowRight } from "lucide-react";
import { FiFlag } from "react-icons/fi";

interface JobListingCardProps {
  job: JobListing;
  onClick: () => void;
}

const JobListingCard = ({ job, onClick }: JobListingCardProps) => {
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
    <Card className="h-full flex flex-col border border-border hover:shadow-md transition-shadow overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start mb-1">
          <CardTitle className="text-xl text-primary">{job.title}</CardTitle>
        </div>
        <div className="flex flex-wrap gap-2 mt-2">
          <Badge variant="outline" className="flex items-center gap-1 px-2 py-1">
            <MapPin className="h-3 w-3" /> 
            <span className="flex items-center gap-1">
              {displayFlag} {job.location}
            </span>
          </Badge>
          <Badge variant="outline" className="flex items-center gap-1 px-2 py-1">
            <Clock className="h-3 w-3" /> {job.type}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground line-clamp-3 mb-4">{job.description}</p>
        
        <div className="mt-4 space-y-3">
          <div>
            <h4 className="text-sm font-medium text-primary mb-1">Key Requirements:</h4>
            <ul className="ml-5 list-disc text-sm text-muted-foreground space-y-1">
              {job.requirements.slice(0, 3).map((req, index) => (
                <li key={index} className="line-clamp-1">{req}</li>
              ))}
              {job.requirements.length > 3 && <li>And more...</li>}
            </ul>
          </div>
        </div>
      </CardContent>
      <CardFooter className="pb-4 pt-0">
        <Button 
          variant="outline" 
          className="w-full mt-4 border-primary text-primary hover:bg-primary hover:text-white" 
          onClick={onClick}
        >
          View Details <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default JobListingCard;