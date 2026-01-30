# syntax=docker/dockerfile:1

# Build stage
FROM oven/bun:1.3.7-alpine AS builder

WORKDIR /app

# Copy package files for dependency installation
COPY package.json bun.lock ./
COPY turbo.json ./
COPY apps/web/package.json ./apps/web/
COPY packages/backend/package.json ./packages/backend/
COPY packages/config/package.json ./packages/config/
COPY packages/env/package.json ./packages/env/

# Install dependencies
RUN bun install --frozen-lockfile

# Copy source files
COPY apps/web ./apps/web
COPY packages ./packages
COPY server.production.ts ./server.production.ts

# Build the application
RUN bun run build --filter=web

# Production stage
FROM oven/bun:1.3.7-alpine AS runner

WORKDIR /app

RUN apk add --no-cache dumb-init curl

# Copy package files and lockfile for dependency installation
COPY --from=builder /app/package.json /app/bun.lock ./
COPY --from=builder /app/turbo.json ./
COPY --from=builder /app/apps/web/package.json ./apps/web/
COPY --from=builder /app/packages/backend/package.json ./packages/backend/
COPY --from=builder /app/packages/config/package.json ./packages/config/
COPY --from=builder /app/packages/env/package.json ./packages/env/

# Copy workspace source files (needed for workspace dependencies)
COPY --from=builder /app/packages ./packages

# Install production dependencies
RUN bun install --frozen-lockfile --production

# Copy built application from builder
COPY --from=builder /app/apps/web/dist ./apps/web/dist

# Copy production server
COPY --from=builder /app/server.production.ts ./server.production.ts

# Change ownership to bun user (already exists in image)
USER root
RUN chown -R bun:bun /app

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3001
ENV HOST=0.0.0.0

# Switch to non-root user
USER bun

# Expose port
EXPOSE 3001

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:3001 || exit 1

# Start the application with dumb-init
ENTRYPOINT ["dumb-init", "--"]
CMD ["bun", "run", "server.production.ts"]
