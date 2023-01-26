let score = 0;

// Define questions, answers and explanations
const questions = [
    {
      category: "HTML",
      question: "What is the correct syntax for creating a hyperlink?",
      answers: [
        { text: "<a>www.example.com</a>", correct: false },
        { text: "<link>www.example.com</link>", correct: false },
        { text: "<a href='www.example.com'>Link</a>", correct: true },
        { text: "<a name='www.example.com'>Link</a>", correct: false }
      ],
      explanation: "The correct syntax for creating a hyperlink in HTML is to use the <a> tag with the href attribute, like this: <a href='www.example.com'>Link</a>. The href attribute specifies the destination URL and the link text is placed between the opening and closing <a> tags."
    },
    // ... more questions
  ];
  
  // Initialize variables
  let currentQuestionIndex = 0;
  let score = 0;
  let category = "";
  
  // Select category
  const selectCategory = (selectedCategory: string) => {
    // Set the selected category
    category = selectedCategory;
    // Filter questions by category
    const filteredQuestions = questions.filter(question => question.category === category || category === "mixed");
    // Shuffle the questions
    currentQuestionIndex = shuffle(filteredQuestions).map((a,i)=>i);
    // Render the first question
    renderCurrentQuestion();
  };
  
  // Render the current question
  const renderCurrentQuestion = () => {
    // Get the current question
    const currentQuestion = questions[currentQuestionIndex];
    // Display the question
    const questionElement = document.getElementById("question");
    questionElement.innerHTML = currentQuestion.question;
    // Display the answers
    const answersElement = document.getElementById("answers");
    answersElement.innerHTML = "";
    // Shuffle the answers
    shuffle(currentQuestion.answers).forEach((answer, index) => {
      // Create a button
////////////////

      let score = 0;
let currentQuestionIndex = 0;
let category = "";
let selectedQuestionCount = 0;

const questions = [
    {
      category: "HTML",
      question: "What is the correct syntax for creating a hyperlink?",
      answers: [
        { text: "<a>www.example.com</a>", correct: false },
        { text: "<link>www.example.com</link>", correct: false },
        { text: "<a href='www.example.com'>Link</a>", correct: true },
        { text: "<a name='www.example.com'>Link</a>", correct: false }
      ],
      explanation: "The correct syntax for creating a hyperlink in HTML is to use the <a> tag with the href attribute, like this: <a href='www.example.com'>Link</a>. The href attribute specifies the destination URL and the link text is placed between the opening and closing <a> tags."
    },
    // ... more questions
  ];

//Select category
const selectCategory = (selectedCategory: string, questionCount: number) => {
    category = selectedCategory;
    selectedQuestionCount = questionCount;
    const filteredQuestions = questions.filter(question => question.category === category || category === "mixed");
    currentQuestionIndex = shuffle(filteredQuestions).map((a,i)=>i).slice(0, questionCount);
    renderCurrentQuestion();
};

//Check user's selection and update score
const checkAnswer = (answer: any) => {
    const currentQuestion = questions[currentQuestionIndex];
    if (answer.correct) {
        score++;
        showExplanation("Correct!", currentQuestion.explanation);
    } else {
        showExplanation("Incorrect!", currentQuestion.explanation);
    }
    renderNextQuestion();
}

//Show explanation when answer is correct or incorrect
const showExplanation = (result: string, explanation: string) => {
    const resultElement = document.getElementById("result");
    resultElement.innerHTML = result;

    const explanationElement = document.getElementById("explanation");
    explanationElement.innerHTML = explanation;
}

//Show final score when quiz is completed
const showFinalScore = () => {
    const scoreElement = document.getElementById("score");
    scoreElement.innerHTML = `Final Score: ${score}/${selectedQuestionCount}`;
}

//Reset quiz
const resetQuiz = () => {
    score = 0;
    currentQuestionIndex = 0;
    selectCategory(category, selectedQuestionCount);
}

//Render next question
const renderNextQuestion = () => {
    currentQuestionIndex++;
    if (currentQuestionIndex >= selectedQuestionCount) {
        showFinalScore();
        return;
    }
    renderCurrentQuestion();
}

//Render current question
const renderCurrentQuestion = () => {
    const currentQuestion = questions[currentQuestionIndex];
    const questionElement = document.getElementById("question");
    questionElement.innerHTML = currentQuestion.question;

    const answersElement = document.getElementById("answers");
    answersElement

    currentQuestion.answers.forEach((answer) => {
      // Create a button
      const answerButton = document.createElement("button");
      answerButton.innerHTML = answer.text;
      answerButton.onclick = () => checkAnswer(answer);
      answersElement.appendChild(answerButton);
    });

    ///////////////////////////

    .innerHTML = "";
shuffle(currentQuestion.answers).forEach((answer, index) => {
// Create a button
const answerButton = document.createElement("button");
answerButton.innerHTML = answer.text;
answerButton.onclick = () => checkAnswer(answer);
answersElement.appendChild(answerButton);
});
};
// Shuffle function
function shuffle(array: any) {
for (let i = array.length - 1; i > 0; i--) {
const j = Math.floor(Math.random() * (i + 1));
[array[i], array[j]] = [array[j], array[i]];
}
return array;
}
// Call the selectCategory function to start the quiz
selectCategory("HTML", questions.length);

// Add a reset button to reset the quiz
const resetButton = document.createElement("button");
resetButton.innerHTML = "Reset Quiz";
resetButton.onclick = resetQuiz;
document.body.appendChild(resetButton);
// Add a select category button
const selectCategoryButton = document.createElement("button");
selectCategoryButton.innerHTML = "Select Category";
selectCategoryButton.onclick = () => {
const selectedCategory = prompt("Enter category name or 'mixed' for all categories:");
const questionCount = Number(prompt("Enter number of questions:"));
selectCategory(selectedCategory, questionCount);
};
document.body.appendChild(selectCategoryButton);

}

}

