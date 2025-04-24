# MQuotient Business Services Website

A professional, responsive corporate website for MQuotient featuring company information, services offerings, and contact capabilities.

![MQuotient Website](https://raw.githubusercontent.com/username/mquotient-website/main/client/src/assets/screenshot.png)

## Features

- Responsive design optimized for all device sizes
- Modern UI with gradient elements and subtle animations
- Comprehensive company information and service offerings
- Client testimonials and case studies
- Contact form with validation
- PostgreSQL database integration for contact form submissions

## Tech Stack

- **Frontend**: React, TailwindCSS, Framer Motion, Shadcn UI
- **Backend**: Express.js, Node.js
- **Database**: PostgreSQL
- **ORM**: Drizzle ORM
- **Form Handling**: React Hook Form, Zod validation
- **API Client**: TanStack Query

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

### Option 2: GitHub Pages Deployment (Static Frontend Only)

**Note**: GitHub Pages only supports static websites, so the backend functionality (contact form) will not work with this option without modifications. The project includes a GitHub Pages deployment helper script.

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