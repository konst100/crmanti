# Database & ORM Setup Plan

## Goal Description
Initialize the PostgreSQL database using Docker and configure Prisma ORM to connect to it. This involves starting the containers, ensuring the environment variables are correct, and applying the database schema via migrations.

## User Review Required
> [!IMPORTANT]
> Ensure Docker Desktop is running on your machine before proceeding.

## Proposed Changes

### Backend Configuration
#### [NEW] [server/.env](file:///c:/AntiProject/crmanti/server/.env)
- Create or update `.env` with the following content to match `docker-compose.yml`:
  ```env
  DATABASE_URL="postgresql://myuser:mypassword@localhost:5432/crm_db?schema=public"
  ```

### Database Initialization
- Start Docker containers: `docker-compose up -d`
- Run Prisma migrations: `cd server && npx prisma migrate dev --name init`
- Generate Prisma Client: `cd server && npx prisma generate`

## Verification Plan

### Automated Tests
- **Check Docker Containers**: Run `docker ps` to verify `crm_db` and `crm_pgadmin` are running.
- **Check Database Connection**: The `npx prisma migrate dev` command will fail if it cannot connect. Success confirms connection.
- **Prisma Studio**: Run `npx prisma studio` to open a web interface and verify the schema is applied (optional).
