import { JobListing } from "@/types/careers";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Clock } from "lucide-react";

interface JobListingCardProps {
  job: JobListing;
  onClick: () => void;
}

const JobListingCard = ({ job, onClick }: JobListingCardProps) => {
  return (
    <Card className="border border-border hover:shadow-md transition-shadow relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary-dark"></div>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl">{job.title}</CardTitle>
          <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20">
            {job.type}
          </Badge>
        </div>
        <div className="flex items-center text-muted-foreground text-sm mt-2">
          <MapPin className="h-4 w-4 mr-1" /> {job.location}
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground line-clamp-3">
          {job.description}
        </p>
        
        <div className="mt-4">
          <h4 className="text-sm font-medium mb-2">Key Requirements:</h4>
          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
            {job.requirements.slice(0, 3).map((req, index) => (
              <li key={index} className="line-clamp-1">{req}</li>
            ))}
            {job.requirements.length > 3 && (
              <li className="text-primary">+{job.requirements.length - 3} more</li>
            )}
          </ul>
        </div>
      </CardContent>
      <CardFooter className="pt-2">
        <Button 
          variant="ghost" 
          className="w-full text-primary hover:text-primary-dark hover:bg-primary/5 gap-2"
          onClick={onClick}
        >
          View Details <ArrowRight className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default JobListingCard;