FROM postgres:13.16-bookworm

# Create required directories with appropriate permissions
RUN mkdir -p /var/lib/postgresql/data && \
    chmod -R 777 /var/lib/postgresql && \
    chmod -R 777 /run/postgresql && \
    chmod g+w /etc/passwd

# Copy startup scripts with appropriate permissions
COPY ./Database/db/* /docker-entrypoint-initdb.d/
RUN chmod -R 777 /docker-entrypoint-initdb.d

# Ensure PGDATA directory is accessible
ENV PGDATA=/var/lib/postgresql/data

# Set Maintainer labels
LABEL maintainer="Kent Caparas<kentcaparas12@gmail.com>"
LABEL description="Docker image to run Postgres Database"
LABEL version="1.0"

# Expose Port 5432
EXPOSE 5432

# Switch to non-root user (OpenShift will assign the UID)
USER 1001

# Healthcheck
HEALTHCHECK --interval=30s --timeout=10s --retries=5 CMD ["pg_isready", "-U", "postgres"]
