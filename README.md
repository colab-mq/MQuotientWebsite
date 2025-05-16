# mquotient Business Services Website

A professional, responsive corporate website for mquotient featuring comprehensive company information, services offerings, careers section and contact capabilities.

![mquotient Website](generated-icon.png)

## Features

- Responsive design optimized for all device sizes
- Modern UI with animated gradients and subtle motion effects
- Interactive services section with GlyphxAI offering
- Careers section with job listings and application form
- Contact form with validation and email notifications
- PostgreSQL database integration for storing form submissions
- Email notification system for contact and career applications

## Tech Stack

- **Frontend**: React with TypeScript, TailwindCSS, Framer Motion, Shadcn UI components
- **Backend**: Express.js, Node.js
- **Database**: PostgreSQL with Neon Serverless
- **ORM**: Drizzle ORM with Zod validation
- **Form Handling**: React Hook Form with schema validation
- **API Client**: TanStack Query for data fetching
- **Email**: Nodemailer with Gmail integration

## Project Structure

```
.
├── client/               # Frontend React application
│   ├── src/
│   │   ├── assets/       # Static assets
│   │   ├── components/   # React components
│   │   ├── hooks/        # Custom React hooks
│   │   ├── lib/          # Utility functions
│   │   ├── pages/        # Page components
│   │   ├── App.tsx       # App component
│   │   ├── index.css     # Global styles
│   │   └── main.tsx      # Entry point
│   └── index.html        # HTML template
├── server/               # Backend Express application
│   ├── db.ts             # Database connection
│   ├── index.ts          # Server entry point
│   ├── routes.ts         # API routes
│   ├── storage.ts        # Data storage layer
│   └── vite.ts           # Vite server configuration
├── shared/               # Shared code between frontend and backend
│   └── schema.ts         # Database schema and types
└── ...                   # Configuration files
```

## Local Development Setup

### Prerequisites

- Node.js (v18 or later)
- npm or yarn
- PostgreSQL database

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/username/mquotient-website.git
   cd mquotient-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory with the following variables:
   ```
   DATABASE_URL=postgresql://username:password@localhost:5432/mquotient
   ```

4. Push the database schema:
   ```bash
   npm run db:push
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:5000](http://localhost:5000) to view the application.

## PHP Backend Integration

This project can be configured to submit form data to a PHP backend hosted on cPanel. This allows you to deploy the frontend as a static site while handling form submissions through a separate PHP backend.

### Setting Up PHP Backend

1. Configure the API endpoints in `client/src/config/api.ts`:
   ```typescript
   export const API_CONFIG = {
     // Base URL for the PHP backend - update with your cPanel domain
     BASE_URL: "https://your-domain.com/api",
     
     // Endpoints
     ENDPOINTS: {
       CONTACT: "/contact.php",
       CAREERS_APPLY: "/careers-apply.php",
       CAREERS_JOBS: "/careers-jobs.php"
     }
   };
   ```

2. Upload the PHP files to your cPanel server. Sample PHP files are provided in the `PHP_BACKEND_SETUP.md` guide.

3. Set up CORS headers on your cPanel server to allow requests from your frontend domain.

4. Test each form submission to ensure data is being properly received by the PHP backend.

For detailed instructions on setting up the PHP backend, refer to the `PHP_BACKEND_SETUP.md` file.

## Deployment Options

### Option 1: Server Deployment (e.g., DigitalOcean, AWS, etc.)

1. Provision a server with Node.js (v18+) and PostgreSQL.

2. Clone the repository on your server:
   ```bash
   git clone https://github.com/username/mquotient-website.git
   cd mquotient-website
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Build the application:
   ```bash
   npm run build
   ```

5. Set up environment variables:
   - DATABASE_URL: Your PostgreSQL connection string

6. Push the database schema:
   ```bash
   npm run db:push
   ```

7. Start the production server:
   ```bash
   npm run start
   ```

8. Set up a reverse proxy (Nginx or Apache) to serve your application.

### Option 2: GitHub Pages Deployment with PHP Backend Integration

GitHub Pages only supports static websites, but you can deploy the frontend on GitHub Pages while using the PHP backend on cPanel for form processing.

1. Configure the API endpoints in `client/src/config/api.ts` to point to your cPanel PHP backend (as described in the PHP Backend Integration section).

2. Update CORS settings on your cPanel server to allow requests from your GitHub Pages domain (typically `https://username.github.io/repo-name`).

The project includes a GitHub Pages deployment helper script.

1. Add these scripts to your `package.json`:
   ```json
   "scripts": {
     "build:gh-pages": "vite build --base=/mquotient-website/",
     "deploy:gh-pages": "node gh-pages-deploy.js"
   }
   ```

2. Run the GitHub Pages deployment script:
   ```bash
   npm run deploy:gh-pages
   ```

3. Follow the instructions provided by the script to push to the gh-pages branch:
   ```bash
   # Create a temporary branch for deployment
   git checkout -b gh-pages-temp
   
   # Add the built files
   git add dist -f
   
   # Commit the changes
   git commit -m "Deploy to GitHub Pages"
   
   # Push to the gh-pages branch
   git subtree push --prefix dist origin gh-pages
   
   # Clean up
   git checkout main
   git branch -D gh-pages-temp
   ```

4. Alternatively, set up GitHub Actions for automated deployment using a workflow file at `.github/workflows/deploy.yml`:

   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [main]
     workflow_dispatch:

   jobs:
     deploy:
       runs-on: ubuntu-latest
       steps:
         - name: Checkout
           uses: actions/checkout@v3
         
         - name: Setup Node.js
           uses: actions/setup-node@v3
           with:
             node-version: 18
             
         - name: Install dependencies
           run: npm ci
           
         - name: Build for GitHub Pages
           run: npm run build:gh-pages
           
         - name: Deploy to GitHub Pages
           uses: JamesIves/github-pages-deploy-action@v4
           with:
             folder: dist
             branch: gh-pages
   ```

### Option 3: Netlify Deployment

The project includes a `netlify.toml` configuration file for easy deployment on Netlify.

1. Push your code to a GitHub repository.

2. In Netlify:
   - Create a new site from Git
   - Connect to your GitHub repository
   - Use the following build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`

3. Configure environment variables:
   - In Site settings > Environment variables, add your DATABASE_URL 

4. Deploy the site!

### Option 4: Replit Deployment

The project is also set up for easy deployment on Replit.

1. Create a new Replit from the GitHub repository.
2. Navigate to the "Secrets" tab in your Replit and add the DATABASE_URL environment variable.
3. Click the "Run" button to start the application.
4. Click on "Deploy" to make your site live on a *.replit.app domain.

## Maintenance

### Database Management

- Modify the database schema in `shared/schema.ts`
- Run `npm run db:push` to apply schema changes

The project includes several database utility scripts:

```bash
# Check database connection
node scripts/db-operations.js check

# Show database tables
node scripts/db-operations.js tables

# Create a database backup/snapshot
node scripts/db-snapshot.js export

# Restore data from snapshots
node scripts/db-snapshot.js import
```

### Deployment Options

#### Automated Deployment Script

The project includes a deployment script that automates the entire deployment process:

```bash
# Deploy to production
./scripts/deploy.sh

# Deploy to staging
./scripts/deploy.sh staging

# Show all deployment options
./scripts/deploy.sh --help

# Deploy without rebuilding images
./scripts/deploy.sh --skip-build

# Deploy without database backup
./scripts/deploy.sh --skip-backup
```

This script will:
1. Load environment variables from environment-specific `.env` files (e.g., `.env.production`)
2. Create a database backup before changes
3. Pull the latest code changes if using Git
4. Build and start Docker containers
5. Run database schema migrations
6. Verify the deployment is successful

The script provides detailed instructions and will create sample environment files if they don't exist.

#### GitHub Pages Deployment (Frontend Only)

The project includes a custom GitHub Pages deployment script that uses token-based authentication:

```bash
# First, set your GitHub Personal Access Token as an environment variable
export GITHUB_TOKEN=your_personal_access_token

# Then deploy frontend to GitHub Pages
node gh-pages-deploy.js
```

You can create a Personal Access Token at https://github.com/settings/tokens with the "repo" scope.

This will build the project and deploy the static frontend to the `gh-pages` branch. Note that GitHub Pages only supports static content, so the backend API will not be available.

When using GitHub Actions for automated deployment (in `.github/workflows/deploy.yml`), the token is provided automatically by the GitHub Actions environment.

#### Netlify Deployment (Full Stack)

The project includes a `netlify.toml` configuration file for easy deployment on Netlify:

1. Push your code to a GitHub repository
2. Login to Netlify and create a new site from your GitHub repository
3. Configure environment variables (important!):
   - DATABASE_URL: Your PostgreSQL connection string

Netlify can host both the frontend and the serverless backend functions, providing a complete solution for the MQuotient website.

#### Traditional Server Deployment

For deployment on a traditional VPS or dedicated server, we've included configuration files in the `server-config/` directory:

1. **NGINX Configuration** (`nginx.conf`):
   - Handles SSL termination, HTTP to HTTPS redirection
   - Serves static assets and proxies API requests to the Node.js server
   - Includes security headers and performance optimizations

2. **Systemd Service** (`mquotient.service`):
   - Runs the Node.js application as a system service
   - Handles automatic restarts and logging

3. **PM2 Configuration** (`ecosystem.config.js`):
   - Alternative to systemd for process management
   - Supports clustering for improved performance

To deploy on a traditional server:
```bash
# Build the application
npm run build

# Copy files to your server
scp -r dist/ user@server:/var/www/mquotient/

# Configure NGINX
sudo cp server-config/nginx.conf /etc/nginx/sites-available/mquotient
sudo ln -s /etc/nginx/sites-available/mquotient /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx

# Setup systemd service
sudo cp server-config/mquotient.service /etc/systemd/system/
sudo systemctl enable mquotient.service
sudo systemctl start mquotient.service
```

#### Docker Deployment

The project includes Docker and Docker Compose configuration for containerized deployment:

1. **Dockerfile**: Multi-stage build process for optimized container image
2. **docker-compose.yml**: Orchestrates the application with PostgreSQL database

To deploy using Docker, we provide a convenient script:

```bash
# Build and start the containers with helper script
./scripts/docker-start.sh --rebuild

# Or for production (run in background)
./scripts/docker-start.sh --detach --rebuild

# Specify a custom env file
./scripts/docker-start.sh --env production.env --rebuild
```

The script will create a sample `.env` file with default values that you should update with your real credentials:

```
# Email configuration (required for sending notifications)
EMAIL_USER=your-email@gmail.com
EMAIL_APP_PASSWORD=your-app-password
CONTACT_EMAIL_RECIPIENTS=contact@mquotient.net
CAREERS_EMAIL_RECIPIENTS=careers@mquotient.net
```

You can also run Docker Compose commands directly:

```bash
# Build and start the containers
docker compose up -d

# View logs
docker compose logs -f

# Apply database migrations
docker compose exec app npm run db:push

# Stop the application
docker compose down
```

For security, the Docker setup supports environment variables for all sensitive information.

### Adding New Pages

1. Create a new page component in `client/src/pages/`
2. Add the route in `client/src/App.tsx` using the `wouter` router

### Styling

The project uses TailwindCSS for styling. Customize the theme in:
- `tailwind.config.ts` - for color themes and extensions
- `client/src/index.css` - for global styles and custom components

## License

[MIT](LICENSE)

## Contact

For inquiries, please contact [rishi@mquotient.net](mailto:rishi@mquotient.net)