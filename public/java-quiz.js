let currentQuestionIndex = 0;
let questions = [];
let correctAnswers = 0;
let totalQuestions = 0;


// Fetch questions from API
async function fetchQuestions() {
    try {
        const apiUrl = 'https://quiz-latest-3.onrender.com';


        const response = await fetch(`${apiUrl}/api/questions`);



        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        questions = await response.json();
        totalQuestions = questions.length;
        document.getElementById('total-questions').textContent = totalQuestions;
        displayQuestion();
    } catch (error) {
        console.error('Error fetching questions:', error);
        document.getElementById('question-text').textContent = "Failed to load questions. Please try again.";
    }
}

// Display a single question
function displayQuestion() {
    if (questions.length === 0) return;

    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const currentQuestion = questions[currentQuestionIndex];

    questionText.textContent = currentQuestion.questionText;
    optionsContainer.innerHTML = '';

    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.className = 'option';
        button.onclick = () => checkAnswer(option);
        optionsContainer.appendChild(button);
    });

    document.getElementById('current-question').textContent = currentQuestionIndex + 1;
}

// Handle answer selection
function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];

    if (selectedOption === currentQuestion.correctAnswer) {
        correctAnswers++;
    }

    nextQuestion();
}

// Move to the next question or end quiz
function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    } else {
        clearInterval(globalTimerInterval); // Stop global timer if quiz ends early
        localStorage.setItem('quizScore', correctAnswers);
        localStorage.setItem('totalQuestions', totalQuestions);
        window.location.href = 'result.html';
    }
}

// Handle end of quiz due to timeout
function endQuiz() {
    alert("Time's up! Submitting your quiz...");
    document.getElementById("next-button").disabled = true;
    localStorage.setItem('quizScore', correctAnswers);
    localStorage.setItem('totalQuestions', totalQuestions);
    window.location.href = 'result.html';
}

// Global timer (16 seconds total)
let totalTime = 16;
let globalTimerInterval;

function startGlobalTimer() {
    const timerDisplay = document.getElementById("timer");
    timerDisplay.textContent = totalTime;

    globalTimerInterval = setInterval(() => {
        totalTime--;
        timerDisplay.textContent = totalTime;

        if (totalTime <= 0) {
            clearInterval(globalTimerInterval);
            endQuiz();
        }
    }, 1000);
}

// Start everything on load
window.onload = async () => {
    await fetchQuestions();
    startGlobalTimer();
};