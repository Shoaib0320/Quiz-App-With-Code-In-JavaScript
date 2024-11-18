let currentQuestionIndex = 0;
let correctAnswersCount = 0;
let totalQuestions = 0;

function loadQuestion() {
    totalQuestions = quizQuestions.length;
    const currentQuestion = quizQuestions[currentQuestionIndex];
    document.getElementById('question').textContent = currentQuestion.question;
    document.getElementById('code-snippet').textContent = currentQuestion.code;
    document.getElementById('explanation').style.display = 'none';
    
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';
    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.onclick = () => selectOption(option, button);
        optionsContainer.appendChild(button);
    });
    
    document.getElementById('next-button').style.display = 'none';
}

function selectOption(selectedOption, button) {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    const explanationDiv = document.getElementById('explanation');
    
    // Disable all buttons after an option is selected
    const buttons = document.querySelectorAll('#options button');
    buttons.forEach(btn => btn.disabled = true);

    explanationDiv.textContent = currentQuestion.explanation;
    explanationDiv.style.display = 'block';

    if (selectedOption === currentQuestion.answer) {
        explanationDiv.style.color = 'green';
        correctAnswersCount++;
    } else {
        explanationDiv.style.color = 'red';
    }

    document.getElementById('next-button').style.display = 'block';
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
        loadQuestion();
    } else {
        const percentage = (correctAnswersCount / totalQuestions * 100).toFixed(2);
        document.getElementById('quiz-container').innerHTML = `
            <p>Quiz completed!</p>
            <p>Total Questions: ${totalQuestions}</p>
            <p>Correct Answers: ${correctAnswersCount}</p>
            <p>Wrong Answers: ${totalQuestions - correctAnswersCount}</p>
            <p>Percentage: ${percentage}%</p>
        `;
    }
}

// Load the first question when the page loads
window.onload = loadQuestion;
