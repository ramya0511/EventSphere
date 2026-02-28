# 🎉 EventSphere – Containerized Event Management Platform

EventSphere is a **Full Stack Event Management System** deployed using **DevOps practices** on AWS Cloud.

The system enables administrators to manage events while students can view and register for events through a role-based authentication system.

---

## 🌍 Live Demo

🔗 Live Application:

http://43.205.212.67/login.html

### Demo Credentials

#### 👨‍💼 Admin
Username: admin  
Password: admin123

#### 👤 Student
Username: student  
Password: 1234

---

## 📌 Project Objective

College events are often handled manually which leads to poor tracking and management.

EventSphere solves this problem by providing:

- Centralized event management
- Online registration system
- Role-based dashboards
- Cloud deployment
- Containerized production environment

---

## 🏗️ System Architecture

User Browser
↓
AWS EC2 Cloud Server
↓
Nginx Reverse Proxy (Docker Container)
↓
Node.js Backend API (Docker Container)
↓
Event Data Storage (In-Memory)

---

## 🧱 Technology Stack

### Frontend
- HTML
- CSS
- JavaScript

### Backend
- Node.js
- Express.js

### DevOps & Deployment
- Docker
- Docker Compose
- Nginx Reverse Proxy
- AWS EC2 (Ubuntu Server)
- Git & GitHub

---

## 🔐 Features

### 👨‍💼 Admin Portal
- Login authentication
- Create events
- Delete events
- Manage event dashboard
- View all events

### 👤 Student Portal
- Secure login
- View available events
- Register for events

### 🔑 Authentication
- Role-based login system
- Admin / Student access control
- Protected routes

---

## 📦 Docker Usage

Docker containerizes the application into isolated services:

### Backend Container
Runs:
- Node.js server
- REST API endpoints

### Nginx Container
Handles:
- Frontend hosting
- Reverse proxy routing
- API request forwarding

### Benefits
- Consistent deployment
- Environment isolation
- Easy scalability
- Production-ready setup

---

## ☁️ AWS Deployment

The application is hosted on an **AWS EC2 instance**.

AWS provides:
- Public internet access
- Cloud infrastructure
- Firewall configuration (Security Groups)
- 24/7 server availability

---

## 📂 Project Structure

EventSphere/
│
├── backend/
│ ├── server.js
│ └── Dockerfile
│
├── frontend/
│ ├── login.html
│ ├── admin.html
│ └── index.html
│
├── nginx/
│ └── default.conf
│
├── docker-compose.yml
└── README.md

---

## ⚙️ Local Setup Instructions

### 1️⃣ 
```bash
git clone https://github.com/ramya0511/EventSphere.git
cd EventSphere

### 2️⃣ Run Using Docker
docker-compose up -d --build

### 3️⃣ Access Application
http://43.205.212.67/login.html

🔄️ Deployment Workflow

VS Code
   ↓
GitHub Repository
   ↓
AWS EC2 Server
   ↓
Docker Containers
   ↓
Live Application


✅Update Deployment:

Local Machine:
git add .
git commit -m "update"
git push


✅AWS Server:
git pull 
docker-compose down
docker-compose up -d --build


🧠 DevOps Concepts Implemented
• Containerization using Docker
• Reverse Proxy Architecture
• Cloud Deployment (AWS EC2)
• Networking & Port Exposure
• Role-Based Access Control
• Production Deployment Workflow

⚠️ Database Information
Currently, EventSphere uses in-memory storage inside the Node.js server:
• Events stored temporarily
• Data resets when server restarts

Future improvement:
• MongoDB integration for persistent storage

🚀 Future Enhancements:
• MongoDB database integration
• JWT secure authentication
• User signup system
• Event analytics dashboard
• Event image upload
• HTTPS domain setup
• CI/CD auto deployment pipeline

👩‍💻Author
Developed as a DevOps Milestone Project demonstrating full-stack development and production deployment using cloud and container technologies.