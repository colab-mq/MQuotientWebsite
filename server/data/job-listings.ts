/**
 * Job Listings Data
 * 
 * This file contains the current job openings at MQuotient.
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
    id: "software-engineer-001",
    title: "Software Engineer",
    location: "Remote / London, UK",
    type: "Full-time",
    description: "We are looking for a skilled Software Engineer to join our team. You will be responsible for developing high-quality software solutions that meet or exceed our clients' needs. Your primary responsibility will be to design, code, test, and analyze software programs and applications.",
    responsibilities: [
      "Design, build, and maintain efficient, reusable, and reliable code",
      "Implement software solutions based on technical specifications",
      "Collaborate with cross-functional teams to define, design, and ship new features",
      "Troubleshoot, debug and upgrade existing systems",
      "Follow industry best practices for software development life cycle",
      "Ensure the performance, quality, and responsiveness of applications"
    ],
    requirements: [
      "Proven experience as a Software Engineer or similar role",
      "Experience with modern programming languages (JavaScript, TypeScript, Python, etc.)",
      "Familiarity with various operating systems and platforms",
      "Good understanding of object-oriented programming",
      "Good understanding of data structures and algorithms",
      "Problem-solving aptitude",
      "Excellent communication and teamwork skills"
    ],
    desirable: [
      "Knowledge of Agile methodologies",
      "Experience with cloud services (AWS, Azure, GCP)",
      "Understanding of CI/CD pipelines",
      "Experience with microservices architecture"
    ],
    active: true
  },
  {
    id: "uipath-developer-001",
    title: "UiPath Developer",
    location: "Remote / London, UK",
    type: "Full-time",
    description: "We're seeking an experienced UiPath Developer to design, develop, and implement RPA solutions using UiPath. You will be responsible for creating efficient automation workflows to streamline business processes and reduce manual effort.",
    responsibilities: [
      "Design, develop, and maintain RPA solutions using UiPath",
      "Analyze business processes and identify automation opportunities",
      "Create detailed documentation for automated processes",
      "Implement best practices in RPA development",
      "Collaborate with business analysts and stakeholders to understand requirements",
      "Troubleshoot and resolve issues in automation workflows"
    ],
    requirements: [
      "Proven experience as a UiPath Developer",
      "UiPath certification (preferably Advanced Developer)",
      "Strong understanding of RPA concepts and principles",
      "Experience with UiPath Studio, Orchestrator, and other UiPath tools",
      "Knowledge of VB.NET or C#",
      "Problem-solving skills and attention to detail",
      "Excellent communication and documentation skills"
    ],
    desirable: [
      "Experience with REFramework",
      "Knowledge of AI Center and Document Understanding",
      "SQL database experience",
      "API integration experience",
      "Experience in financial or healthcare industries"
    ],
    active: true
  },
  {
    id: "blue-prism-developer-001",
    title: "Blue Prism Developer",
    location: "Remote / London, UK",
    type: "Contract",
    description: "We are looking for a skilled Blue Prism Developer to join our growing RPA team. The ideal candidate will have strong experience in designing, developing, and implementing automation solutions using Blue Prism to improve business efficiency and accuracy.",
    responsibilities: [
      "Design, develop, and implement Blue Prism automation solutions",
      "Analyze business requirements and translate them into technical specifications",
      "Create process documentation and technical design documents",
      "Ensure best practices are followed for all Blue Prism development",
      "Perform testing and debugging of automated processes",
      "Provide support for existing automations and implement enhancements"
    ],
    requirements: [
      "Minimum 2 years of experience in Blue Prism development",
      "Blue Prism accreditation (Developer or Professional Developer)",
      "Strong understanding of RPA concepts and methodologies",
      "Experience with process design and implementation in Blue Prism",
      "Knowledge of SQL and database concepts",
      "Experience with exception handling and error management",
      "Strong analytical and problem-solving skills"
    ],
    desirable: [
      "Experience with other RPA tools (UiPath, Automation Anywhere)",
      "Knowledge of web technologies and APIs",
      "Programming experience in VB.NET, C# or JavaScript",
      "Experience with Blue Prism Control Room and Release Management",
      "ITIL foundation certification"
    ],
    active: true
  },
  {
    id: "power-platform-consultant-001",
    title: "Power Platform Consultant",
    location: "Remote / London, UK",
    type: "Full-time",
    description: "We are seeking a Power Platform Consultant to help our clients leverage Microsoft Power Platform (Power Apps, Power Automate, Power BI, Power Virtual Agents) to optimize business processes and create innovative solutions. You will work closely with clients to understand their needs and deliver tailored solutions.",
    responsibilities: [
      "Design and develop solutions using Microsoft Power Platform components",
      "Gather and analyze client requirements and translate them into technical solutions",
      "Create custom Power Apps and Power Automate flows to streamline business processes",
      "Develop Power BI reports and dashboards for business intelligence",
      "Configure and customize Power Virtual Agents for chatbot solutions",
      "Provide training and support to client teams",
      "Document solutions and create user guides"
    ],
    requirements: [
      "Proven experience as a Power Platform developer or consultant",
      "Strong knowledge of Power Apps, Power Automate, and Power BI",
      "Experience with SharePoint and Microsoft 365 integration",
      "Understanding of data modeling and database concepts",
      "Excellent problem-solving and analytical skills",
      "Strong communication and client-facing skills",
      "Microsoft certifications related to Power Platform (preferred)"
    ],
    desirable: [
      "Experience with Dataverse and model-driven apps",
      "Knowledge of Azure services and integration",
      "Experience with AI Builder or Power Virtual Agents",
      "Programming skills in C#, JavaScript, or HTML",
      "Experience in a consulting or client service role"
    ],
    active: true
  },
  {
    id: "data-analyst-001",
    title: "Data Analyst",
    location: "Remote / London, UK",
    type: "Full-time",
    description: "We are looking for a Data Analyst to join our team and help transform raw data into insights that drive business solutions. The successful candidate will assess business needs and create reports and visualizations to help organizations make better decisions.",
    responsibilities: [
      "Interpret data, analyze results using statistical techniques",
      "Develop and implement databases, data collection systems, and other strategies for data acquisition",
      "Identify, analyze, and interpret trends or patterns in complex data sets",
      "Filter and clean data by reviewing reports and performance indicators",
      "Work with management to prioritize business and information needs",
      "Locate and define new process improvement opportunities"
    ],
    requirements: [
      "Proven experience as a Data Analyst or similar role",
      "Technical expertise regarding data models, database design, and data mining",
      "Strong knowledge of and experience with reporting packages (Power BI, Tableau)",
      "Knowledge of SQL and experience working with relational databases",
      "Experience with statistical analysis tools (R, Python, SPSS)",
      "Strong analytical skills with the ability to collect, organize, and disseminate data",
      "BA/BS in Mathematics, Economics, Computer Science, or related field"
    ],
    desirable: [
      "Knowledge of big data technologies (Hadoop, Spark)",
      "Experience with data visualization tools",
      "Understanding of machine learning and AI concepts",
      "Experience in data cleaning and data warehousing",
      "Knowledge of business intelligence methodologies"
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