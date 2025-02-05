FROM node:20.16.0

# Set working directory
WORKDIR /app/

# Create logs directory
RUN mkdir -p /app/logs

# Copy files and install dependencies
COPY . ./
RUN npm i && \
    npm run build

# Set User and permissions
RUN groupadd -r backendgroup && \
    useradd -r -g backendgroup -m backenduser && \
    chown -R backenduser:backendgroup /app && \
    chmod 755 /app && \
    # Explicitly set permissions for logs directory
    chmod 755 /app/logs

# Set maintainer labels
LABEL maintainer="Kent Caparas<kentcaparas12@gmail.com>"
LABEL description="Docker image to run Task command line backend"
LABEL version="1.0"

# Switch to non-root user
USER backenduser

# RUN BACKEND
CMD ["npm", "run", "serve", "--no-update-notifier", "--max-old-space-size=50"]
