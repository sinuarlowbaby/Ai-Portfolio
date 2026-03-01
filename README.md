# 🤖 AI Portfolio

A full-stack AI developer portfolio built with **Next.js 15** (frontend) and **FastAPI** (backend), connected to a **Supabase PostgreSQL** database. The portfolio showcases projects, skills, and includes a contact form with an AI chat endpoint.

---

## 🗂️ Project Structure

```
ai-portfolio/
├── backend/          # FastAPI Python backend
│   ├── app/
│   │   ├── main.py       # FastAPI app entry point & CORS config
│   │   ├── database.py   # SQLAlchemy + Supabase client setup
│   │   ├── models.py     # ORM models (Project, Skill, Contact)
│   │   ├── schemas.py    # Pydantic schemas
│   │   ├── dependencies.py
│   │   └── routes/
│   │       ├── projects.py
│   │       ├── skills.py
│   │       ├── contact.py
│   │       └── ai.py     # AI chat endpoint (placeholder)
│   ├── seed.py           # Database seeder
│   ├── reset_db.py       # Reset/recreate tables
│   ├── requirements.txt
│   ├── Procfile          # For deployment (e.g. Render)
│   └── runtime.txt
└── frontend/         # Next.js 15 frontend
    ├── app/              # App Router pages & components
    ├── services/         # API service helpers
    ├── public/
    ├── package.json
    └── next.config.ts
```

---

## ✨ Features

- 🗂️ **Projects** — Showcases projects fetched dynamically from the database
- 🧠 **Skills** — Displays tech stack grouped by layer (AI/GenAI, Backend, Frontend, etc.)
- 📬 **Contact Form** — Saves messages to the database via POST `/contact/`
- 🤖 **AI Chat Endpoint** — `/ai/chat` endpoint ready for LLM integration
- 🌐 **CORS** configured for local development and Vercel deployment
- 🎨 **Framer Motion** animations throughout the frontend

---

## 🛠️ Tech Stack

### Backend
| Tech | Purpose |
|---|---|
| FastAPI | REST API framework |
| SQLAlchemy | ORM for PostgreSQL |
| Supabase | Hosted PostgreSQL + client SDK |
| Pydantic | Data validation & schemas |
| python-dotenv | Environment variable management |
| Uvicorn | ASGI server |

### Frontend
| Tech | Purpose |
|---|---|
| Next.js 15 | React framework (App Router) |
| TypeScript | Type safety |
| Tailwind CSS v4 | Styling |
| Framer Motion | Animations |

---

## ⚙️ Setup & Running Locally

### Prerequisites
- Python 3.11+
- Node.js 18+
- A [Supabase](https://supabase.com) project with PostgreSQL

---

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/ai-portfolio.git
cd ai-portfolio
```

---

### 2. Backend Setup

```bash
cd backend

# Create and activate a virtual environment
python -m venv venv
venv\Scripts\activate        # Windows
# source venv/bin/activate   # macOS/Linux

# Install dependencies
pip install -r requirements.txt
```

#### Configure Environment Variables

Create a `.env` file inside the `backend/` directory:

```env
DATABASE_URL=postgresql://postgres:<password>@<host>:<port>/<dbname>
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_KEY=your-supabase-anon-key
```

#### Seed the Database (first time)

```bash
python reset_db.py   # Creates tables
python seed.py       # Populates with initial data
```

#### Run the Backend

```bash
uvicorn app.main:app --reload
```

API will be available at: `http://localhost:8000`  
Swagger docs: `http://localhost:8000/docs`

---

### 3. Frontend Setup

```bash
cd frontend

# Install dependencies
npm install
```

#### Configure Environment Variables

Create a `.env.local` file inside the `frontend/` directory:

```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```

#### Run the Frontend

```bash
npm run dev
```

Frontend will be available at: `http://localhost:3000`

---

## 🚀 Deployment

### Backend → Render / Railway
1. Push the `backend/` folder to a GitHub repo (or use a monorepo).
2. Set the environment variables (`DATABASE_URL`, `SUPABASE_URL`, `SUPABASE_KEY`) in the platform dashboard.
3. The `Procfile` is already configured:
   ```
   web: uvicorn app.main:app --host 0.0.0.0 --port $PORT
   ```

### Frontend → Vercel
1. Connect your GitHub repo to [Vercel](https://vercel.com).
2. Set the **Root Directory** to `frontend`.
3. Add environment variable:
   ```
   NEXT_PUBLIC_API_URL=https://your-backend-url.onrender.com
   ```
4. Deploy!

> After deploying the backend, remember to update the `allow_origins` list in `backend/app/main.py` with your real Vercel URL.

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Health check |
| GET | `/projects/` | List all projects |
| GET | `/projects/{slug}` | Get project by slug |
| GET | `/skills/` | List all skills |
| POST | `/contact/` | Submit a contact message |
| POST | `/ai/chat` | AI chat (placeholder) |

---

## 📄 License

MIT License — feel free to fork and customize for your own portfolio!
