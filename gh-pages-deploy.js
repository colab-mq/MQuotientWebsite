/**
 * GitHub Pages Deployment Script for MQuotient Website
 * 
 * This script deploys the static frontend of the MQuotient website to GitHub Pages.
 * Since GitHub Pages only supports static websites, this deployment is for the frontend only.
 * Backend functionality (contact form, careers applications) would need to be connected to an external API.
 * 
 * Important: For full functionality including database and email features, use a traditional server deployment.
 * This GitHub Pages deployment is suitable for a portfolio or informational version of the website.
 * 
 * Usage:
 * 1. Set your GitHub token: export GITHUB_TOKEN=your_token_here
 * 2. Run: node gh-pages-deploy.js
 */

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

// Configuration
const config = {
  branch: 'gh-pages',
  buildCommand: 'npm run build',
  distFolder: 'dist',
  repoUrl: null,  // Will be populated from Git config
  commit: {
    message: `Deploy MQuotient Website: ${new Date().toISOString()}`
  },
  // Base path for GitHub Pages (repo name or custom domain)
  basePath: '/mquotient-website', // Change this if your repo has a different name
  // API mocking for GitHub Pages deployment (optional)
  mockApi: true
};

// Get the repository URL from git config
try {
  config.repoUrl = execSync('git config --get remote.origin.url').toString().trim();
  console.log(`Repository URL: ${config.repoUrl}`);
} catch (error) {
  console.error('Error getting repository URL:', error.message);
  console.error('Make sure you have Git installed and this is a Git repository.');
  process.exit(1);
}

// Main deployment function
async function deploy() {
  console.log('Starting deployment to GitHub Pages...');

  // Step 1: Build the project
  console.log('\n📦 Building the project...');
  try {
    execSync(config.buildCommand, { stdio: 'inherit' });
  } catch (error) {
    console.error('❌ Build failed:', error.message);
    process.exit(1);
  }
  console.log('✅ Build successful!');

  // Step 2: Verify the dist folder exists
  if (!fs.existsSync(config.distFolder)) {
    console.error(`❌ Distribution folder '${config.distFolder}' not found!`);
    process.exit(1);
  }

  // Step 3: Create a .nojekyll file to bypass Jekyll processing
  fs.writeFileSync(path.join(config.distFolder, '.nojekyll'), '');

  // Step 4: Initialize git in the dist folder and push to gh-pages branch
  console.log('\n🚀 Deploying to GitHub Pages...');
  
  // Check for GitHub token
  const githubToken = process.env.GITHUB_TOKEN;
  if (!githubToken) {
    console.error('❌ GitHub Token not found!');
    console.error('Please set the GITHUB_TOKEN environment variable:');
    console.error('  export GITHUB_TOKEN=your_token_here');
    console.error('\nYou can create a Personal Access Token at:');
    console.error('  https://github.com/settings/tokens (with "repo" scope)');
    process.exit(1);
  }
  
  try {
    // Extract repo information for constructing the authenticated URL
    let repoInfo = { owner: '', repo: '' };
    
    if (config.repoUrl.includes('github.com')) {
      // For HTTPS URLs: https://github.com/username/repo.git
      const match = config.repoUrl.match(/github\.com[:/]([^/]+)\/([^/.]+)/);
      if (match) {
        repoInfo.owner = match[1];
        repoInfo.repo = match[2];
      }
    }
    
    if (!repoInfo.owner || !repoInfo.repo) {
      console.error('❌ Could not parse repository information from URL');
      process.exit(1);
    }
    
    // Create URL with token authentication
    const authenticatedRepoUrl = `https://${githubToken}@github.com/${repoInfo.owner}/${repoInfo.repo}.git`;
    
    const commands = [
      `cd ${config.distFolder}`,
      'git init',
      'git add -A',
      `git config user.name "GitHub Actions"`,
      `git config user.email "actions@github.com"`,
      `git commit -m "${config.commit.message}"`,
      `git push -f "${authenticatedRepoUrl}" HEAD:${config.branch}`,
      'rm -rf .git'
    ];
    
    execSync(commands.join(' && '), { stdio: 'inherit' });
  } catch (error) {
    console.error('❌ Deployment failed:', error.message);
    process.exit(1);
  }

  console.log('\n✨ Deployment successful!');
  console.log('🌎 Your site should be available soon at: ');
  
  // Extract username and repo name from the repo URL
  try {
    let match;
    if (config.repoUrl.includes('github.com')) {
      // For HTTPS URLs: https://github.com/username/repo.git
      match = config.repoUrl.match(/github\.com[:/]([^/]+)\/([^/.]+)/);
    } else {
      // For SSH URLs: git@github.com:username/repo.git
      match = config.repoUrl.match(/github\.com[:/]([^/]+)\/([^/.]+)/);
    }
    
    if (match) {
      const [, username, repo] = match;
      console.log(`    https://${username}.github.io/${repo}/`);
    } else {
      console.log('    Check your GitHub Pages settings for the URL');
    }
  } catch (error) {
    console.log('    Check your GitHub Pages settings for the URL');
  }
  
  console.log('\n⚠️ Note: It may take a few minutes for changes to appear on GitHub Pages.');
}

// Run the deployment
deploy().catch(error => {
  console.error('Deployment error:', error);
  process.exit(1);
});