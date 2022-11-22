# ===== CONFIGURE =====
# Use a Node 18 base image
FROM node:18-alpine as builder
# Set the working directory to /app inside the container
WORKDIR /app
# Copy app files
COPY . .

# ===== BUILD =====
# Install dependencies (npm ci makes sure the exact versions in the lockfile gets installed)
RUN npm ci --legacy-peer-deps
# Build the app
RUN npm run build

# ===== RUN =====
FROM nginx:1.23.2-alpine as production
ENV NODE_ENV production
# Copy built assets from `builder` image
COPY --from=builder /app/build /usr/share/nginx/html
# Add your nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Expose port
EXPOSE 80
# Start nginx
CMD ["nginx", "-g", "daemon off;"]