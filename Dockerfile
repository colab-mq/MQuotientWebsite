# Base Node.js image
FROM node:18

# Set working directory
WORKDIR /app

# Copy all files
COPY . .

# Install ALL dependencies, including dev dependencies
RUN npm install

# Ensure these directories exist with proper permissions
RUN mkdir -p uploads && chmod 777 uploads
RUN mkdir -p client/dist

# Set environment variables
ENV NODE_ENV=production
ENV PORT=5000

# Expose port
EXPOSE 5000

# Start the application
CMD ["tail", "-f","/dev/null"]
