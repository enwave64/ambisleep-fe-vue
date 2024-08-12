# Stage 1: Build the Vue.js app
FROM node:18-alpine AS build-stage

WORKDIR /app

# Copy package.json and pnpm.lock.yaml for performance purposes
COPY package.json pnpm-lock.yaml ./

# Install pnpm
RUN npm install -g pnpm

RUN pnpm install

# Copy the rest of the application
COPY . .

# Build the Vue.js application
RUN pnpm build

# Stage 2: Serve the app with Nginx
FROM nginx:stable-alpine AS production-stage

# Copy the built files from the previous stage
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Copy the custom Nginx configuration file
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]