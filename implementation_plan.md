# Registration Flow Implementation Plan

## Goal Description
Allow users to register a new account via the frontend application. This requires a new backend endpoint for registration and a frontend form to collect user details.

## User Review Required
> [!NOTE]
> We will be adding a `POST /auth/register` endpoint.
> On the frontend, we will create a simple registration page at `/register`.

## Proposed Changes

### Backend (Server)
#### [MODIFY] [auth.service.ts](file:///c:/AntiProject/crmanti/server/src/auth/auth.service.ts)
- Add `register(email, password, name)` method:
  - Hash the password using `bcrypt`.
  - Create a new user using `UsersService` (need to add `create` method there too) or directly via Prisma (better to keep it in UsersService).

#### [MODIFY] [users.service.ts](file:///c:/AntiProject/crmanti/server/src/users/users.service.ts)
- Add `create(data: Prisma.UserCreateInput)` method.

#### [MODIFY] [auth.controller.ts](file:///c:/AntiProject/crmanti/server/src/auth/auth.controller.ts)
- Add `@Post('register')` endpoint.

### Frontend (Client)
#### [NEW] [RegisterPage.tsx](file:///c:/AntiProject/crmanti/client/src/pages/RegisterPage.tsx)
- Create a form with Email, Password, and Name fields.
- Use `fetch` to call `POST http://localhost:3000/auth/register`.
- On success, redirect to Login (or auto-login).

#### [MODIFY] [App.tsx](file:///c:/AntiProject/crmanti/client/src/App.tsx)
- Add route `/register`.

## Verification Plan
### Manual Verification
1.  Open `http://localhost:5173/register`.
2.  Fill in details for "User 1".
3.  Submit -> Check database (Prisma Studio) to see if user exists.
4.  Repeat for "User 2".
