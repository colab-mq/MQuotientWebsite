/**
 * Job Listings Data
 * 
 * This file contains the current job openings at mquotient.
 * To update job listings, simply modify this file.
 */

export interface JobListing {
  id: string;
  title: string;
  location: string;
  type: string; // Full-time, Part-time, Contract
  description: string;
  responsibilities: string[];
  requirements: string[];
  desirable?: string[]; // Optional nice-to-have skills
  active: boolean; // Set to false to hide a listing without deleting it
}

export const jobListings: JobListing[] = [
  {
    id: "developer-001",
    title: "Developer",
    location: "Remote (India or Philippines)",
    type: "Full-time",
    description: "This role is critical for building, testing, deploying, and supporting the automation or enhancement solutions. Depending on the specific project, the required technology expertise will vary, focusing on either UiPath RPA, Blue Prism RPA, or Microsoft Power Platform.",
    responsibilities: [
      "Build the solution/product based on the agreed client requirement or design captured from the Business Requirement Document",
      "Test the functionality of the bot or product as designed and based on agreed client requirements",
      "Support the deployment and stability monitoring of the product or solution",
      "Monitor the stability of the robot and apply fixes if necessary",
      "Support relevant technical questions from internal and external project members",
      "Work together with other project team members, including but not limited to the Project Manager, Solution Architect, and Business Analyst, to deliver the project",
      "Develop and implement automated workflows and processes"
    ],
    requirements: [
      "Certified personnel",
      "Specific certification relevant to the project technology (e.g., UiARD Certified for UiPath RPA projects)",
      "Proficiency in the relevant automation technology platform (e.g., UiPath Studio, Power Platform, Power Automate, Dataverse, PowerBI, Blue Prism)",
      "Familiarity with setting up and working within development environments (dev, test, prod)",
      "Experience with screenshare setups for collaboration",
      "Ability to work remotely and utilise remote desktop/VPN access"
    ],
    desirable: [
      "Flexibility to follow the time zone of the customer when required",
      "Experience working in distributed development teams",
      "Previous experience in banking, insurance, or healthcare sectors"
    ],
    active: true
  },
  {
    id: "project-manager-001",
    title: "Project Manager",
    location: "Remote (India or Philippines)",
    type: "Full-time",
    description: "The Project Manager is responsible for the overall planning, execution, and closure of the automation projects, coordinating the delivery team and ensuring successful outcomes.",
    responsibilities: [
      "Manage overall project execution",
      "Develop project timeline",
      "Generate progress reports (e.g., End of Week Progress Report)",
      "Mitigate Risks and Issues",
      "Secure signoffs per milestone and decisions",
      "Oversee the overall project delivery",
      "Work together with other project team members, including Developers and Business Analysts",
      "Coordinate any change to the SOW using the Project Change Request Form",
      "Collaborate to adjust project schedules and redeploy resources expeditiously in the event of schedule delays",
      "Meet at the end of the project to bring to closure and resolve any open project issues"
    ],
    requirements: [
      "Experience in managing technology or automation projects",
      "Ability to develop plans, track progress, and report status",
      "Strong risk management and problem-solving skills",
      "Ability to facilitate collaboration and manage stakeholders"
    ],
    desirable: [
      "PMP or Prince2 certification",
      "Experience with Agile methodologies",
      "Experience in RPA or automation projects",
      "Strong communication skills and ability to work across time zones"
    ],
    active: true
  },
  {
    id: "business-analyst-001",
    title: "Business Analyst",
    location: "Remote (India or Philippines)",
    type: "Full-time",
    description: "The Business Analyst works closely with stakeholders to understand processes, identify automation opportunities, and define the requirements for the automation solutions.",
    responsibilities: [
      "Conduct side by side discussions with Subject Matter Experts (SMEs) of the business",
      "Understand the process, including the overview, challenges, and recommended solution",
      "Create process relevant documents such as Process Flows, Process Definition Documents (PDD), Business Requirements Documents (BRD), and Solution Designs",
      "Present the solution to business stakeholders",
      "Work together with other project team members, including the Project Manager and Developers",
      "Identify and assess processes suitable for automation",
      "Conduct discovery workshops with key stakeholders",
      "Evaluate each identified process for automation feasibility, complexity, and expected Return on Investment (ROI)"
    ],
    requirements: [
      "Strong analytical and problem-solving skills",
      "Excellent communication and interpersonal skills for interacting with business users",
      "Ability to create detailed process documentation",
      "Experience in process discovery, analysis, and requirements gathering for automation"
    ],
    desirable: [
      "Experience with RPA or process automation technologies",
      "Understanding of software development lifecycle",
      "Experience in creating workflow diagrams and process maps",
      "Familiarity with Lean Six Sigma or process improvement methodologies"
    ],
    active: true
  },
  {
    id: "solution-engineer-001",
    title: "Solution Engineer / System Architect",
    location: "Remote (India or Philippines)",
    type: "Full-time",
    description: "The Solution Engineer/System Architect is responsible for configuring the supporting IT infrastructure, ensuring environments are set up correctly, and collaborating with client's IT teams on technical prerequisites.",
    responsibilities: [
      "Configuring the IT infrastructure that supports the automation solutions (specifically for RPA solutions)",
      "Ensuring environments (development, test, production) are set up correctly",
      "Understanding infrastructure requirements related to servers, databases, networking, firewall adjustments, and security settings",
      "Collaborating with client's IT teams on technical prerequisites",
      "Working together with other project team members like Developers"
    ],
    requirements: [
      "Expertise in setting up and configuring IT infrastructure for automation platforms",
      "Knowledge of server, database, and network configurations",
      "Understanding of security settings and firewall requirements",
      "Experience with virtual machines (VMs) and remote access technologies (VPN)"
    ],
    desirable: [
      "Experience with cloud platforms (Azure, AWS)",
      "Knowledge of containerization technologies",
      "Experience with DevOps practices",
      "Understanding of IT governance and compliance requirements"
    ],
    active: true
  }
];

/**
 * Function to get all active job listings
 */
export function getActiveJobListings(): JobListing[] {
  return jobListings.filter(job => job.active);
}

/**
 * Function to get a specific job listing by ID
 */
export function getJobListingById(id: string): JobListing | undefined {
  return jobListings.find(job => job.id === id && job.active);
}