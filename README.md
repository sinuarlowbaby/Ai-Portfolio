# 🤖 AI Portfolio

A full-stack AI developer portfolio built with **Next.js 15** (frontend) and **FastAPI** (backend). **No database required** — all data is stored in editable JSON files.

---

## 🗂️ Project Structure

```
ai-portfolio/
├── backend/                  # FastAPI Python backend
│   ├── app/
│   │   ├── main.py           # FastAPI app entry point & CORS config
│   │   ├── data_store.py     # Reads data from JSON files
│   │   ├── models.py         # Data schema definitions (TypedDict)
│   │   ├── schemas.py        # Pydantic response schemas
│   │   ├── dependencies.py   # Config stubs (future email support)
│   │   └── routes/
│   │       ├── projects.py   # GET /projects/
│   │       ├── skills.py     # GET /skills/
│   │       ├── contact.py    # POST /contact/ (log → future email)
│   │       └── ai.py         # POST /ai/chat (placeholder)
│   ├── data/
│   │   ├── projects.json     # ✏️ Edit to add/update projects
│   │   └── skills.json       # ✏️ Edit to add/update skills
│   ├── requirements.txt
│   ├── Procfile              # Render deployment config
│   └── runtime.txt
└── frontend/                 # Next.js 15 frontend
    ├── app/                  # App Router pages & components
    ├── services/             # API service helpers
    ├── public/
    ├── package.json
    └── next.config.ts
```

---

## ✨ Features

- 🗂️ **Projects** — Fetched from `data/projects.json`, no database needed
- 🧠 **Skills** — Grouped by layer from `data/skills.json`
- 📬 **Contact Form** — Logs messages to stdout, ready for email integration
- 🤖 **AI Chat Endpoint** — `/ai/chat` ready for LLM integration
- 🌐 **CORS** configured for local dev and Vercel deployment
- 🎨 **Framer Motion** animations throughout the frontend

---

## 🛠️ Tech Stack

### Backend
| Tech | Purpose |
|---|---|
| FastAPI | REST API framework |
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

---

### 1. Clone the Repository

```bash
git clone https://github.com/sinuarlowbaby/Ai-Portfolio.git
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

#### Run the Backend

```bash
uvicorn app.main:app --reload
```

API available at: `http://localhost:8000`  
Swagger docs: `http://localhost:8000/docs`

> **No `.env` required** — there are no database credentials. The `.env` file only holds optional future config (e.g. SMTP for email).

---

### 3. Frontend Setup

```bash
cd frontend
npm install
```

Create a `.env.local` file inside `frontend/`:

```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```

#### Run the Frontend

```bash
npm run dev
```

Frontend available at: `http://localhost:3000`

---

## ✏️ Editing Your Data

### Add / Edit a Project
Open `backend/data/projects.json` and add or modify an entry:

```json
{
  "id": 3,
  "slug": "my-project",
  "title": "My Project",
  "subtitle": "Short tagline",
  "description": "What this project does.",
  "overview": "Technical details...",
  "tags": "Python,FastAPI,React",
  "github_url": "https://github.com/sinuarlowbaby/my-project",
  "demo_url": "https://my-project.vercel.app",
  "banner_accent": "#10b981",
  "banner_gradient": "from-green-400/20 to-primary/10"
}
```

### Add / Edit a Skill
Open `backend/data/skills.json` and add a skill to any layer (or create a new layer):

```json
"AI / GenAI": ["LangChain", "Gemini API", "Your New Skill"]
```

**Redeploy the backend** after any data change — no migrations, no database commands.

---

## 🚀 Deployment

### Backend → Render
1. Push to GitHub (data JSON files are committed and included).
2. No environment variables needed (remove any old Supabase vars from the dashboard).
3. The `Procfile` is already configured:
   ```
   web: uvicorn app.main:app --host 0.0.0.0 --port $PORT
   ```

### Frontend → Vercel
1. Connect your GitHub repo to [Vercel](https://vercel.com).
2. Set **Root Directory** to `frontend`.
3. Add environment variable:
   ```
   NEXT_PUBLIC_API_URL=https://your-backend.onrender.com
   ```
4. Deploy!

> After deploying the backend, update `allow_origins` in `backend/app/main.py` with your real Vercel URL.

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Health check |
| GET | `/projects/` | List all projects (from JSON) |
| GET | `/skills/` | List all skills grouped by layer |
| POST | `/contact/` | Submit contact message (logged, future email) |
| POST | `/ai/chat` | AI chat (placeholder for LLM) |

---

## 📧 Future: Auto-Email on Contact

When ready, add these to `backend/.env` and implement the SMTP logic in `routes/contact.py`:

```env
CONTACT_EMAIL=your-email@example.com
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@example.com
SMTP_PASS=your-app-password
```

---

## 📄 License

MIT License — feel free to fork and customize for your own portfolio!
