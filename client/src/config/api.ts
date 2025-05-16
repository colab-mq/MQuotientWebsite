// Configuration for external PHP backend (cPanel)
export const API_CONFIG = {
  // Base URL for the PHP backend - update this with your actual cPanel PHP server URL
  BASE_URL: "https://your-domain.com/api",
  
  // Endpoints
  ENDPOINTS: {
    CONTACT: "/contact.php",
    CAREERS_APPLY: "/careers-apply.php",
    CAREERS_JOBS: "/careers-jobs.php",
    CASE_STUDIES: "/case-studies.php"
  }
};