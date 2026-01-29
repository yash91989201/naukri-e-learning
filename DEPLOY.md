# Coolify Deployment Guide

## Quick Deploy

1. **Create a new service in Coolify**
   - Choose "Dockerfile" as the build pack
   - Connect your Git repository

2. **Configure Environment Variables**
   Set these in Coolify's environment variables section:
   ```
   VITE_CONVEX_URL=https://your-convex-deployment.convex.cloud
   VITE_CONVEX_SITE_URL=https://your-app-domain.com
   PORT=3001
   HOST=0.0.0.0
   NODE_ENV=production
   ```

3. **Configure Ports**
   - Application Port: `3001`
   - Protocol: HTTP

4. **Build Configuration**
   - Dockerfile Path: `./Dockerfile`
   - No additional build commands needed

5. **Deploy**
   - Click deploy and Coolify will build and run your container

## Environment Variables Explained

- `VITE_CONVEX_URL`: Your Convex backend deployment URL
- `VITE_CONVEX_SITE_URL`: Your application's public URL (for auth callbacks)
- `PORT`: Port the app listens on (default: 3001)
- `HOST`: Interface to bind to (use 0.0.0.0 for containers)
- `NODE_ENV`: Set to 'production' for optimizations

## Testing Locally

Build and run the Docker container locally:

```bash
# Build the image
docker build -t naukri-e-learning .

# Run the container
docker run -p 3001:3001 \
  -e VITE_CONVEX_URL=http://127.0.0.1:3210 \
  -e VITE_CONVEX_SITE_URL=http://localhost:3001 \
  naukri-e-learning

# Or run in detached mode
docker run -d -p 3001:3001 \
  -e VITE_CONVEX_URL=http://127.0.0.1:3210 \
  -e VITE_CONVEX_SITE_URL=http://localhost:3001 \
  --name naukri-app \
  naukri-e-learning
```

Visit http://localhost:3001

Stop the container:
```bash
docker stop naukri-app && docker rm naukri-app
```

## Production Checklist

- [ ] Set up Convex production deployment
- [ ] Configure production environment variables in Coolify
- [ ] Set up custom domain (optional)
- [ ] Configure SSL certificate (Coolify handles this automatically)
- [ ] Update VITE_CONVEX_SITE_URL to match your domain
- [ ] Configure CORS settings in Convex if needed

## Dockerfile Features

- **Multi-stage build**: Optimized image size (builder + runner)
- **Bun runtime**: Fast JavaScript runtime with native performance
- **Production dependencies**: Only installs required runtime dependencies
- **Workspace support**: Properly handles monorepo workspace dependencies
- **Non-root user**: Runs as `bun` user for security
- **Health checks**: HTTP endpoint monitoring with curl
- **Signal handling**: Graceful shutdowns with dumb-init
- **Alpine Linux**: Minimal base image (~200MB final size)

## Troubleshooting

**Build fails:**
- Check that all workspace dependencies are properly configured
- Verify bun.lockb is committed to repository

**"Cannot find module" errors:**
- This was fixed - the Dockerfile now installs node_modules in production stage
- Make sure you're using the latest Dockerfile
- Rebuild without cache: `docker build --no-cache -t naukri-e-learning .`

**App won't start:**
- Verify VITE_CONVEX_URL is set correctly
- Check logs: `docker logs <container-name>`
- Ensure Convex backend is accessible from the container

**Port conflicts:**
- Change PORT environment variable to an available port
- Update port mapping in Coolify accordingly

**Build fails:**
- Ensure `bun.lock` file exists in repository
- Check all workspace packages have valid package.json files
- Verify Bun version matches (currently 1.3.7)
