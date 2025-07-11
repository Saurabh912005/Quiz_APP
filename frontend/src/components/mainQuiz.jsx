import React from 'react';
import './style.css';

function MainQuiz() {
    const startQuiz = (subjectName) => {
        // Redirect to common quiz.html with subject in query param
        window.location.href = `/quiz.html?subject=${encodeURIComponent(subjectName)}`;
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
                <a href="/">Home</a>
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
                        { name: 'Java', img: '/images/java.jpg' },
                        { name: 'Python', img: '/images/python.jpg' },
                        { name: 'JavaScript', img: '/images/js.png' },
                        { name: '.Net', img: '/images/net.png' }
                    ].map(({ name, price, img }) => (
                        <div className="package-card" key={name}>
                            <img src={img} alt={name} />
                            <p className="card-heading">{name}</p>
                            <p className="card-text">Practice MCQs on {name}</p>
                            <p className="card-heading">{price}</p>
                            <button
                                className="btn"
                                onClick={() => startQuiz(name.toLowerCase())} // Send subject as lowercase to match backend
                            >
                                Take Quiz
                            </button>
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
                    {[
                        { img: 'java.jpg', file: 'java.pdf' },
                        { img: 'compiler.png', file: 'compiler.pdf' },
                        { img: 'spring.png', file: 'spring.pdf' },
                        { img: 'react.png', file: 'react.pdf' },
                        { img: 'dev.jpg', file: 'dev.pdf' },
                        { img: 'python.jpg', file: 'python.pdf' },
                    ].map(({ img, file }, i) => (
                        <div className="notes-wrapper" key={i}>
                            <a href={`/assets/notes/${file}`} download>
                                <img src={`/images/${img}`} alt={`Note ${i + 1}`} />
                            </a>
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

export default MainQuiz;
