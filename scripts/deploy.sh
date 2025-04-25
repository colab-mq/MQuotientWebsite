#!/bin/bash

# MQuotient Website Deployment Script
# This script handles the deployment process for the MQuotient website

# Default environment is production
ENV=${1:-production}
ENV_FILE=".env.${ENV}"

# Check for help flag
if [ "$1" == "-h" ] || [ "$1" == "--help" ]; then
  echo "MQuotient Website Deployment Script"
  echo "-----------------------------------"
  echo "Usage: ./scripts/deploy.sh [environment] [options]"
  echo ""
  echo "Arguments:"
  echo "  environment       Deployment environment (default: production)"
  echo "                    Valid values: production, staging, development"
  echo ""
  echo "Options:"
  echo "  -h, --help        Show this help message"
  echo "  --skip-build      Skip the build step"
  echo "  --skip-backup     Skip the database backup step"
  echo "  --skip-db-push    Skip the database schema push"
  echo ""
  echo "Examples:"
  echo "  ./scripts/deploy.sh                # Deploy to production"
  echo "  ./scripts/deploy.sh staging        # Deploy to staging"
  echo "  ./scripts/deploy.sh --skip-build   # Deploy to production without rebuilding"
  echo ""
  exit 0
fi

# Set flags
SKIP_BUILD=false
SKIP_BACKUP=false
SKIP_DB_PUSH=false

# Parse options
for arg in "$@"; do
  case $arg in
    --skip-build)
      SKIP_BUILD=true
      ;;
    --skip-backup)
      SKIP_BACKUP=true
      ;;
    --skip-db-push)
      SKIP_DB_PUSH=true
      ;;
  esac
done

echo "========================================="
echo "Deploying MQuotient Website to $ENV environment"
echo "========================================="

# Step 1: Load environment variables
if [ -f "$ENV_FILE" ]; then
  echo "Loading environment variables from $ENV_FILE..."
  set -a
  source "$ENV_FILE"
  set +a
else
  echo "Warning: $ENV_FILE not found. Creating a sample file..."
  echo "# MQuotient Website - $ENV Environment" > "$ENV_FILE"
  echo "EMAIL_USER=your-email@gmail.com" >> "$ENV_FILE"
  echo "EMAIL_APP_PASSWORD=your-app-password" >> "$ENV_FILE"
  echo "CONTACT_EMAIL_RECIPIENTS=contact@mquotient.net" >> "$ENV_FILE"
  echo "CAREERS_EMAIL_RECIPIENTS=careers@mquotient.net" >> "$ENV_FILE"
  echo "DATABASE_URL=postgresql://postgres:postgres@db:5432/mquotient" >> "$ENV_FILE"
  echo "Created $ENV_FILE file. Please update with actual values before continuing."
  exit 1
fi

# Step 2: Verify Docker is available
if ! command -v docker &> /dev/null; then
  echo "Error: Docker is not installed. Please install Docker before continuing."
  exit 1
fi

if ! command -v docker compose &> /dev/null; then
  echo "Error: Docker Compose is not available. Please install Docker Compose before continuing."
  exit 1
fi

# Step 3: Backup database if needed
if [ "$SKIP_BACKUP" = false ]; then
  echo "Creating database backup..."
  BACKUP_DIR="./backups/${ENV}"
  mkdir -p "$BACKUP_DIR"
  TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
  BACKUP_FILE="${BACKUP_DIR}/db_backup_${TIMESTAMP}.sql"
  
  docker compose exec -T db pg_dump -U postgres mquotient > "$BACKUP_FILE" 2>/dev/null
  
  if [ $? -eq 0 ]; then
    echo "Database backup created successfully: $BACKUP_FILE"
  else
    echo "Warning: Database backup failed. Continuing anyway..."
  fi
fi

# Step 4: Pull latest code if this is a Git repository
if [ -d ".git" ]; then
  echo "Pulling latest code from Git repository..."
  git pull
  if [ $? -ne 0 ]; then
    echo "Error: Failed to pull latest code. Please resolve any Git issues before deploying."
    exit 1
  fi
fi

# Step 5: Restart with Docker
echo "Deploying with Docker..."

if [ "$SKIP_BUILD" = false ]; then
  echo "Building Docker images..."
  docker compose build
fi

echo "Starting Docker containers..."
docker compose --env-file "$ENV_FILE" up -d

# Step 6: Run database migrations if needed
if [ "$SKIP_DB_PUSH" = false ]; then
  echo "Applying database schema changes..."
  docker compose exec -T app npm run db:push
  
  if [ $? -eq 0 ]; then
    echo "Database schema updated successfully."
  else
    echo "Warning: Database schema update failed. Please check the logs for details."
  fi
fi

# Step 7: Verify deployment
echo "Verifying deployment..."
RETRIES=5
DELAY=3

while [ $RETRIES -gt 0 ]; do
  if docker compose exec -T app curl -s http://localhost:5000 > /dev/null; then
    echo "Deployment successful! The website is now running."
    echo "========================================="
    echo "Website URL: http://mquotient.net (assuming DNS is configured)"
    echo "Deployment environment: $ENV"
    echo "Deployment time: $(date)"
    echo "========================================="
    exit 0
  fi
  
  echo "Waiting for the application to start... ($RETRIES attempts left)"
  RETRIES=$((RETRIES-1))
  sleep $DELAY
done

echo "Warning: Could not verify the deployment. The application might still be starting up."
echo "Please check the logs with: docker compose logs -f"
echo "Deployment completed with warnings."
exit 0