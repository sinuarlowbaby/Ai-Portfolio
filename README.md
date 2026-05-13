# 🤖 AI Portfolio

A minimal, high-performance developer portfolio built with **Next.js 15 (App Router)** and **Tailwind CSS**. Designed specifically for AI Engineers and Systems Architects, featuring a "Minimal Technical Luxury" aesthetic.

**No database or external backend required** — all data is stored locally, and the contact form uses Next.js Serverless API routes to send emails directly.

---

## ✨ Features

- 🎨 **Minimal Technical Luxury Design** — Dark mode, glassmorphism, subtle borders, and smooth animations (Framer Motion).
- 🗂️ **Projects & Skills** — Managed via local JSON data, no database needed.
- 📬 **Serverless Contact Form** — Uses `nodemailer` in a Next.js API route to send emails directly to your inbox.
- 🤖 **AI Chat Ready** — Built-in API route stub (`/api/ai/chat`) ready for integration with OpenAI or Groq.
- ⚡ **Extremely Fast** — Single-framework architecture deployed entirely on Vercel.

---

## 🗂️ Project Structure

```
ai-portfolio/
└── frontend/                 # Next.js 15 App
    ├── app/                  # App Router pages & API routes
    │   ├── api/
    │   │   ├── contact/      # POST /api/contact (Email via Nodemailer)
    │   │   └── ai/chat/      # POST /api/ai/chat (Placeholder AI endpoint)
    │   ├── components/       # UI Components (Navbar, Hero, etc.)
    │   └── projects/         # Project listing and dynamic detail pages
    ├── data/                 
    │   ├── projects.json     # ✏️ Edit to add/update projects
    │   └── skills.json       # ✏️ Edit to add/update skills
    ├── services/             # Data access logic
    └── public/               # Static assets
```

---

## 🛠️ Tech Stack

| Tech | Purpose |
|---|---|
| **Next.js 15** | React framework (App Router & API Routes) |
| **TypeScript** | Type safety |
| **Tailwind CSS v4** | Utility-first styling |
| **Framer Motion** | Fluid scroll and interaction animations |
| **Nodemailer** | Serverless email sending |

---

## ⚙️ Setup & Running Locally

### Prerequisites
- Node.js 18+

### 1. Clone & Install

```bash
git clone https://github.com/sinuarlowbaby/Ai-Portfolio.git
cd ai-portfolio/frontend
npm install
```

### 2. Environment Variables

Create a `.env.local` file inside the `frontend/` directory to enable the Contact form email functionality:

```env
# Required for the contact form to actually send emails to you
SMTP_EMAIL=your-gmail@gmail.com
SMTP_PASSWORD=your_16_character_google_app_password
CONTACT_EMAIL=your-gmail@gmail.com
```

> **Note:** You must use a Google "App Password", not your standard Gmail password. 

### 3. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## ✏️ Editing Your Content

### Add / Edit a Project
Open `frontend/data/projects.json` and add or modify an entry:

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
  "demo_url": "https://my-project.vercel.app"
}
```

### Add / Edit a Skill
Open `frontend/data/skills.json` and add a skill to any category:

```json
"Agentic AI": [
    "LangGraph StateGraph",
    "Plan-Execute-Evaluate Loop"
]
```

---

## 🚀 Deployment

Because the entire application (both frontend UI and API routes) is built in Next.js, deployment is a one-click process on Vercel.

1. Connect your GitHub repository to [Vercel](https://vercel.com).
2. Set the **Root Directory** to `frontend`.
3. Add your Environment Variables (`SMTP_EMAIL`, `SMTP_PASSWORD`, `CONTACT_EMAIL`) in the Vercel dashboard.
4. Click **Deploy**.

You no longer need to host a separate backend on Render or AWS!

---

## 📄 License

MIT License — feel free to fork and customize for your own portfolio!
