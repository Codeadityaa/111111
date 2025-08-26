# Job Portal — Full Project (Minimal Example)

This archive contains a minimal full-stack Job Portal.

Structure:
- backend/ — Node.js + Express + MongoDB
- frontend/ — Vite + React simple UI

How to run locally:
1. Start MongoDB (or use MongoDB Atlas).
2. Configure backend/.env (copy from .env.example)
3. Install and run backend:
   ```
   cd backend
   npm install
   npm run dev
   ```
4. Install and run frontend:
   ```
   cd frontend
   npm install
   npm run dev
   ```
Frontend expects backend at http://localhost:5000 by default. You can change by setting `VITE_API_URL` env var (create a .env in frontend with `VITE_API_URL=http://your-backend`).

Notes:
- This is a minimal starter. I can expand with Tailwind, resume upload, admin UI, and packaging into Docker on request.
