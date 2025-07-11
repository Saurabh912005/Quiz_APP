let currentQuestionIndex = 0;
let questions = [];
let correctAnswers = 0;
let totalQuestions = 0;
let quizSubject = ''; // 🆕 Subject stored globally

// Fetch questions from API based on subject
async function fetchQuestions() {
  try {
    const apiUrl = 'https://quiz-backend-5-s0b1.onrender.com';

    const urlParams = new URLSearchParams(window.location.search);
    quizSubject = urlParams.get('subject')?.toLowerCase(); // 🆕 Save subject

    if (!quizSubject) {
      throw new Error("Subject not specified in URL.");
    }

    const response = await fetch(`${apiUrl}/api/subjects/${quizSubject}`);
    if (!response.ok) throw new Error('Failed to fetch questions');

    const data = await response.json();
    questions = data.questions;
    totalQuestions = questions.length;

    if (!questions || totalQuestions === 0) {
      document.getElementById('question-text').textContent = "No questions available for this subject.";
      document.getElementById('options-container').innerHTML = "";
      document.getElementById('next-button').disabled = true;
      return;
    }

    document.getElementById('total-questions').textContent = totalQuestions;
    displayQuestion();
  } catch (error) {
    console.error('Error fetching questions:', error);
    document.getElementById('question-text').textContent = "Failed to load questions. Please try again.";
  }
}

// Display a single question
function displayQuestion() {
  if (questions.length === 0 || !questions[currentQuestionIndex]) return;

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

// Save and navigate to result
function submitQuiz() {
  localStorage.setItem('quizScore', correctAnswers);
  localStorage.setItem('totalQuestions', totalQuestions);
  localStorage.setItem('quizSubject', quizSubject); // ✅ Set subject
  window.location.href = 'result.html';
}

// Move to next question or end quiz
function nextQuestion() {
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    displayQuestion();
  } else {
    clearInterval(globalTimerInterval);
    submitQuiz();
  }
}

// End quiz on timeout
function endQuiz() {
  alert("Time's up! Submitting your quiz...");
  document.getElementById("next-button").disabled = true;
  submitQuiz(); // ✅ Use submitQuiz for consistent storage
}

// Timer
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

// On page load
window.onload = async () => {
  await fetchQuestions();
  startGlobalTimer();
};
