# 🚀 DevOps Dashboard

A full-stack application built with **FastAPI** (backend) and **React** (frontend) to monitor and visualize DevOps service statuses, logs, and CI/CD health.

---

## 🧩 Features

- ✅ JWT-based authentication
- 📡 Service health/status display
- 📜 Log viewing by service
- 🔄 CI/CD pipeline status
- ☁️ Deployable on **Amazon Lightsail**

---

## 📁 Project Structure

devops-dashboard/
├── client/
│ ├── src/
│   ├── api/
│       ├── cicd.ts
│       ├── logs.ts
│       ├── services.ts
│   ├── components/
│       ├── CICDStatus.tsx
│       ├── LogViewer.tsx
│       ├── ProtectedRoute.tsx
│       ├── Sidebar.ts
│   ├── pages/
│       ├── Dashboard.tsx
│       ├── Login.tsx
│   ├── App.css
│   └── App.tsx
│   └── index.css
│   └── main.tsx
├── server/
│ └── routers/
│       ├── auth.py
│       ├── ci_cd.py
│       ├── logs.py
│       ├── services.py
│ └── auth.py
│ └── main.py
│ └── requirements.txt
└── README.md


---

## 🛠️ Tech Stack

- **Frontend**: React, TypeScript, TailwindCSS
- **Backend**: FastAPI, Pydantic
- **Auth**: OAuth2 + JWT
- **Deployment**: Amazon S3 + Amazon Lightsail

---

## ⚙️ Local Setup

### 🔧 Backend (FastAPI)

```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --host 0.0.0.0 --port 8000 --reload
```

### 🔧 Frontend (React)

```bash
cd frontend
npm install
npm run dev
```

