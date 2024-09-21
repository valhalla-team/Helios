# Base image (lighter runtime environment)
FROM node:18-alpine AS base
WORKDIR /app
EXPOSE 3000

# Build image (used for installing dependencies and building the app)
FROM node:18-alpine AS build
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --frozen-lockfile && npm install -g npm@10.8.3

# Copy all the source files
COPY . .

# Build the Next.js application
RUN npm run build

# Final stage (for production)
FROM node:18-alpine AS final
WORKDIR /app

# Only copy the necessary files from the 'build' stage
COPY --from=build /app/package*.json ./
COPY --from=build /app/.next ./.next
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/public ./public

# Set the NODE_ENV environment variable to 'production'
ENV NODE_ENV=production

# Expose the port the app will run on
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "start"]
