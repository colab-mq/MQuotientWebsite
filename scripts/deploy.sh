#!/bin/bash
# MQuotient Website Deployment Script
# Usage: ./scripts/deploy.sh [environment]
# Where environment is 'production' (default) or 'staging'

set -e  # Exit on any error

# Default environment is production
ENVIRONMENT=${1:-production}
TIMESTAMP=$(date +"%Y%m%d%H%M%S")
LOG_DIR="deploy_logs"
LOG_FILE="$LOG_DIR/deploy_${ENVIRONMENT}_${TIMESTAMP}.log"

# Create log directory if it doesn't exist
mkdir -p $LOG_DIR

# Log output to file
exec > >(tee -a "$LOG_FILE") 2>&1

echo "=== Starting MQuotient Website Deployment ==="
echo "Environment: $ENVIRONMENT"
echo "Timestamp: $(date)"
echo "=========================================="

# Load environment variables
if [ "$ENVIRONMENT" = "production" ]; then
    ENV_FILE=".env.production"
elif [ "$ENVIRONMENT" = "staging" ]; then
    ENV_FILE=".env.staging"
else
    echo "Error: Unknown environment '$ENVIRONMENT'"
    echo "Usage: ./scripts/deploy.sh [environment]"
    echo "Where environment is 'production' (default) or 'staging'"
    exit 1
fi

# Check if env file exists
if [ -f "$ENV_FILE" ]; then
    echo "Loading environment variables from $ENV_FILE"
    export $(grep -v '^#' $ENV_FILE | xargs)
else
    echo "Warning: $ENV_FILE not found, using existing environment variables"
fi

# Determine deployment method based on environment
if [ "$DEPLOYMENT_METHOD" = "" ]; then
    # Default deployment method if not set in env
    if [ "$ENVIRONMENT" = "production" ]; then
        DEPLOYMENT_METHOD="server"
    else
        DEPLOYMENT_METHOD="server"
    fi
fi

echo "Deployment method: $DEPLOYMENT_METHOD"

# Step 1: Install dependencies
echo -e "\n=== Installing dependencies ==="
npm ci || npm install

# Step 2: Build the application
echo -e "\n=== Building application ==="
npm run build

# Step 3: Database operations
echo -e "\n=== Running database operations ==="
if [ "$SKIP_DB_OPERATIONS" != "true" ]; then
    # Check database connection
    echo "Checking database connection..."
    node scripts/db-operations.js check
    
    # Push schema changes
    echo "Applying schema changes..."
    npm run db:push
    
    # Create database backup before deployment
    echo "Creating database backup..."
    node scripts/db-snapshot.js export
else
    echo "Skipping database operations as SKIP_DB_OPERATIONS is set to true"
fi

# Step 4: Deploy based on method
echo -e "\n=== Deploying application ==="
case "$DEPLOYMENT_METHOD" in
    "server")
        echo "Deploying to server..."
        
        # Deploy the application using systemd or PM2 if available
        if command -v systemctl >/dev/null 2>&1 && [ -f "/etc/systemd/system/mquotient.service" ]; then
            echo "Restarting systemd service..."
            sudo systemctl restart mquotient.service
        elif command -v pm2 >/dev/null 2>&1; then
            echo "Restarting PM2 process..."
            pm2 restart ecosystem.config.js
        else
            echo "Starting Node.js process..."
            # Kill any existing process and start a new one
            pkill -f "node server/index.js" || true
            nohup node server/index.js > server.log 2>&1 &
        fi
        ;;
        
    "docker")
        echo "Deploying with Docker..."
        docker-compose down
        docker-compose up -d
        ;;
        
    "gh-pages")
        echo "Deploying to GitHub Pages (frontend only)..."
        node gh-pages-deploy.js
        ;;
        
    *)
        echo "Error: Unknown deployment method '$DEPLOYMENT_METHOD'"
        exit 1
        ;;
esac

echo -e "\n=== Deployment completed successfully ==="
echo "Timestamp: $(date)"
echo "See $LOG_FILE for detailed log"
echo "=========================================="