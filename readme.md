# 🚀 DevOps Dashboard

A full-stack application built with **FastAPI** (backend) and **React** (frontend) to monitor and visualize DevOps service statuses, logs, and CI/CD health.

Result: http://devv-ops.s3-website.eu-north-1.amazonaws.com/dashboard

---

## 🧩 Features

- ✅ JWT-based authentication
- 📡 Service health/status display
- 📜 Log viewing by service
- 🔄 CI/CD pipeline status
- ☁️ Deployable on **Amazon S3 and Amazon Lightsail**

---

## 📁 Project Structure

devops-dashboard/
├── client/
│ ├── src/
│ │ ├── api/
│ │ │ ├── cicd.ts
│ │ │ ├── logs.ts
│ │ │ └── services.ts
│ │ ├── components/
│ │ │ ├── CICDStatus.tsx
│ │ │ ├── LogViewer.tsx
│ │ │ ├── ProtectedRoute.tsx
│ │ │ └── Sidebar.ts
│ │ ├── pages/
│ │ │ ├── Dashboard.tsx
│ │ │ └── Login.tsx
│ │ ├── App.css
│ │ ├── App.tsx
│ │ ├── index.css
│ │ └── main.tsx
├── server/
│ ├── routers/
│ │ ├── auth.py
│ │ ├── ci_cd.py
│ │ ├── logs.py
│ │ └── services.py
│ ├── main.py
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
cd server
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --host 0.0.0.0 --port 8000 --reload
```

### 🔧 Frontend (React)

```bash
cd client
npm install
npm run dev
```

## ☁️ Deploy FE to S3

```bash
cd client
npm run build
aws s3 sync dist/ s3://devv-ops 
```

## ☁️ Deploy Backend to Amazon Lightsail

1. Create Lightsail Instance
Choose Ubuntu blueprint

Open networking ports: HTTP (80), HTTPS (443), and custom if needed

Add static IP for stability

2. Connect via SSH
```bash
ssh -i your-key.pem ubuntu@52.47.113.237
```

3. Install System Packages
```bash
sudo apt update && sudo apt upgrade -y
sudo apt install nginx python3-pip nodejs npm
```

4. Deploy Backend

```bash
git clone <your-repo-url>
cd server
pip3 install -r requirements.txt
uvicorn main:app --host 0.0.0.0 --port 8000
or nohup uvicorn main:app --host 0.0.0.0 --port 8000 &
```




