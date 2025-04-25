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
    id: "rpa-developer",
    title: "RPA Developer",
    location: "Remote / Pune, India",
    type: "Full-time",
    description: "We are looking for experienced RPA Developers proficient in UiPath to join our automation team. The ideal candidate will design, develop, and implement automation solutions for our clients.",
    responsibilities: [
      "Design and develop RPA solutions using UiPath",
      "Analyze existing business processes and identify automation opportunities",
      "Create technical documentation for automation solutions",
      "Collaborate with business analysts and stakeholders to understand requirements",
      "Perform testing and debugging of automation workflows",
      "Maintain and support existing RPA implementations"
    ],
    requirements: [
      "2+ years of experience in RPA development using UiPath",
      "Strong understanding of UiPath Studio, Orchestrator, and related components",
      "Experience with workflow design and process analysis",
      "Familiarity with REFramework and best practices for RPA development",
      "Basic understanding of database concepts and SQL",
      "Excellent problem-solving and analytical skills"
    ],
    desirable: [
      "UiPath certification (RPA Developer, Advanced Developer, or Solution Architect)",
      "Experience with other automation tools (Blue Prism, Automation Anywhere)",
      "Knowledge of .NET, VB.NET, or C#",
      "Experience with API integration",
      "Understanding of process mining techniques"
    ],
    active: true
  },
  {
    id: "power-platform-developer",
    title: "Power Platform Developer",
    location: "Remote / Pune, India",
    type: "Full-time",
    description: "We are seeking a Microsoft Power Platform Developer to design and implement low-code solutions for our clients. The ideal candidate will have strong experience with Power Apps, Power Automate, and Power BI.",
    responsibilities: [
      "Design and develop solutions using Microsoft Power Platform components",
      "Create custom Power Apps for business processes",
      "Build automated workflows using Power Automate",
      "Develop reports and dashboards using Power BI",
      "Integrate Power Platform solutions with other Microsoft products and third-party systems",
      "Provide technical guidance and support for Power Platform implementations"
    ],
    requirements: [
      "2+ years of experience with Microsoft Power Platform development",
      "Strong knowledge of Power Apps, Power Automate, and Power BI",
      "Experience with Dataverse and Common Data Service",
      "Understanding of SharePoint and Microsoft 365 integration",
      "Basic knowledge of SQL and data modeling",
      "Strong problem-solving skills and attention to detail"
    ],
    desirable: [
      "Microsoft Power Platform certifications",
      "Experience with Azure services",
      "Knowledge of C# or JavaScript for extending Power Platform capabilities",
      "Experience with Dynamics 365",
      "Understanding of business process management and optimization"
    ],
    active: true
  },
  {
    id: "test-automation-engineer",
    title: "Test Automation Engineer",
    location: "Remote / Pune, India",
    type: "Full-time",
    description: "We are looking for a Test Automation Engineer to design, develop and maintain automated test frameworks. The ideal candidate will help ensure the quality of our software solutions through efficient test automation.",
    responsibilities: [
      "Design and implement test automation frameworks",
      "Write and execute automated test scripts",
      "Collaborate with development teams to understand requirements and test needs",
      "Identify and report bugs and issues",
      "Maintain and improve existing test automation solutions",
      "Document testing procedures and results"
    ],
    requirements: [
      "2+ years of experience in test automation",
      "Strong knowledge of testing methodologies and best practices",
      "Experience with test automation tools (Selenium, TestComplete, etc.)",
      "Programming experience in at least one language (Java, Python, C#)",
      "Understanding of CI/CD pipelines and DevOps practices",
      "Good communication and documentation skills"
    ],
    desirable: [
      "Experience with API testing tools (Postman, SoapUI)",
      "Knowledge of BDD frameworks (Cucumber, SpecFlow)",
      "Experience with performance testing tools",
      "Understanding of Agile methodologies",
      "ISTQB certification or equivalent"
    ],
    active: true
  },
  {
    id: "ai-ml-engineer",
    title: "AI/ML Engineer",
    location: "Remote / Pune, India",
    type: "Full-time",
    description: "We are seeking an AI/ML Engineer to work on our Glyphx AI platform for document processing and information extraction. The ideal candidate will help enhance our OCR and classification capabilities.",
    responsibilities: [
      "Develop and improve OCR algorithms for document processing",
      "Implement and refine machine learning models for document classification",
      "Create solutions for information extraction from structured and unstructured documents",
      "Evaluate and integrate new AI/ML technologies and approaches",
      "Collaborate with development teams to integrate AI/ML solutions",
      "Monitor and optimize model performance"
    ],
    requirements: [
      "3+ years of experience in AI/ML development",
      "Strong knowledge of OCR technologies and techniques",
      "Experience with machine learning frameworks (TensorFlow, PyTorch, etc.)",
      "Proficiency in Python and related data science libraries",
      "Understanding of NLP concepts for text extraction and processing",
      "Experience with model training, validation, and deployment"
    ],
    desirable: [
      "Experience with document processing and classification systems",
      "Knowledge of computer vision techniques",
      "Experience with cloud-based AI services (AWS, Azure, GCP)",
      "Understanding of financial or insurance document workflows",
      "Experience with data annotation and preparation for ML models"
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