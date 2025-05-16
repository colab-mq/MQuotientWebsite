# PHP Backend Setup for mQuotient Website

This document provides instructions for setting up the PHP backend on a cPanel server to handle form submissions from the mQuotient website.

## Overview

The mQuotient website is configured to send all form submissions to a PHP backend hosted on a cPanel server. The frontend is built with React and can be deployed separately from the backend.

## Configuration

1. Update the API configuration in `client/src/config/api.ts` with your actual cPanel domain:

```typescript
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
```

## PHP Backend Files

Create the following PHP files on your cPanel server:

### 1. `api/contact.php`

```php
<?php
// Enable CORS for the frontend domain
header("Access-Control-Allow-Origin: https://your-frontend-domain.com");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit();
}

// Get the JSON data from the request
$json = file_get_contents('php://input');
$data = json_decode($json, true);

// Validate the data
if (!$data || !isset($data['name']) || !isset($data['email']) || !isset($data['message'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Missing required fields']);
    exit();
}

// Process the contact form submission
$name = strip_tags($data['name']);
$email = filter_var($data['email'], FILTER_SANITIZE_EMAIL);
$company = isset($data['company']) ? strip_tags($data['company']) : '';
$phone = isset($data['phone']) ? strip_tags($data['phone']) : '';
$serviceArea = isset($data['serviceArea']) ? strip_tags($data['serviceArea']) : '';
$message = strip_tags($data['message']);
$countryCode = isset($data['countryCode']) ? strip_tags($data['countryCode']) : '';

// Save to database if needed (example uses a simple CSV file)
$csvData = [
    date('Y-m-d H:i:s'),
    $name,
    $email,
    $company,
    $countryCode . $phone,
    $serviceArea,
    str_replace(["\r", "\n"], " ", $message)
];

$fp = fopen('../data/contact_submissions.csv', 'a');
fputcsv($fp, $csvData);
fclose($fp);

// Send email notification
$to = "hi@mquotient.net"; // Update with the recipient email
$subject = "New Contact Form Submission from $name";
$emailMessage = "Name: $name\n";
$emailMessage .= "Email: $email\n";
$emailMessage .= "Company: $company\n";
$emailMessage .= "Phone: $countryCode $phone\n";
$emailMessage .= "Service Area: $serviceArea\n\n";
$emailMessage .= "Message:\n$message\n";

$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";

mail($to, $subject, $emailMessage, $headers);

// Send success response
http_response_code(200);
echo json_encode(['success' => true, 'message' => 'Your message has been sent successfully']);
?>
```

### 2. `api/careers-apply.php`

```php
<?php
// Enable CORS for the frontend domain
header("Access-Control-Allow-Origin: https://your-frontend-domain.com");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit();
}

// Create directory for uploads if it doesn't exist
if (!file_exists('../uploads')) {
    mkdir('../uploads', 0755, true);
}

// Process the form data
$name = isset($_POST['name']) ? strip_tags($_POST['name']) : '';
$email = isset($_POST['email']) ? filter_var($_POST['email'], FILTER_SANITIZE_EMAIL) : '';
$phone = isset($_POST['phone']) ? strip_tags($_POST['phone']) : '';
$countryCode = isset($_POST['countryCode']) ? strip_tags($_POST['countryCode']) : '';
$position = isset($_POST['position']) ? strip_tags($_POST['position']) : '';
$message = isset($_POST['message']) ? strip_tags($_POST['message']) : '';
$sendCopy = isset($_POST['sendCopy']) && $_POST['sendCopy'] === 'true';

// Handle resume upload
$resumePath = '';
if (isset($_FILES['resume']) && $_FILES['resume']['error'] === UPLOAD_ERR_OK) {
    $fileName = $_FILES['resume']['name'];
    $fileType = $_FILES['resume']['type'];
    $fileTmpPath = $_FILES['resume']['tmp_name'];
    $fileSize = $_FILES['resume']['size'];
    
    // Sanitize filename and save with a unique name
    $fileExt = pathinfo($fileName, PATHINFO_EXTENSION);
    $safeName = preg_replace("/[^a-zA-Z0-9]/", "_", $name);
    $uniqueName = $safeName . '_' . date('Ymd_His') . '.' . $fileExt;
    $uploadPath = '../uploads/' . $uniqueName;
    
    // Check file type (only allow PDFs, Word docs, etc.)
    $allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (!in_array($fileType, $allowedTypes)) {
        http_response_code(400);
        echo json_encode(['error' => 'Invalid file type. Only PDF and Word documents are allowed.']);
        exit();
    }
    
    // Check file size (5MB max)
    if ($fileSize > 5 * 1024 * 1024) {
        http_response_code(400);
        echo json_encode(['error' => 'File is too large. Maximum size is 5MB.']);
        exit();
    }
    
    // Move the uploaded file
    if (move_uploaded_file($fileTmpPath, $uploadPath)) {
        $resumePath = $uploadPath;
    } else {
        http_response_code(500);
        echo json_encode(['error' => 'Failed to upload file']);
        exit();
    }
}

// Save to database (example uses a simple CSV file)
$csvData = [
    date('Y-m-d H:i:s'),
    $name,
    $email,
    $countryCode . $phone,
    $position,
    str_replace(["\r", "\n"], " ", $message),
    $resumePath
];

$fp = fopen('../data/career_applications.csv', 'a');
fputcsv($fp, $csvData);
fclose($fp);

// Send email notification
$to = "careers@mquotient.net"; // Update with your careers email
$subject = "New Career Application: $position";
$emailMessage = "Name: $name\n";
$emailMessage .= "Email: $email\n";
$emailMessage .= "Phone: $countryCode $phone\n";
$emailMessage .= "Position: $position\n\n";
$emailMessage .= "Cover Letter:\n$message\n\n";

$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";

// Email with resume attachment if available
if ($resumePath) {
    $boundary = md5(time());
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: multipart/mixed; boundary=\"$boundary\"\r\n";
    
    $emailContent = "--$boundary\r\n";
    $emailContent .= "Content-Type: text/plain; charset=utf-8\r\n";
    $emailContent .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
    $emailContent .= $emailMessage . "\r\n";
    
    // Attach resume
    $fileContent = file_get_contents($resumePath);
    $fileContent = chunk_split(base64_encode($fileContent));
    
    $emailContent .= "--$boundary\r\n";
    $emailContent .= "Content-Type: application/octet-stream; name=\"" . basename($resumePath) . "\"\r\n";
    $emailContent .= "Content-Transfer-Encoding: base64\r\n";
    $emailContent .= "Content-Disposition: attachment; filename=\"" . basename($resumePath) . "\"\r\n\r\n";
    $emailContent .= $fileContent . "\r\n";
    $emailContent .= "--$boundary--";
    
    mail($to, $subject, $emailContent, $headers);
} else {
    mail($to, $subject, $emailMessage, $headers);
}

// Send a copy to the applicant if requested
if ($sendCopy) {
    $applicantSubject = "Your Application to mQuotient for $position";
    $applicantMessage = "Dear $name,\n\n";
    $applicantMessage .= "Thank you for applying to mQuotient for the position of $position. This email confirms that we have received your application.\n\n";
    $applicantMessage .= "We will review your qualifications and will contact you if your background and experience meet our needs.\n\n";
    $applicantMessage .= "Thank you for your interest in mQuotient.\n\n";
    $applicantMessage .= "Best regards,\n";
    $applicantMessage .= "The mQuotient Recruiting Team";
    
    $applicantHeaders = "From: careers@mquotient.net\r\n";
    mail($email, $applicantSubject, $applicantMessage, $applicantHeaders);
}

// Send success response
http_response_code(200);
echo json_encode(['success' => true, 'message' => 'Your application has been submitted successfully']);
?>
```

### 3. `api/careers-jobs.php`

```php
<?php
// Enable CORS for the frontend domain
header("Access-Control-Allow-Origin: https://your-frontend-domain.com");
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only allow GET requests
if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit();
}

// You can store job listings in a database or a JSON file
// For this example, we'll return a static array of job listings
$jobListings = [
    [
        "id" => "technical-presales-lead-001",
        "title" => "Technical Pre-sales Lead",
        "location" => "Remote, India",
        "type" => "Full-time",
        "description" => "We're looking for a Technical Pre-sales Lead who can bridge the gap between business needs and technical solutions...",
        "responsibilities" => [
            "Lead solution design workshops and discovery sessions with clients",
            "Create compelling proof of concepts, demos, and technical presentations",
            "Work closely with sales teams to qualify opportunities and develop winning strategies",
            "Translate business requirements into technical solutions using our automation technologies",
            "Develop trusted advisor relationships with key stakeholders"
        ],
        "requirements" => [
            "5+ years of experience in a technical pre-sales or solution engineering role",
            "Strong expertise in automation technologies (RPA, Power Platform, AI services)",
            "Excellent communication skills with the ability to explain complex technical concepts to non-technical audiences",
            "Experience creating proposals, demonstrations, and technical documentation",
            "Problem-solving mindset and ability to think on your feet during client interactions"
        ],
        "desirable" => [
            "Experience with UiPath, Blue Prism, or Power Automate",
            "Background in process analysis or business analysis",
            "Industry certifications in relevant technologies"
        ],
        "active" => true
    ],
    // Add more job listings as needed
];

// Send the job listings as JSON
echo json_encode($jobListings);
?>
```

## CORS Configuration

Ensure your cPanel server is configured to allow cross-origin requests from your frontend domain. You can do this by:

1. Adding appropriate headers in each PHP file (as shown in the examples)
2. Creating a `.htaccess` file in your API directory with:

```
<IfModule mod_headers.c>
    Header set Access-Control-Allow-Origin "https://your-frontend-domain.com"
    Header set Access-Control-Allow-Methods "GET, POST, OPTIONS"
    Header set Access-Control-Allow-Headers "Content-Type, Authorization"
    Header set Access-Control-Allow-Credentials "true"
    
    # Handle OPTIONS preflight requests
    RewriteEngine On
    RewriteCond %{REQUEST_METHOD} OPTIONS
    RewriteRule ^(.*)$ $1 [R=200,L]
</IfModule>
```

## Directory Structure

Create this directory structure on your cPanel server:

```
public_html/
├── api/
│   ├── contact.php
│   ├── careers-apply.php
│   ├── careers-jobs.php
│   └── .htaccess
├── data/
│   ├── contact_submissions.csv
│   └── career_applications.csv
└── uploads/
```

Make sure the `data/` and `uploads/` directories have appropriate write permissions (typically 755 for directories and 644 for files).

## Security Considerations

1. Always validate and sanitize all user inputs
2. Use HTTPS for all communications
3. Implement rate limiting to prevent abuse
4. Consider adding a CSRF token mechanism for added security
5. Regularly backup your submission data
6. Consider using environment variables for sensitive information

## Testing the Integration

1. Update the API_CONFIG in the frontend code with your cPanel domain
2. Deploy the frontend to your hosting provider
3. Test each form submission carefully
4. Check that data is being saved and emails are being sent correctly

## Troubleshooting

If you encounter issues with the integration:

1. Check browser console for CORS errors
2. Verify PHP error logs in cPanel
3. Ensure your server has email sending capabilities configured correctly
4. Test API endpoints directly using tools like Postman

For further assistance, contact your server administrator or hosting provider.