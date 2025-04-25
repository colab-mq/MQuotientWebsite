# Base Node.js image
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install ALL dependencies, including dev dependencies
RUN npm ci

# Copy all files
COPY . .

# Build the app (use default build script)
RUN npm run build

# Production image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy everything from builder (including node_modules)
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
# Ensure these directories exist with proper permissions
RUN mkdir -p uploads && chmod 777 uploads
RUN mkdir -p client/dist

# Set environment variables
ENV NODE_ENV=production
ENV PORT=5000

# Expose port
EXPOSE 5000

# Start the application
CMD ["node", "dist/index.js"]