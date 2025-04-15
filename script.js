// Quiz Questions (25 total)
const quizData = [
  {
      question: "1. What does HTML stand for?",
      options: [
          "Hyper Text Markup Language",
          "Hyperlinks and Text Markup Language",
          "Home Tool Markup Language",
          "Hyper Transfer Markup Language"
      ],
      correctAnswer: "Hyper Text Markup Language"
  },
  {
      question: "2. Which HTML element is used for the largest heading?",
      options: ["<h1>", "<heading>", "<h6>", "<head>"],
      correctAnswer: "<h1>"
  },
  {
      question: "3. What is the correct HTML element for inserting a line break?",
      options: ["<br>", "<lb>", "<break>", "<line>"],
      correctAnswer: "<br>"
  },
  {
      question: "4. Which HTML attribute is used to define inline styles?",
      options: ["class", "style", "font", "styles"],
      correctAnswer: "style"
  },
  {
      question: "5. Which HTML element is used to define the structure of an HTML document?",
      options: ["<style>", "<script>", "<!DOCTYPE>", "<meta>"],
      correctAnswer: "<!DOCTYPE>"
  },
  {
      question: "6. Which HTML element is used to display a scalar measurement within a range?",
      options: ["<gauge>", "<range>", "<measure>", "<meter>"],
      correctAnswer: "<meter>"
  },
  {
      question: "7. What is the correct HTML for creating a hyperlink?",
      options: [
          "<a href='http://example.com'>Example</a>",
          "<a url='http://example.com'>Example</a>",
          "<a name='http://example.com'>Example</a>",
          "<a>http://example.com</a>"
      ],
      correctAnswer: "<a href='http://example.com'>Example</a>"
  },
  {
      question: "8. Which HTML element is used to specify a header for a document or section?",
      options: ["<header>", "<head>", "<heading>", "<top>"],
      correctAnswer: "<header>"
  },
  {
      question: "9. Which HTML element is used to define emphasized text?",
      options: ["<em>", "<i>", "<strong>", "<b>"],
      correctAnswer: "<em>"
  },
  {
      question: "10. Which HTML element is used to define navigation links?",
      options: ["<nav>", "<navigate>", "<navigation>", "<links>"],
      correctAnswer: "<nav>"
  },
  {
      question: "11. Which HTML element is used to define a footer for a document or section?",
      options: ["<bottom>", "<footer>", "<foot>", "<section>"],
      correctAnswer: "<footer>"
  },
  {
      question: "12. Which HTML element is used to play video files?",
      options: ["<media>", "<video>", "<movie>", "<play>"],
      correctAnswer: "<video>"
  },
  {
      question: "13. Which HTML element is used to define a table row?",
      options: ["<td>", "<tr>", "<th>", "<table-row>"],
      correctAnswer: "<tr>"
  },
  {
      question: "14. Which HTML element is used to define a drop-down list?",
      options: ["<list>", "<dropdown>", "<select>", "<input type='dropdown'>"],
      correctAnswer: "<select>"
  },
  {
      question: "15. Which HTML element is used to define a paragraph?",
      options: ["<para>", "<p>", "<paragraph>", "<text>"],
      correctAnswer: "<p>"
  },
  {
      question: "16. Which HTML element is used to define a clickable button?",
      options: ["<button>", "<click>", "<input type='button'>", "<btn>"],
      correctAnswer: "<button>"
  },
  {
      question: "17. Which HTML attribute specifies an alternate text for an image?",
      options: ["title", "src", "alt", "longdesc"],
      correctAnswer: "alt"
  },
  {
      question: "18. Which HTML element is used to define a section in a document?",
      options: ["<div>", "<section>", "<block>", "<area>"],
      correctAnswer: "<section>"
  },
  {
      question: "19. Which HTML element is used to define a list item?",
      options: ["<item>", "<li>", "<listitem>", "<dl>"],
      correctAnswer: "<li>"
  },
  {
      question: "20. Which HTML element is used to define the title of a document?",
      options: ["<meta>", "<title>", "<head>", "<header>"],
      correctAnswer: "<title>"
  },
  {
      question: "21. Which HTML element is used to define a container for SVG graphics?",
      options: ["<graphics>", "<svg>", "<canvas>", "<draw>"],
      correctAnswer: "<svg>"
  },
  {
      question: "22. Which HTML element is used to define a thematic break?",
      options: ["<break>", "<hr>", "<line>", "<separator>"],
      correctAnswer: "<hr>"
  },
  {
      question: "23. Which HTML element is used to define a header cell in a table?",
      options: ["<td>", "<th>", "<header>", "<table-header>"],
      correctAnswer: "<th>"
  },
  {
      question: "24. Which HTML element is used to define a description list?",
      options: ["<dl>", "<list>", "<ul>", "<ol>"],
      correctAnswer: "<dl>"
  },
  {
      question: "25. Which HTML element is used to define superscript text?",
      options: ["<sup>", "<super>", "<high>", "<top>"],
      correctAnswer: "<sup>"
  }
];

// DOM Elements
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const nextBtn = document.getElementById("next-btn");
const resultsContainer = document.getElementById("results-container");
const quizContent = document.getElementById("quiz-content");
const introScreen = document.getElementById("intro-screen");
const startBtn = document.getElementById("start-btn");
const scoreElement = document.getElementById("score");
const currentQuestionElement = document.getElementById("current-question");
const totalQuestionsElement = document.getElementById("total-questions");
const restartBtn = document.getElementById("restart-btn");
const scoreMessageElement = document.getElementById("score-message");
const progressContainer = document.getElementById("progress-container");

// Quiz State
let currentQuestionIndex = 0;
let score = 0;
let selectedOption = null;

// Initialize Quiz
function initQuiz() {
  totalQuestionsElement.textContent = quizData.length;
  quizContent.classList.add("hidden");
  resultsContainer.classList.add("hidden");
  introScreen.classList.remove("hidden");
  progressContainer.classList.add("hidden");
}

// Display Question
function showQuestion() {
  currentQuestionElement.textContent = currentQuestionIndex + 1;
  const currentQuestion = quizData[currentQuestionIndex];
  questionText.textContent = currentQuestion.question;
  optionsContainer.innerHTML = "";

  currentQuestion.options.forEach(option => {
      const optionElement = document.createElement("div");
      optionElement.classList.add("option");
      optionElement.textContent = option;
      optionElement.addEventListener("click", () => selectOption(optionElement, option));
      optionsContainer.appendChild(optionElement);
  });

  nextBtn.disabled = true;
}

// Select Option
function selectOption(optionElement, option) {
  const options = document.querySelectorAll(".option");
  options.forEach(opt => {
      opt.classList.remove("selected");
      opt.style.pointerEvents = "none";
  });

  optionElement.classList.add("selected");
  selectedOption = option;
  nextBtn.disabled = false;
}

// Next Question
function nextQuestion() {
  const currentQuestion = quizData[currentQuestionIndex];
  const options = document.querySelectorAll(".option");
  
  options.forEach(option => {
      if (option.textContent === currentQuestion.correctAnswer) {
          option.classList.add("correct");
      } else if (option.textContent === selectedOption && selectedOption !== currentQuestion.correctAnswer) {
          option.classList.add("incorrect");
      }
  });

  if (selectedOption === currentQuestion.correctAnswer) {
      score++;
  }

  currentQuestionIndex++;
  if (currentQuestionIndex < quizData.length) {
      setTimeout(() => {
          selectedOption = null;
          showQuestion();
      }, 1000);
  } else {
      setTimeout(showResults, 1000);
  }
}

// Show Results
function showResults() {
  quizContent.classList.add("hidden");
  resultsContainer.classList.remove("hidden");
  scoreElement.textContent = score;

  const percentage = (score / quizData.length) * 100;
  if (percentage >= 80) {
      scoreMessageElement.textContent = "Exceptional! You've earned PSA HTML Certification with distinction!";
  } else if (percentage >= 70) {
      scoreMessageElement.textContent = "Congratulations! You've passed the PSA HTML Certification!";
  } else if (percentage >= 50) {
      scoreMessageElement.textContent = "Good effort! Review the material and try again.";
  } else {
      scoreMessageElement.textContent = "Keep studying! We recommend reviewing HTML fundamentals before retaking.";
  }
}

// Event Listeners
startBtn.addEventListener("click", () => {
  introScreen.classList.add("hidden");
  quizContent.classList.remove("hidden");
  progressContainer.classList.remove("hidden");
  showQuestion();
});

nextBtn.addEventListener("click", nextQuestion);

restartBtn.addEventListener("click", () => {
  currentQuestionIndex = 0;
  score = 0;
  quizContent.classList.remove("hidden");
  resultsContainer.classList.add("hidden");
  showQuestion();
});

// Initialize the quiz
initQuiz();