export interface TechCategory {
    label: string;
    items: string[];
}

export interface ProjectDetail {
    slug: string;
    title: string;
    subtitle: string;
    tagline: string;
    github_url: string;
    demo_url?: string;
    tags: string[];
    accentColor: string;
    gradientFrom: string;
    gradientTo: string;
    overview: string;
    highlights: string[];
    architecture: string;
    techStack: TechCategory[];
    features: { title: string; description: string }[];
}

export const projectDetails: Record<string, ProjectDetail> = {
    "rag-pdf-chatbot": {
        slug: "rag-pdf-chatbot",
        title: "RAG-PDF-Chatbot",
        subtitle: "Production-Grade Retrieval-Augmented Generation",
        tagline: "Upload PDFs, ask questions, get precise streaming answers grounded in your documents.",
        github_url: "https://github.com/sinuarlowbaby/RAG-PDF-Chatbot",
        tags: ["FastAPI", "LangChain", "GPT-4o", "Qdrant", "Redis", "Docker", "Python"],
        accentColor: "#9d5cff",
        gradientFrom: "rgba(157,92,255,0.15)",
        gradientTo: "rgba(59,130,246,0.08)",
        overview:
            "A production-grade chatbot that lets users upload PDF documents and ask natural-language questions. The system answers using only document content, backed by a 5-stage retrieval pipeline and real-time token-by-token streaming responses via Server-Sent Events.",
        highlights: [
            "5-stage RAG pipeline: Multi-query expansion → Hybrid retrieval → Deduplication → Cross-encoder reranking → Token-aware context assembly",
            "Semantic chunking with SemanticChunker (HuggingFace all-MiniLM-L6-v2) using percentile-based breakpoints for meaning-preserving splits",
            "Hybrid retrieval combining MMR vector search (60%) + BM25 keyword search (40%) via EnsembleRetriever",
            "Cross-encoder reranking using BAAI/bge-reranker-base with sigmoid-normalized scores",
            "Redis-backed semantic cache with 80% cosine similarity threshold — avoids redundant retrieval calls",
            "Real-time streaming via FastAPI StreamingResponse + Server-Sent Events (SSE)",
            "Multi-user isolation: session-based UUID filtering on shared Qdrant collection",
            "Full Docker Compose stack: FastAPI + Qdrant vector DB + Valkey/Redis",
        ],
        architecture:
            "User Browser → FastAPI (Uvicorn ASGI) → RAG Ingestion Pipeline [PyPDFLoader → SemanticChunker → Qdrant] → RAG Query Pipeline [Multi-Query Expansion (GPT-4o-mini) → Hybrid Retrieval (MMR+BM25) → Dedup → CrossEncoder Rerank → Token Context Builder → GPT-4o Streaming]",
        techStack: [
            {
                label: "Backend",
                items: ["FastAPI", "Uvicorn (ASGI)", "Python 3.11", "Pydantic v2"],
            },
            {
                label: "AI / LLM",
                items: [
                    "GPT-4o (streaming answers)",
                    "GPT-4o-mini (multi-query expansion)",
                    "text-embedding-3-small (OpenAI)",
                    "all-MiniLM-L6-v2 (semantic chunking)",
                    "BAAI/bge-reranker-base (cross-encoder)",
                ],
            },
            {
                label: "RAG & Retrieval",
                items: [
                    "LangChain",
                    "LangChain Experimental (SemanticChunker)",
                    "rank_bm25 (BM25)",
                    "EnsembleRetriever",
                    "tiktoken (token counting)",
                    "scikit-learn (cosine similarity cache)",
                ],
            },
            {
                label: "Databases & Infra",
                items: ["Qdrant (vector DB)", "Valkey/Redis (semantic cache + sessions)", "Docker + Docker Compose"],
            },
        ],
        features: [
            {
                title: "Multi-Query RAG",
                description:
                    "Generates 4 semantically diverse queries per user question (keyword, natural language, paraphrase, expanded context) using GPT-4o-mini — maximizing document recall.",
            },
            {
                title: "Semantic Caching",
                description:
                    "Computes OpenAI embeddings for incoming queries and compares against Redis cache using cosine similarity (>0.8 threshold). Cache hits skip the full retrieval pipeline entirely.",
            },
            {
                title: "Real-Time Streaming",
                description:
                    "GPT-4o responses stream token-by-token to the browser via FastAPI StreamingResponse with Server-Sent Events — delivering a ChatGPT-like experience.",
            },
            {
                title: "Session Isolation",
                description:
                    "Each PDF upload gets a UUID session_id stored in Redis (30-min TTL). All Qdrant queries filter by session_id metadata so users only retrieve from their own documents.",
            },
        ],
    },

    "agentic-chatbot": {
        slug: "agentic-chatbot",
        title: "Agentic Chatbot",
        subtitle: "Multi-Step Autonomous AI Agent",
        tagline: "An autonomous AI that plans, executes tools, evaluates results, and loops until it's satisfied.",
        github_url: "https://github.com/sinuarlowbaby/Agentic-Chatbot",
        tags: ["LangGraph", "LangChain", "GPT-4o", "FastAPI", "PostgreSQL", "SQLAlchemy", "Python"],
        accentColor: "#00e5ff",
        gradientFrom: "rgba(0,229,255,0.15)",
        gradientTo: "rgba(157,92,255,0.08)",
        overview:
            "A production-grade agentic AI chatbot that accepts natural-language goals, autonomously decomposes them into a plan, executes each step using real-world tools (web search, data analysis, summarization), self-evaluates the quality of results, and loops until a satisfactory answer is produced — all without human intervention.",
        highlights: [
            "LangGraph StateGraph with Plan → Execute → Evaluate loop and conditional edge routing",
            "GPT-4o Planner node decomposes user goal into structured plan_steps[] with action + query",
            "Executor node dispatches to 3 LangChain tools: web_search (Tavily), analyze_data, summarize_data",
            "Evaluator node applies layered termination logic: error check → max_steps ceiling → plan continuation → quality check",
            "Data chaining: intermediate_result flows between executor steps enabling multi-step reasoning",
            "PostgreSQL database with 4 ORM tables: conversations, messages, agent_runs, tool_calls",
            "Cookie-based session management (HTTP-only, SameSite=Lax, 7-day expiry) for user identity",
            "Hard ceiling anti-infinite-loop protection (max_steps=3)",
        ],
        architecture:
            "FastAPI (POST /api/v1/chat) → LangGraph StateGraph → Planner Node [GPT-4o decomposes goal] → Executor Node [dispatches to 3 LangChain tools] → Evaluator Node [continue OR END] → PostgreSQL (conversations, messages, agent_runs, tool_calls)",
        techStack: [
            {
                label: "Agent Framework",
                items: ["LangGraph (StateGraph)", "LangChain 1.2", "LCEL (prompt | llm | parser)", "PydanticOutputParser"],
            },
            {
                label: "LLMs & APIs",
                items: ["OpenAI GPT-4o (planning + analysis)", "Groq Llama-3.3-70b (alternative backend)", "Tavily Search API (real-time web)"],
            },
            {
                label: "Backend",
                items: ["FastAPI 0.135", "Uvicorn 0.44", "Pydantic v2", "Python 3.10+"],
            },
            {
                label: "Database",
                items: ["PostgreSQL 14+", "SQLAlchemy ORM", "psycopg2-binary", "4 JSONB-enabled tables"],
            },
        ],
        features: [
            {
                title: "Plan-Execute-Evaluate Loop",
                description:
                    "LangGraph StateGraph with 3 nodes and conditional edges. The Evaluator dynamically routes back to the Executor or terminates based on error state, step count, plan progress, and result quality.",
            },
            {
                title: "Structured LLM Outputs",
                description:
                    "All LLM responses are parsed into strongly-typed Pydantic models using PydanticOutputParser. Planner returns PlanOutput; tools return AnalyzeDataInput/SummarizeDataInput with confidence scores.",
            },
            {
                title: "Multi-LLM Support",
                description:
                    "OpenAI GPT-4o and Groq Llama-3.3-70b are interchangeable backends via LangChain abstraction. Groq provides ~500 tok/sec for cost-sensitive workloads.",
            },
            {
                title: "Full Audit Trail",
                description:
                    "Every agent run is persisted: conversation, messages, agent_runs status, and all tool_calls with JSONB input/output — enabling full observability and debugging.",
            },
        ],
    },

    "career-lens": {
        slug: "career-lens",
        title: "Career Lens",
        subtitle: "AI-Powered Career Coaching Platform",
        tagline: "ATS scoring, skill gap analysis, and AI mock interviews — all in one platform.",
        github_url: "https://github.com/sinuarlowbaby/Career-Lens",
        tags: ["FastAPI", "LangChain", "ChromaDB", "Groq", "LLaMA 3.3 70B", "Google OAuth", "JWT", "Python"],
        accentColor: "#3b82f6",
        gradientFrom: "rgba(59,130,246,0.15)",
        gradientTo: "rgba(157,92,255,0.08)",
        overview:
            "CareerLens AI is a full-stack AI-powered career coaching platform. Job seekers can analyze their resume against job descriptions with an ATS Scoring Engine, identify skill gaps with a Gap Analyzer, and practice with a multi-turn AI Mock Interview Coach powered by Groq's ultra-fast LLaMA 3.3 70B inference.",
        highlights: [
            "RAG ingestion pipeline: SemanticChunker → ChromaDB with per-user metadata isolation",
            "ATS Scoring Engine with PydanticOutputParser-validated structured output (matched_skills, missing_experience, actionable_advice)",
            "Stateful mock interview engine: start → answer → follow-up → finish with per-question scoring",
            "Google OAuth 2.0 PKCE flow with JWT (HS256) stateless authentication via python-jose",
            "Auto-embedding trigger: uploading resume/JD auto-detects the paired document and triggers RAG ingestion",
            "Groq LLaMA 3.3 70B via LangChain LCEL chains for all AI inference (near-instant response)",
            "6 relational database models with cascade deletes, JSONB columns, and Alembic migrations",
            "Docker + docker-compose with uv for fast, deterministic dependency resolution",
        ],
        architecture:
            "Browser (Jinja2) → FastAPI (5 APIRouters) → Auth Layer [Google OAuth + JWT] → Upload Layer [PDF/DOCX/TXT parsing] → RAG Pipeline [SemanticChunker → ChromaDB] → LLM Layer [Groq LLaMA 3.3 70B via LangChain LCEL] → Services [ATS, Gap Analysis, Interview Engine] → SQLite/PostgreSQL (SQLAlchemy ORM)",
        techStack: [
            {
                label: "Backend",
                items: ["FastAPI 0.135 (async)", "Uvicorn + Gunicorn", "Pydantic v2", "Python 3.11"],
            },
            {
                label: "AI / LLM",
                items: [
                    "Groq LLaMA 3.3 70B (primary inference)",
                    "LangChain LCEL chains",
                    "PydanticOutputParser",
                    "OpenAI text-embedding-3-small",
                    "LangChain Experimental (SemanticChunker)",
                ],
            },
            {
                label: "Vector & RAG",
                items: ["ChromaDB (HTTP server mode)", "FAISS (optional backend)", "langchain-chroma", "rank-bm25"],
            },
            {
                label: "Auth & Database",
                items: [
                    "Google OAuth 2.0 (Authlib)",
                    "JWT HS256 (python-jose)",
                    "SQLAlchemy 2.0 ORM",
                    "Alembic migrations",
                    "SQLite (dev) / PostgreSQL (prod)",
                ],
            },
            {
                label: "Document Processing",
                items: ["pdfplumber (primary)", "pypdf (fallback)", "pdfminer.six", "python-docx"],
            },
        ],
        features: [
            {
                title: "ATS Scoring Engine",
                description:
                    "Analyzes resume against job description using LangChain LCEL + Groq. Returns structured AtsScoreAnalysis with overall_match_score, matched_skills, missing_experience, and actionable_advice — all validated via Pydantic @field_validator.",
            },
            {
                title: "AI Mock Interview",
                description:
                    "Full state-machine interview session engine. Generates 5 questions across 5 categories (Behavioral, System Design, DSA, ML/AI, Backend) at 3 difficulty levels. Evaluates answers, triggers contextual follow-ups, and produces a final scored breakdown.",
            },
            {
                title: "Skill Gap Analysis",
                description:
                    "Retrieves top-15 chunks from both resume and JD via ChromaDB similarity search, deduplicates, then passes combined context to LangChain gap analysis chain. Returns calibrated rubric scoring with improvement recommendations.",
            },
            {
                title: "Google OAuth + JWT",
                description:
                    "Full OAuth 2.0 PKCE flow with Authlib. Issues HS256 JWT with 24-hour expiry. Stateless token validation via FastAPI Depends() injection on every protected route.",
            },
        ],
    },

    "chromadb-dashboard": {
        slug: "chromadb-dashboard",
        title: "ChromaDB Dashboard",
        subtitle: "Zero-Dependency Browser Admin UI",
        tagline: "Open it in any browser. No npm, no build step, no backend — just pure web tech.",
        github_url: "https://github.com/sinuarlowbaby/chromadb-dashboard",
        tags: ["HTML5", "CSS3", "JavaScript", "ChromaDB", "Vector DB", "SPA"],
        accentColor: "#00d4aa",
        gradientFrom: "rgba(0,212,170,0.15)",
        gradientTo: "rgba(59,130,246,0.08)",
        overview:
            "ChromaDB Dashboard is a zero-dependency, browser-based admin UI (~60KB single HTML file) for managing and interacting with a live ChromaDB vector database. No npm install, no bundler, no backend server of its own — just open it in a browser. It talks directly to ChromaDB's REST API v2 using the native fetch() API.",
        highlights: [
            "Complete SPA in a single 60KB HTML file — zero build step, zero dependencies",
            "State-driven architecture: central global state object drives all renders (flux-like unidirectional flow)",
            "ChromaDB REST API v2 integration: collections CRUD, semantic vector query, metadata WHERE filtering",
            "Semantic vector query interface with cosine similarity score display",
            "CSS design system using custom properties (variables) for a consistent dark-mode theme",
            "Glassmorphism modals, micro-animations (CSS keyframes), responsive sidebar",
            "Demo mode with pre-seeded mock data for offline usage and live demonstrations",
            "JSON export for full dashboard state and individual collections",
        ],
        architecture:
            "Single HTML File (Browser) → Vanilla JS SPA [State Object → Render Functions → Event Handlers] → ChromaDB HTTP Server (REST API v2) [GET /collections, POST /collections/:id/query, POST /collections/:id/get]",
        techStack: [
            {
                label: "Frontend",
                items: [
                    "HTML5 (semantic elements)",
                    "Vanilla CSS3 (Grid, Flexbox, custom properties, animations)",
                    "ES6+ JavaScript (async/await, fetch API, template literals)",
                    "Google Fonts (JetBrains Mono + Syne)",
                ],
            },
            {
                label: "Database",
                items: ["ChromaDB (HNSW indexing, cosine/L2/IP similarity)", "ChromaDB REST API v2"],
            },
            {
                label: "Design Patterns",
                items: [
                    "Single-File Application",
                    "State-Driven SPA",
                    "Demo Mode (offline mock data)",
                    "Zero-Dependency Frontend",
                ],
            },
        ],
        features: [
            {
                title: "Semantic Vector Query",
                description:
                    "POST /api/v2/collections/:id/query with query_texts, n_results, and includes. ChromaDB converts text to embeddings internally and returns top-N results ranked by cosine similarity. Scores displayed as 1-distance.",
            },
            {
                title: "Metadata Filter Query",
                description:
                    "WHERE clause filtering using ChromaDB operators ($eq, $ne, $gt, $gte, $lt, $lte). Supports complex filters like { type: { $eq: 'skill' } } directly from the UI.",
            },
            {
                title: "Collection Management",
                description:
                    "Create, browse, and delete collections. Paginated document table with client-side full-text search, sort by name/count, and configurable page sizes (10/25/50).",
            },
            {
                title: "Demo Mode",
                description:
                    "Ships with built-in mock data (resume_chunks, job_descriptions, interview_qa, skills_taxonomy collections) so it works without a live ChromaDB server — perfect for demonstrations.",
            },
        ],
    },

    "oneide": {
        slug: "oneide",
        title: "OneIDE",
        subtitle: "Online Compiler & Coding Community",
        tagline: "Write, run, and share code in Python, Java, C, and C++ — all from your browser.",
        github_url: "https://github.com/sinuarlowbaby/OneIDE---Online_Compiler-",
        demo_url: "https://oneide.onrender.com",
        tags: ["Django", "Python", "PostgreSQL", "CodeMirror", "Gunicorn", "Bootstrap"],
        accentColor: "#f59e0b",
        gradientFrom: "rgba(245,158,11,0.15)",
        gradientTo: "rgba(157,92,255,0.08)",
        overview:
            "OneIDE is a full-stack, multi-language online IDE and coding community platform built with Django. It lets users write, run, save, and share code in Python, Java, C, and C++ — with no local setup required. The platform combines a real-time code execution environment with a social coding community including groups, peer-to-peer code sharing, a chat system, and an admin control dashboard.",
        highlights: [
            "Multi-language compiler supporting Python, Java, C, and C++ via CodeMirror editor + JDoodle/Judge0 APIs",
            "11 Django ORM models covering users, groups, membership, code storage, chat, P2P sharing, complaints, and feedback",
            "Role-based access control: admin, user, and blocked states with session-based routing",
            "Group collaboration system with full lifecycle: create, join-request workflow, member roles, group code sharing",
            "Peer-to-peer code sharing with bidirectional conversation tracking using Django Q objects",
            "Gmail SMTP email integration for automated password recovery flows",
            "Deployed on Render with Gunicorn WSGI, WhiteNoise static compression, and dj-database-url",
            "AJAX-based session management for seamless code transfer between compiler and save/share pages",
        ],
        architecture:
            "Browser (HTML/CSS/JS/Bootstrap) → Django Views (MVT — 6 modular view files) → Django ORM (11 models) → SQLite/PostgreSQL/MySQL → SMTP Email (Gmail) → Gunicorn WSGI → Render/Heroku",
        techStack: [
            {
                label: "Backend",
                items: ["Django 6.0 (MVT)", "Python 3.8+", "Gunicorn 23.0 (WSGI)", "WhiteNoise (static files)", "python-dotenv"],
            },
            {
                label: "Frontend",
                items: ["HTML5 + Bootstrap", "Vanilla CSS/JavaScript + jQuery", "CodeMirror (syntax highlighting)", "Django Template Language"],
            },
            {
                label: "Database",
                items: ["SQLite (development)", "PostgreSQL (production)", "MySQL (alternative)", "Django ORM + migrations"],
            },
            {
                label: "Auth & Features",
                items: [
                    "Django contrib.auth + OneToOneField profile",
                    "PBKDF2+SHA256 password hashing",
                    "Gmail SMTP (django.core.mail)",
                    "@never_cache + @login_required decorators",
                    "transaction.atomic() for safe registration",
                ],
            },
            {
                label: "Deployment",
                items: ["Render (live: oneide.onrender.com)", "Heroku", "Procfile + dj-database-url"],
            },
        ],
        features: [
            {
                title: "Multi-Language IDE",
                description:
                    "CodeMirror-powered editor with syntax highlighting for Python, Java, C, and C++. Code execution via JDoodle/Judge0 APIs. AJAX session endpoints store compiled code for seamless save-after-compile workflows.",
            },
            {
                title: "Group Collaboration",
                description:
                    "Create coding groups with photos, manage join-request workflows (Pending/Accepted/Rejected), assign member roles (admin/user), share code within groups, and leave/remove members.",
            },
            {
                title: "P2P Code Sharing",
                description:
                    "Peer-to-peer code sharing with multi-select recipients. Bidirectional conversation tracking using Django Q objects (FROMUSER→A, TOUSER→B OR vice versa). AJAX-powered read/unread status via @csrf_exempt endpoint.",
            },
            {
                title: "Admin Control Panel",
                description:
                    "Full admin dashboard: view/block/unblock users, search by name/email, manage example programs, reply to user complaints, and review feedback/ratings.",
            },
        ],
    },
};
