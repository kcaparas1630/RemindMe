# Use the official PostGIS image
FROM postgis/postgis:15-master

# Switch to root to handle permissions
USER root

# Create the necessary directories and set permissions
RUN mkdir -p /var/lib/postgresql/data && \
    chown -R postgres:postgres /var/lib/postgresql/data && \
    chmod 700 /var/lib/postgresql/data && \
    mkdir -p /var/run/postgresql && \
    chown -R postgres:postgres /var/run/postgresql && \
    chmod 775 /var/run/postgresql

# Copy startup scripts
COPY --chown=postgres:postgres ./Database/db/* /docker-entrypoint-initdb.d/

# Set environment variables
ENV POSTGRES_HOST_AUTH_METHOD=trust
ENV PGDATA=/var/lib/postgresql/data

# Switch back to postgres user
USER postgres

# Set maintainer labels
LABEL maintainer="Kent Caparas<kentcaparas12@gmail.com>"
LABEL description="Docker image to run Postgres Database"
LABEL version="1.0"

# Expose Port 5432 for inter-container communication
EXPOSE 5432

# Healthcheck
HEALTHCHECK --interval=5s --timeout=5s --retries=5 CMD [ "pg_isready", "-U", "postgres" ]
