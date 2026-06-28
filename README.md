# 🎓 StudyStuds - Full Stack EdTech Platform

<p align="center">
  <img src="src/assets/Images/Main.png" alt="StudyStuds Banner" width="100%">
</p>

<p align="center">
A production-ready EdTech platform built with the MERN stack that enables instructors to create, manage and sell courses while providing students with an engaging learning experience.
</p>

<p align="center">

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-22-339933?logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-Backend-000000?logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white)
![Redis](https://img.shields.io/badge/Redis-DC382D?logo=redis&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white)

</p>

---

## 🚀 Live Demo

**https://study-studs.vercel.app/**

---

# 📖 Overview

StudyStuds is a scalable full-stack EdTech platform where instructors can create and publish courses while students can browse, purchase and consume educational content.

The application follows a modern client-server architecture with secure authentication, media storage, payment processing, analytics, caching and containerized deployment.

## ✨ Recent Improvements

- 🔷 Migrated the complete project from **JavaScript → TypeScript**
- 🐳 Dockerized backend
- ⚡ Redis caching
- 🔒 JWT Authentication
- ☁️ Cloudinary integration
- 💳 Razorpay payment gateway

---

# ✨ Features

## Student

- User Registration & Login
- OTP Email Verification
- Forgot Password
- Browse Courses
- Purchase Courses
- Course Player
- Progress Tracking
- Rate Courses
- User Dashboard
- Profile Management

## Instructor

- Instructor Dashboard
- Create/Edit/Delete Courses
- Upload Videos & Images
- Analytics Dashboard
- Revenue Insights
- Profile Management

## Security

- JWT Authentication
- Role Based Authorization
- Password Hashing (bcrypt)
- Protected Routes

---

# 🛠 Tech Stack

## Frontend

- React
- TypeScript
- Redux Toolkit
- Tailwind CSS
- React Router
- Axios

## Backend

- Node.js
- Express.js
- TypeScript
- MongoDB
- Mongoose
- Redis
- Docker

## Third Party Services

- Cloudinary
- Razorpay
- Nodemailer

---

# 🏗 Architecture

```text
                React + TypeScript
                       │
                 REST APIs (Axios)
                       │
                Express + Node.js
                       │
      ┌────────────┬──────────────┐
      │            │              │
   MongoDB      Redis       Cloudinary
(Database)     (Cache)     (Media)

                 Razorpay
                 (Payments)
```

---

# ⚡ Engineering Highlights

- Migrated 140+ source files from JavaScript to TypeScript.
- Role-based authentication.
- RESTful API architecture.
- Redis caching.
- Dockerized backend.
- Cloudinary media storage.
- Razorpay payment integration.
- Instructor analytics dashboard.
- Responsive UI built with Tailwind CSS.

---

# 📂 Project Structure

```text
StudyStuds
│
├── client
│   ├── components
│   ├── pages
│   ├── redux
│   ├── services
│   ├── hooks
│   └── utils
│
├── server
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── services
│   └── utils
│
└── docker-compose.yml
```

---

# 📸 Screenshots

## Home

![Home](src/assets/Images/Main.png)

> Add more screenshots:
>
> - Dashboard
> - Course Player
> - Checkout
> - Analytics
> - Instructor Dashboard

---

# 🔧 Installation

```bash
git clone https://github.com/Shantanu-121/StudyStuds.git
cd StudyStuds
```

### Install Frontend

```bash
cd client
npm install
```

### Install Backend

```bash
cd ../server
npm install
```

---

# ⚙️ Environment Variables

## Client

```env
REACT_APP_BASE_URL=
REACT_APP_RAZORPAY_KEY=
```

## Server

```env
PORT=
DB_URL=
JWT_SECRET=

MAIL_HOST=
MAIL_USER=
MAIL_PASS=

CLOUD_NAME=
API_KEY=
API_SECRET=

RAZORPAY_KEY=
RAZORPAY_SECRET=

REDIS_URL=
```

---

# ▶️ Run Locally

Frontend

```bash
npm run dev
```

Backend

```bash
npm run dev
```

---

# 🐳 Docker

```bash
docker compose up --build
```

---

# 🔮 Future Enhancements

- Course Certificates
- Wishlist
- Discussion Forum
- Admin Dashboard
- Search & Filters
- AI Course Recommendations
- GitHub Actions CI/CD
- Unit & Integration Testing

---

# 👨‍💻 Author

**Shantanu Singh**

- GitHub: https://github.com/Shantanu-121
- LinkedIn: https://www.linkedin.com/in/shantanu-singh-/

---

⭐ **If you found this project useful, please consider giving it a star!**
