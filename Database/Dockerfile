FROM postgres:13.16-bookworm

# Set permissions for OpenShift random UID compatibility
USER root
RUN mkdir -p /var/lib/postgresql/data && \
    chown -R 1006170000:0 /var/lib/postgresql && \
    chmod -R 777 /var/lib/postgresql && \
    chmod -R 777 /var/run/postgresql && \
    chmod g+w /etc/passwd

# Copy startup scripts
COPY ./Database/db/* /docker-entrypoint-initdb.d/
RUN chown -R 1006170000:0 /docker-entrypoint-initdb.d && \
    chmod -R 777 /docker-entrypoint-initdb.d

# Update postgres user UID
RUN usermod -u 1006170000 postgres

# Switch to non-root user
USER 1006170000

# Set Maintainer labels
LABEL maintainer="Kent Caparas<kentcaparas12@gmail.com>"
LABEL description="Docker image to run Postgres Database"
LABEL version="1.0"

# Expose Port 5432
EXPOSE 5432

# Healthcheck
HEALTHCHECK --interval=5s --timeout=5s --retries=5 CMD [ "pg_isready", "-U", "postgres" ]
