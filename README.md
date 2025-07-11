# 🧠 Quiz App – React + Spring Boot Full Stack Project

This is a full-stack Quiz Application built using **React (Vite)** for the frontend and **Spring Boot** for the backend. The app allows users to take subject-wise quizzes (Java, Python, JavaScript, etc.), view scores, access notes, and improve their performance through repeated practice.

---

## 📁 Project Structure

quiz_app/
├── frontend/ # React app built with Vite
└── backend/ # Spring Boot project (Maven or Gradle)

## 🚀 Features

### 🔹 Frontend (React + Vite)
- Responsive UI with subject-wise quizzes
- Multiple choice questions with timer
- Instant result with score, percentage, and feedback
- Notes and learning resources
- Login/register authentication flow
- Routing with React Router
- Data stored locally or fetched via API
- 

### 🔹 Backend (Spring Boot)
- RESTful APIs for fetching quiz questions and posting results
- Entity models for questions, subjects, and users
- CORS configuration for frontend integration
- JPA & Hibernate for database operations
- MySQL or PostgreSQL support
- Spring Security (optional for auth)

---


---

## 🚀 Features

### 🔷 **Frontend (React + Vite)**

- Responsive UI with subject-wise quizzes
- Multiple choice questions with timer
- Instant result with score, percentage, and feedback
- Notes and learning resources
- Login/register authentication flow
- Routing with React Router
- Data stored locally or fetched via API

### 🔷 **Backend (Spring Boot)**

- RESTful APIs for fetching quiz questions and posting results
- Entity models for questions, subjects, and users
- CORS configuration for frontend integration
- JPA & Hibernate for database operations
- MySQL or PostgreSQL support
- Spring Security (optional for authentication)

---

## ⚙️ Getting Started

### ✅ Prerequisites

- **Node.js** (v16+)
- **Java** 17 or later
- **Maven** or **Gradle**
- **Git**
- **MySQL** or **PostgreSQL** (optional)
- **IDE**: IntelliJ IDEA / VS Code

---

## 🖥️ Frontend Setup

```bash
cd frontend
npm install
npm run dev
cd backend
```


## 🖥️ Backend  Setup
```bash  If using Maven
./mvnw spring-boot:run

# Or if using Gradle
./gradlew bootRun
```
---

📦 Example Quiz Question Format (JSON)

{
  "questionText": "What is the size of an int in Java?",
  "options": ["2 bytes", "4 bytes", "8 bytes", "Depends on system"],
  "correctAnswer": "4 bytes",
  "subject": { "name": "java" }
}
---
💾 Database Schema (Entities)
| Entity                | Fields                                                      |
| --------------------- | ----------------------------------------------------------- |
| **Subject**           | `id`, `name`                                                |
| **QuizQuestion**      | `id`, `questionText`, `correctAnswer`, `options`, `subject` |
| **User** *(optional)* | `id`, `username`, `password`                                |

---

🛠️ Technologies Used
