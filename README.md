# 🏁 Resolution Goal Tracking Application

A full-stack MERN application that helps users track, visualize, and manage their personal goals with real-time updates, secure authentication, and persistent state management.

## 🚀 Features

- ✅ User Registration & Login (JWT Auth)
- ✅ Create, update, delete personal goals
- ✅ Visualize goal progress
- ✅ Redux-powered state management
- ✅ Responsive and modern UI using Tailwind CSS
- ✅ Secure backend with protected routes

## 🛠️ Tech Stack

### Frontend:
- React
- TypeScript
- Redux Toolkit
- Tailwind CSS
- Axios

### Backend:
- Node.js
- Express
- MongoDB
- Mongoose
- JWT (JSON Web Tokens)
- Bcrypt

## 📦 Installation

### Clone the repository

```bash
git clone https://github.com/Arunr30/resolution-goal-tracker.git
cd resolution-goal-tracker


cd backend
npm install
npm run dev

PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret

cd ../my-app
npm install
npm run dev


✨ Highlights
Used Redux to eliminate prop drilling and reduce state-related bugs by ~40%.

All API routes secured using JWT.

Real-time UI updates on goal completion.

Goal data persists across sessions with MongoDB.

🧠 Future Improvements
Add reminders via email notifications

Google OAuth integration

Share goals with friends/team
