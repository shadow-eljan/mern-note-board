# MERN Note Board

A small full-stack note-taking application built with React, Vite, Express, MongoDB, and Upstash rate limiting.

## Project Structure

```text
backend/   Express API, MongoDB models, and Upstash rate limiting
frontend/  React/Vite user interface
```

The root `package.json` uses npm workspaces to provide convenience scripts. The backend and frontend also keep their own package manifests and lockfiles so they can be deployed independently.

## Requirements

- Node.js 20 or newer
- npm 10 or newer
- MongoDB connection string
- Upstash Redis REST URL and token

## Local Setup

Install all workspace dependencies from the repository root:

```bash
npm install
```

Create `backend/.env`:

```env
PORT=5000
MONGO_URI=mongodb+srv://<user>:<password>@<cluster>/<database>
UPSTASH_REDIS_REST_URL=https://<your-instance>.upstash.io
UPSTASH_REDIS_REST_TOKEN=<your-token>
FRONTEND_URL=http://localhost:5173
```

The frontend reads the API URL from `VITE_API_URL`. For local development, create `frontend/.env.local`:

```env
VITE_API_URL=http://localhost:5000/api
```

Run the API and frontend in separate terminals:

```bash
npm run dev:backend
npm run dev:frontend
```

Open `http://localhost:5173` in a browser.

## Available Scripts

From the repository root:

| Command                | Purpose                                  |
| ---------------------- | ---------------------------------------- |
| `npm install`          | Install dependencies for both workspaces |
| `npm run dev:backend`  | Start the API with Nodemon               |
| `npm run dev:frontend` | Start the Vite development server        |
| `npm run build`        | Build the frontend for production        |
| `npm run start`        | Start the backend API                    |

Workspace-specific commands are available from each directory. For example, `cd frontend && npm run lint` checks the frontend.

## API Endpoints

All endpoints are prefixed with `/api/notes`:

| Method   | Path   | Purpose       |
| -------- | ------ | ------------- |
| `GET`    | `/`    | List notes    |
| `GET`    | `/:id` | Get one note  |
| `POST`   | `/`    | Create a note |
| `PUT`    | `/:id` | Update a note |
| `DELETE` | `/:id` | Delete a note |

<!-- ## Security and Git Rules

Commit source code, configuration templates, and lockfiles. Do not commit:

- `.env` files or tokens, passwords, database URLs, and API keys
- `node_modules/`
- Vite/production output such as `frontend/dist/`
- Logs, coverage, temporary files, or editor-specific settings

If a secret is accidentally committed, rotate it immediately. Removing the file in a later commit does not remove it from git history. -->

<!-- ## Deployment

### Render: backend

Create a Web Service with these settings:

- **Root Directory:** `backend`
- **Build Command:** `npm install`
- **Start Command:** `npm start`

Add these environment variables in Render. Do not commit their values:

```env
PORT=10000
MONGO_URI=...
UPSTASH_REDIS_REST_URL=...
UPSTASH_REDIS_REST_TOKEN=...
FRONTEND_URL=https://<your-vercel-project>.vercel.app
```

Render supplies `PORT`; the example value is only illustrative. Copy the public Render service URL after deployment.

### Vercel: frontend

Import the repository as a Vercel project with these settings:

- **Root Directory:** `frontend`
- **Framework Preset:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`

Add this environment variable in Vercel:

```env
VITE_API_URL=https://<your-render-service>.onrender.com/api
```

Redeploy after changing environment variables. Update Render's `FRONTEND_URL` with the final Vercel URL so CORS allows the browser requests. -->