# Multi-stage Containerfile for ETF UNSA Web
# Author: Ernedin Zajko <ezajko@root.ba>
# License: GPL-2.0-or-later

# ======================
# Development Stage
# ======================
FROM docker.io/library/node:20-alpine AS development

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json pnpm-lock.yaml* ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source code
COPY . .

# Expose ports
EXPOSE 4321 6006

# Development command
CMD ["pnpm", "run", "dev", "--host"]

# ======================
# Build Stage
# ======================
FROM development AS builder

# Build the application
RUN pnpm run build

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
