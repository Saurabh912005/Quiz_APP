import React from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Login from './components/LoginForm';
import Register from './components/RegisterForm';
import MainQuizPage from './components/mainQuiz';
import './components/Navbar.css';
import './components/Homepage.css';
import ProtectedRoute from './components/ProtectedRoute';
import { useAuth } from './context/AuthContext';
// Homepage Component
function Homepage() {
  const navigate = useNavigate();

  const handleStartQuiz = () => {
    navigate('/mainQuiz');
  };

  return (
    <div className="homepage">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Master Quiz</h1>
          <p className="hero-subtitle">
            Test your knowledge with our comprehensive quiz platform.
            Challenge yourself and track your progress!
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={handleStartQuiz}>
              Start Quiz
            </button>
            <Link to="/register" className="btn btn-secondary">
              Sign Up Free
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <div className="quiz-illustration">
            <div className="quiz-card">
              <div className="question-mark">?</div>
              <div className="options">
                <div className="option"></div>
                <div className="option"></div>
                <div className="option"></div>
                <div className="option"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2 className="section-title">Why Choose Master Quiz?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🧠</div>
              <h3>Smart Questions</h3>
              <p>Carefully crafted questions to test your knowledge across various topics</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Track Progress</h3>
              <p>Monitor your performance and see how you improve over time</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🏆</div>
              <h3>Achievements</h3>
              <p>Earn badges and unlock new levels as you master different subjects</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Fast & Fun</h3>
              <p>Quick quizzes that are both educational and entertaining</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Ready to Test Your Knowledge?</h2>
          <p>Join thousands of learners who are already improving their skills</p>
          <div className="cta-buttons">
            <Link to="/register" className="btn btn-primary">
              Get Started Now
            </Link>
            <Link to="/login" className="btn btn-outline">
              Already a Member?
            </Link>
            <button onClick={handleStartQuiz} className="btn btn-primary">
              Start Quiz
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

// Navbar Component

function Navbar() {
  const navigate = useNavigate();
  const { user, logout } = useAuth(); // use auth context

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Master Quiz
        </Link>
        <div className="navbar-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/mainQuiz" className="nav-link">Quiz</Link>
          {user ? (
            <>
              <span className="nav-link">Hi, {user.name || "User"}</span>
              <button className="nav-link logout-btn" onClick={logout}>Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="nav-link">Login</Link>
              <Link to="/register" className="nav-link btn-register">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
// Main App Component
function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/mainQuiz"
          element={
            <ProtectedRoute>
              <MainQuizPage />
            </ProtectedRoute>
          }
        />
        
      </Routes>
    </div>
  );
}

export default App;
