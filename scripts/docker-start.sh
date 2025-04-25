#!/bin/bash

# Docker start script for MQuotient website
# This script helps start the Docker environment with proper configurations

# Usage instructions
if [ "$1" == "-h" ] || [ "$1" == "--help" ]; then
  echo "Usage: ./scripts/docker-start.sh [options]"
  echo ""
  echo "Options:"
  echo "  -h, --help    Show this help message"
  echo "  -e, --env     Specify a custom .env file (default: .env)"
  echo "  -r, --rebuild Rebuild images from scratch"
  echo "  -d, --detach  Run containers in background mode"
  echo ""
  echo "Environment variables you can set in .env file:"
  echo "  EMAIL_USER                   - Email address for sending notifications"
  echo "  EMAIL_APP_PASSWORD           - Password or app password for email account"
  echo "  CONTACT_EMAIL_RECIPIENTS     - Comma-separated list of recipients for contact form"
  echo "  CAREERS_EMAIL_RECIPIENTS     - Comma-separated list of recipients for career applications"
  echo ""
  exit 0
fi

# Default values
ENV_FILE=".env"
REBUILD=false
DETACH=false

# Parse arguments
while [[ "$#" -gt 0 ]]; do
  case $1 in
    -e|--env) ENV_FILE="$2"; shift ;;
    -r|--rebuild) REBUILD=true ;;
    -d|--detach) DETACH=true ;;
    *) echo "Unknown parameter: $1"; exit 1 ;;
  esac
  shift
done

# Check if env file exists
if [ ! -f "$ENV_FILE" ]; then
  echo "Creating sample $ENV_FILE file..."
  echo "# Email configuration (required for sending notifications)" > "$ENV_FILE"
  echo "EMAIL_USER=admin@example.com" >> "$ENV_FILE"
  echo "EMAIL_APP_PASSWORD=examplepassword" >> "$ENV_FILE"
  echo "CONTACT_EMAIL_RECIPIENTS=recipient@example.com" >> "$ENV_FILE"
  echo "CAREERS_EMAIL_RECIPIENTS=recipient@example.com" >> "$ENV_FILE"
  echo "Created $ENV_FILE with sample values. Please edit with your actual values."
  echo ""
fi

# Load environment variables
set -a  # automatically export all variables
source "$ENV_FILE"
set +a

# Start docker-compose with appropriate options
echo "Starting MQuotient website Docker environment..."

if [ "$REBUILD" = true ]; then
  echo "Rebuilding Docker images from scratch..."
  if [ "$DETACH" = true ]; then
    docker-compose --env-file "$ENV_FILE" up --build -d
  else
    docker-compose --env-file "$ENV_FILE" up --build
  fi
else
  if [ "$DETACH" = true ]; then
    docker-compose --env-file "$ENV_FILE" up -d
  else
    docker-compose --env-file "$ENV_FILE" up
  fi
fi

echo "Docker environment startup complete!"