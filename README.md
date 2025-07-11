## 🖥️ Project Live Link
```
https://creative-lamington-9c8b92.netlify.app/
```
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
---

## 🛠️ Technologies Used

### 💻 Frontend

| ⚙️ Technology     | 🔍 Description             |
|------------------|----------------------------|
| ⚛️ React         | JavaScript UI library       |
| ⚡ Vite           | Fast build tool & dev server|
| 🧠 JavaScript    | Core scripting language     |
| 🎨 Tailwind CSS  | Utility-first CSS framework |
| 🧭 React Router  | SPA routing solution        |

---

### 🖥️ Backend

| ⚙️ Technology       | 🔍 Description              |
|---------------------|-----------------------------|
| ☕ Spring Boot       | Java backend framework       |
| 🧩 JPA & Hibernate  | ORM for database access      |
| 🐘 PostgreSQL / 🐬 MySQL | Relational database support   |
| 🔐 Spring Security   | Authentication & auth (optional) |

---

### 🧰 Tools & IDEs

| 🧪 Tool         | 🔍 Use Case                 |
|----------------|-----------------------------|
| 🧬 Git          | Version control             |
| 🧱 Postman      | API testing & debugging     |
| 🧑‍💻 VS Code     | Frontend code editor        |
| 🛠️ IntelliJ IDEA | Java/Spring Boot development |



## 📸 Screenshots

### 🧩 Home Interface
<img width="800" alt="Quiz Interface" src="https://github.com/user-attachments/assets/dd78f051-42df-4d20-ad85-e275fc061654" />

### 🔐 Login Page
<img width="1440" height="900" alt="Screenshot 2025-07-11 at 2 35 13 PM" src="https://github.com/user-attachments/assets/72d4d40b-9467-4643-88c8-f7c28e8de2e1" />


### 📚 Notes Section
<img width="2880" height="1800" alt="image" src="https://github.com/user-attachments/assets/46fd5117-5f25-4f96-8cef-cb375a34815c" />




### 🧩 Quiz Interface
<img width="1440" height="900" alt="Screenshot 2025-07-11 at 2 29 28 PM" src="https://github.com/user-attachments/assets/83b93ef6-bfe7-4a58-8eb8-af5df8a8022c" />


### ❓ Quiz Questions Page
<img width="1440" height="900" alt="Screenshot 2025-07-11 at 2 29 37 PM" src="https://github.com/user-attachments/assets/9f28c06a-899c-4133-95d4-aeadf5d79a26" />


### 🧮 Result Page
<img width="1440" height="900" alt="Screenshot 2025-07-11 at 2 29 52 PM" src="https://github.com/user-attachments/assets/dae3ed74-6db4-45f6-881f-a480d92f0608" />




