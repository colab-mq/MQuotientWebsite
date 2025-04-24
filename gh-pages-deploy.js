/**
 * GitHub Pages Deployment Script
 * 
 * This script helps deploy the static frontend of the MQuotient website to GitHub Pages.
 * Since GitHub Pages only supports static websites, this deployment is for the frontend only.
 * Backend functionality (like the contact form) would need to be connected to an external API.
 */

import { exec } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';

// Configuration
const basePath = '/mquotient-website/'; // Change this to match your GitHub repository name
const buildDir = 'dist';
const temporaryBranch = 'gh-pages-temp';

console.log('🚀 Starting GitHub Pages deployment process...');

// Step 1: Build the frontend with the correct base path
console.log('📦 Building frontend with GitHub Pages base path...');
exec(`vite build --base=${basePath}`, (error, stdout, stderr) => {
  if (error) {
    console.error(`❌ Build failed: ${error.message}`);
    return;
  }
  
  console.log(stdout);
  
  // Step 2: Create a static version of the API responses
  console.log('🔄 Creating static API mock data...');
  
  // Create a mock API folder
  const mockApiDir = path.join(buildDir, 'api');
  if (!fs.existsSync(mockApiDir)) {
    fs.mkdirSync(mockApiDir, { recursive: true });
  }
  
  // Create a static mock response for the contact form
  const contactApiResponse = {
    success: true,
    message: "Thank you for your message! This is a static demo. In the actual site, your message would be sent to our team.",
  };
  
  fs.writeFileSync(
    path.join(mockApiDir, 'contact.json'), 
    JSON.stringify(contactApiResponse, null, 2)
  );
  
  // Step 3: Create a special 404.html file that redirects to index.html for SPA routing
  console.log('📄 Creating SPA redirect for GitHub Pages...');
  const redirectHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>MQuotient Business Services</title>
  <script type="text/javascript">
    // Single Page Apps for GitHub Pages
    // MIT License
    // https://github.com/rafgraph/spa-github-pages
    var pathSegmentsToKeep = 1;

    var l = window.location;
    l.replace(
      l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
      l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '/?/' +
      l.pathname.slice(1).split('/').slice(pathSegmentsToKeep).join('/').replace(/&/g, '~and~') +
      (l.search ? '&' + l.search.slice(1).replace(/&/g, '~and~') : '') +
      l.hash
    );
  </script>
</head>
<body>
  Redirecting to MQuotient Business Services website...
</body>
</html>
  `;
  
  fs.writeFileSync(path.join(buildDir, '404.html'), redirectHtml);
  
  // Update index.html to handle the redirect
  const indexPath = path.join(buildDir, 'index.html');
  let indexHtml = fs.readFileSync(indexPath, 'utf8');
  
  const redirectScript = `
  <script type="text/javascript">
    // Single Page Apps for GitHub Pages
    // https://github.com/rafgraph/spa-github-pages
    (function(l) {
      if (l.search[1] === '/' ) {
        var decoded = l.search.slice(1).split('&').map(function(s) { 
          return s.replace(/~and~/g, '&')
        }).join('?');
        window.history.replaceState(null, null,
            l.pathname.slice(0, -1) + decoded + l.hash
        );
      }
    }(window.location))
  </script>
  `;
  
  indexHtml = indexHtml.replace('</head>', redirectScript + '</head>');
  fs.writeFileSync(indexPath, indexHtml);
  
  // Step 4: Provide instructions for manual deployment
  console.log('\n✅ Build completed successfully!');
  console.log('\nTo deploy to GitHub Pages:');
  console.log('\n1. Create a new branch for GitHub Pages:');
  console.log(`   git checkout -b ${temporaryBranch}`);
  
  console.log('\n2. Add the built files:');
  console.log(`   git add ${buildDir} -f`);
  
  console.log('\n3. Commit the changes:');
  console.log('   git commit -m "Deploy to GitHub Pages"');
  
  console.log('\n4. Push to GitHub:');
  console.log(`   git subtree push --prefix ${buildDir} origin gh-pages`);
  
  console.log('\n5. Clean up:');
  console.log('   git checkout main');
  console.log(`   git branch -D ${temporaryBranch}`);
  
  console.log('\nAlternatively, you can use GitHub Actions for automated deployment.');
  console.log('See: https://github.com/marketplace/actions/deploy-to-github-pages\n');
});