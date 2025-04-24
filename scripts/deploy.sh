#!/bin/bash
#
# MQuotient Website Deployment Script
# 
# This script automates the deployment process, including:
# - Building the application
# - Database migrations
# - Starting the application
#
# Usage: ./scripts/deploy.sh [environment]
# Environments: production, staging (default: production)
#

# Exit on error
set -e

# Get environment from argument or default to production
ENVIRONMENT=${1:-production}
echo "Deploying to $ENVIRONMENT environment"

# Set working directory to project root
cd "$(dirname "$0")/.."

# Load environment variables if .env file exists
if [ -f ".env.$ENVIRONMENT" ]; then
  echo "Loading environment variables from .env.$ENVIRONMENT"
  export $(grep -v '^#' .env.$ENVIRONMENT | xargs)
elif [ -f ".env" ]; then
  echo "Loading environment variables from .env"
  export $(grep -v '^#' .env | xargs)
fi

# Check for required environment variables
if [ -z "$DATABASE_URL" ]; then
  echo "Error: DATABASE_URL environment variable is not set."
  echo "Please set it in .env.$ENVIRONMENT or .env file."
  exit 1
fi

# Install dependencies
echo "Installing dependencies..."
npm ci

# Build the application
echo "Building application..."
npm run build

# Run database migrations
echo "Running database migrations..."
npm run db:push

# For systemd service environments
if [ "$ENVIRONMENT" = "production" ] && command -v systemctl &> /dev/null; then
  echo "Restarting systemd service..."
  sudo systemctl restart mquotient.service
  
  echo "Checking service status..."
  sudo systemctl status mquotient.service --no-pager
  
  echo "Deployment completed successfully!"
  exit 0
fi

# For PM2 environments
if command -v pm2 &> /dev/null; then
  echo "Restarting PM2 service..."
  pm2 reload mquotient-website || pm2 start server-config/ecosystem.config.js
  
  echo "Deployment completed successfully!"
  exit 0
fi

# For Docker environments
if command -v docker-compose &> /dev/null; then
  echo "Deploying with Docker Compose..."
  docker-compose up -d --build
  
  echo "Deployment completed successfully!"
  exit 0
fi

# Fallback to manual start
echo "Starting application..."
NODE_ENV=production node dist/index.js

echo "Deployment completed successfully!"