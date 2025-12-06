# Multi-stage Containerfile for ETF UNSA Web
# Author: Ernedin Zajko <ezajko@root.ba>
# License: GPL-2.0-or-later

# ======================
# Development Stage
# ======================
FROM docker.io/library/node:20-alpine AS development

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Expose ports
EXPOSE 4321

# Development command
CMD ["npm", "run", "dev", "--", "--host"]

# ======================
# Build Stage
# ======================
FROM development AS builder

# Build the application
RUN npm run build

# ======================
# Production Stage
# ======================
FROM docker.io/library/nginx:alpine AS production

# Copy build output
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom nginx config (if needed)
# COPY nginx.conf /etc/nginx/nginx.conf

# Expose port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
