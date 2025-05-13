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
    id: "technical-presales-lead-001",
    title: "Technical Pre-sales Lead",
    location: "Manila, Philippines",
    type: "Full-time",
    description: "We are looking for a Technical Pre-sales Lead to drive business development, lead generation, and client acquisition for our automation and digital transformation solutions.",
    responsibilities: [
      "Identify and pursue new market opportunities, including target account profiling and customized outreach",
      "Design and execute lead generation strategies, including digital campaigns, outbound outreach, and event participation",
      "Work closely with mQuotient (MQ) executives to align business development initiatives with company objectives",
      "Collaborate with MQ's technical teams to scope, design, and deliver proof of concepts (POCs) and demos based on customer requirements",
      "Drive the pre-sales cycle end-to-end: from customer discovery and requirements gathering to solution positioning and deal closure",
      "Coordinate and manage client engagement, including communication, documentation, and handover to onboarding teams",
      "Represent MQ at industry forums, partner events, and customer meetings, helping position the firm as a thought leader",
      "Actively contribute to sales forecasting, pipeline management, and reporting of pre-sales metrics",
      "Source, organize, and analyze relevant market and customer data to support lead prioritization and segmentation",
      "Work with marketing to develop and deliver content and campaigns that support demand generation and market education"
    ],
    requirements: [
      "Proven experience in business development, particularly in SaaS products and professional services",
      "Strong track record in lead generation, pre-sales, and client acquisition",
      "Experience in data-driven outreach campaigns and sales enablement activities",
      "Demonstrated ability to work collaboratively with cross-functional technical and executive teams",
      "Exceptional written and verbal communication skills in English",
      "Strong analytical mindset with the ability to gather, interpret, and act on market and customer data"
    ],
    desirable: [
      "Understanding of modern technology stacks, cloud services, and AI-driven solutions",
      "Experience with automation technologies such as RPA, Power Platform, or AI/ML solutions",
      "Background in consulting or professional services",
      "Experience in the APAC market"
    ],
    active: true
  },
  {
    id: "business-analyst-001",
    title: "Business Analyst",
    location: "Remote (India or Philippines)",
    type: "Consultant",
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
    id: "developer-001",
    title: "Automation Solutions Consultant",
    location: "Remote (India or Philippines)",
    type: "Consultant",
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
    id: "csharp-engineer-001",
    title: "Associate C# Engineer",
    location: "Bangalore, India / Remote",
    type: "Full-time",
    description: "We're looking for a motivated Associate C# Engineer to help build and enhance desktop applications using C# and .NET. This role offers hands-on experience with third-party SDK integrations, software deployment, and collaboration with a skilled development team.",
    responsibilities: [
      "Assist in designing, developing, and deploying standalone C# applications",
      "Integrate third-party SDKs and APIs into software solutions",
      "Collaborate with backend and frontend teams on cross-functional tasks",
      "Contribute to documentation, testing, and debugging"
    ],
    requirements: [
      "Strong grasp of C# and .NET application development",
      "Experience in running and deploying standalone applications",
      "Exposure to third-party SDK integration",
      "Eagerness to learn and take ownership of tasks",
      "Freshers or recent graduates in B.Tech (CSE), MCA, BCA, or related fields"
    ],
    desirable: [
      "Knowledge of Python & Django",
      "Familiarity with frontend technologies (React, JavaScript)"
    ],
    active: true
  },
  {
    id: "ml-intern-001",
    title: "Machine Learning Intern",
    location: "Hybrid (Remote + Onsite in Bangalore as needed)",
    type: "Internship",
    description: "Join us as a Machine Learning Intern and dive into real-world AI/ML and Generative AI projects! You'll gain hands-on experience with LLMs, model deployment, and cutting-edge technologies while collaborating with a team of experienced developers.",
    responsibilities: [
      "Develop and optimize ML models using Python and popular AI/ML frameworks",
      "Work with Generative AI models, including foundational and large language models (LLMs)",
      "Contribute to the design, development, and deployment of local and cloud-based ML pipelines",
      "Assist in fine-tuning models for specific tasks (a plus)",
      "Collaborate with frontend teams to integrate ML outputs into applications"
    ],
    requirements: [
      "Strong Python programming skills",
      "Solid understanding of Machine Learning and AI fundamentals",
      "Familiarity with Generative AI & LLMs (e.g., GPT, LLaMA, Mistral)",
      "Basic knowledge of model deployment (local/cloud)",
      "Strong problem-solving and communication skills",
      "Final-year students or recent graduates in B.Tech (CSE), MCA, BCA, or related fields"
    ],
    desirable: [
      "Experience with fine-tuning ML/LLM models",
      "Exposure to frontend development (React or similar)"
    ],
    active: true
  }
];

/**
 * Function to get all active job listings
 * 
 * The order of the listings in the array determines the display order on the website
 * (first item appears at the top, last item at the bottom)
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