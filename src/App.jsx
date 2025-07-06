import React from 'react';
import './style.css';

function App() {
  const startQuiz = (quizType) => {
    alert(`Starting ${quizType.charAt(0).toUpperCase() + quizType.slice(1)} Quiz!`);
    // Use React Router or window.location.href
    window.location.href = `${quizType}-quiz.html`;
    window.startQuiz = startQuiz;
    
  };
 


  return (
    <div>
      {/* Landing Page */}
      <section className="landing-page">
        <div className="wrapper">
          <div className="flex-content">
            <h1 className="vacation-heading">Welcome To Master Quiz</h1>
            <a href="#quiz-packages" className="btn">Start Now</a>
          </div>
        </div>
      </section>

      {/* Header */}
      <header className="quiz-header" id="quiz-header">
        <h1 className="heading">Master Quiz</h1>
      </header>

      {/* Navigation */}
      <nav className="main-nav">
        <a href="#">Home</a>
        <a href="#quiz-packages">Quiz</a>
        <a href="#Performer">Top Performers</a>
        <a href="#notes">Notes</a>
      </nav>

      {/* Quiz Packages Section */}
      <section className="quiz-packages-section" id="quiz-packages">
        <h1 className="quiz-heading">Coding Quiz</h1>
        <p className="quiz-text">
          Our quizzes cover everything from Java, Python, JavaScript to .NET. Ready to challenge yourself?
        </p>
        <div className="package-wrapper">
          {[
            { name: 'Java', price: 500, img: '/images/java.jpg' },
            { name: 'Python', price: 400, img: '/images/python.jpg' },
            { name: 'JavaScript', price: 300, img: '/images/js.png' },
            { name: '.Net', price: 200, img: '/images/net.png' }
          ].map(({ name, price, img }) => (
            <div className="package-card" key={name}>
              <img src={img} alt={name} />
              <p className="card-heading">{name}</p>
              <p className="card-text">Practice MCQs on {name}</p>
              <p className="card-heading">{price}₹</p>
              <button className="btn" onClick={() => startQuiz(name.toLowerCase())}>Take Quiz</button>
            </div>
          ))}
        </div>
      </section>

      {/* Top Performers Section */}
      <section className="Performer-quiz-section" id="Performer">
        <h1 className="quiz-heading">Top Performer</h1>
        <p className="quiz-text">
          Our top performers are the brightest minds who consistently excel in our quizzes.
        </p>
        <div className="image-card">
          {['m1.jpeg', 'm2.jpg', 'm3.jpg', 'm4.jpg', 'm5.jpg', 'm6.jpg'].map((img, i) => (
            <img src={`/images/${img}`} alt={`Top Performer ${i + 1}`} key={i} />
          ))}
        </div>
      </section>

      {/* Notes Section */}
      <section className="notes-section" id="notes">
        <h1 className="quiz-heading">Subject Notes</h1>
        <p className="quiz-text">
          Learn from curated notes covering key concepts in programming, frameworks and core subjects.
        </p>
        <div className="notes-div">
          {['java.jpg', 'compiler.png', 'spring.png', 'react.png', 'dev.jpg', 'python.jpg'].map((img, i) => (
            <div className="notes-wrapper" key={i}>
              <img src={`/images/${img}`} alt={`Note ${i + 1}`} />
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-section">
        <small>All Rights Reserved</small>
        <br />
        <small>
          Developed & Maintained By <a href="https://www.youtube.com/@GenieAshwani" target="_blank" rel="noreferrer">Genie Ashwani</a>
        </small>
      </footer>
    </div>
  );
}

export default App;
