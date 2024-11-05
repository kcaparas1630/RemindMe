FROM postgis/postgis:15-master

# Copy startup scripts
COPY db/entrypoint/* /docker-entrypoint-initdb.d/

# User, port and Healthcheck
USER postgres

# Set Maintainer labels
LABEL maintainer="Kent Caparas<kentcaparas12@gmail.com>"
LABEL description="Docker image to run Postgres Database"
LABEL version="1.0"

# Expose Port 5432 to inter-container communication. Backend communicating here.
EXPOSE 5432

HEALTHCHECK --interval=5s --timeout=5s --retries=5 CMD [ "pg_isready", "-U", "postgres"]
