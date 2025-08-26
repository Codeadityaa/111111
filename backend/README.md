# Backend — Job Portal

1. Copy `.env.example` to `.env` and fill `MONGODB_URI` and `JWT_SECRET`.
2. Install dependencies:
   ```
   cd backend
   npm install
   ```
3. Run server:
   ```
   npm run dev
   ```
4. API endpoints:
   - `POST /api/auth/register` {name,email,password}
   - `POST /api/auth/login` {email,password}
   - `GET /api/jobs`
   - `POST /api/jobs` (Authorization: Bearer <token>)
   - `POST /api/jobs/:id/apply` (Authorization: Bearer <token>)
