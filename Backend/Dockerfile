FROM node:slim

# COPY files and install dependencies
WORKDIR /app/

# Copy package files first for better caching
COPY package*.json ./
COPY tsconfig.json ./

# Copy source code
COPY src/ ./src/

# Install dependencies and build
RUN npm install && \
    npm run build

# Set User
RUN groupadd -r backendgroup && \
    useradd -r -g backendgroup -m backenduser && \
    chown -R backenduser:backendgroup /app && \
    chmod 755 /app

# Run the backend using the set user.
USER backenduser

# Set maintainer labels
LABEL maintainer="Kent Caparas<kentcaparas12@gmail.com>"
LABEL description="Docker image to run Task command line backend"
LABEL version="1.0"

# RUN BACKEND
CMD ["npm", "run", "serve", "--no-update-notifier", "--max-old-space-size=50"]
