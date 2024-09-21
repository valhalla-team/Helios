# Base image (lighter runtime environment)
FROM node:18-alpine AS base
WORKDIR /app
EXPOSE 3000

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all the source files
COPY . .

# Build the Next.js application
RUN npm run build

# Start the Next.js application
CMD ["npm", "start"]
