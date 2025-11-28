# Auth Module Implementation Walkthrough

## Changes
- **Auth Module**: Implemented `AuthModule`, `AuthService`, `AuthController`.
  - Added `POST /auth/login` endpoint.
  - configured `JwtModule` and `PassportModule`.
- **Users Module**: Implemented `UsersModule` and `UsersService`.
  - Added `findOne` method to fetch users from DB.
- **Prisma Service**: Created `PrismaService` to connect to PostgreSQL.
- **Security**: Added `JwtStrategy` and `JwtAuthGuard`.
- **Fixes**: Recreated `schema.prisma` to resolve encoding issues ("Invalid character").

## Verification Results

### Automated Checks
- [x] `npx prisma generate` - **Success**
- [x] `npm run build` - **Success**

### Manual Verification Steps
To verify the authentication flow manually:

1.  **Start the Server**:
    ```bash
    npm run start:dev
    ```

2.  **Create a User** (via Prisma Studio or SQL):
    - Run `npx prisma studio`
    - Add a user with a hashed password (use an online bcrypt generator for testing, e.g., hash of "password").

3.  **Login**:
    - Send `POST http://localhost:3000/auth/login`
    - Body: `{ "email": "user@example.com", "password": "password" }`
    - Expect: `{ "access_token": "..." }`

4.  **Access Protected Route**:
    - Send `GET http://localhost:3000/profile`
    - Header: `Authorization: Bearer <access_token>`
    - Expect: User profile JSON.
