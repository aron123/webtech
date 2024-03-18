const questions = [
    {
        title: 'macska',
        alternatives: [ 'dog', 'cat', 'rabbit', 'bird' ],
        correctIndex: 1
    },
    {
        title: 'ajtó',
        alternatives: [ 'chair', 'table', 'door', 'box' ],
        correctIndex: 2
    },
    {
        title: 'asztal',
        alternatives: [ 'screen', 'table', 'cat', 'knife' ],
        correctIndex: 1
    },
];

let currentIndex;

function start() {
    currentIndex = 0;

    const altDivs = document.querySelectorAll('.alternative');
    altDivs.forEach((altDiv, i) => {
        altDiv.addEventListener('click', () => {
            // check answer
            const currentQuestion = questions[currentIndex];
            const userAnswer = currentQuestion.alternatives[i];
            checkAnswer(userAnswer);

            // step to next question
            stepQuestion();

            // show question
            showQuestion();
        });
    });

    showQuestion();
}

function showQuestion() {
    const question = questions[currentIndex];

    const titleDiv = document.querySelector('#title');
    titleDiv.textContent = question.title;

    const altDivs = document.querySelectorAll('.alternative');
    altDivs.forEach((altDiv, i) => {
        altDiv.textContent = question.alternatives[i];
    });
}

function checkAnswer(userAnswer) {
    const currentQuestion = questions[currentIndex];
    const correctIndex = currentQuestion.correctIndex;
    const correctAnswer = currentQuestion.alternatives[correctIndex];

    const resultDiv = document.querySelector('#result');

    if (userAnswer == correctAnswer) {
        resultDiv.textContent = 'Correct answer!';
    } else {
        resultDiv.textContent = 'Wrong answer! Correct was '
            + correctAnswer;
    }
}

function stepQuestion() {
    currentIndex++;

    if (currentIndex == questions.length) {
        currentIndex = 0;
    }
}

start();
