const quesJSON = [
    {
        correctAnswer: 'Three ',
        options: ['Two', 'Three ', 'Four', 'Five'],
        question: "How many pieces of bun are in a Mcdonald's Big Mac?",
    },
    {
        correctAnswer: 'L. Frank Baum',
        options: ['Suzanne Collins', 'James Fenimore Cooper', 'L. Frank Baum', 'Donna Leon',],
        question: "Which author wrote 'The Wonderful Wizard of Oz'?",
    },
    {
        correctAnswer: 'Atlanta United',
        options: ['Atlanta United', 'Atlanta Impact', 'Atlanta Bulls', 'Atlanta Stars',],
        question: 'Which of these is a soccer team based in Atlanta?',
    },
    {
        correctAnswer: 'A Nanny',
        options: ['A Sow', 'A Lioness', 'A Hen', 'A Nanny',],
        question: 'A female goat is known as what?',
    },
    {
        correctAnswer: 'P. L. Travers',
        options: ['J. R. R. Tolkien', 'P. L. Travers', 'Lewis Carroll', 'Enid Blyton',],
        question: "Which author wrote 'Mary Poppins'?",
    },
];


let score = 0;
let currentQuestion = 0;
let totalQuestion = quesJSON.length;
let showAnswerClick = 0;

const questionEl = document.getElementById('question');
const optionEl = document.getElementById('options');
const nextBtn = document.getElementById('nextBtn');
const questionNo = document.getElementById('questionNo');
const scoreDis = document.getElementById('scoreDis')
const showAnswerBtn = document.getElementById('show-answer-header');
const showAnswerContent = document.getElementById('show-answer')
const tryAgainContainer = document.querySelector(".try-again-div");
const tryAgain = document.getElementById('tryAgain');


// hide the display 
tryAgainContainer.style.display = "none";



showQuestion();

// Event handling for next button 

nextBtn.addEventListener('click', () => {
    scoreDis.textContent = `Score: ${score}/${totalQuestion}`;
    nextQuestion();
});

function showAnswer() {
    showAnswerContent.style.display = "none";

    showAnswerBtn.addEventListener('click', () => {
        if (showAnswerContent.style.display === "none") {
            showAnswerClick++;
            showAnswerContent.style.display = "block";
        } else {
            showAnswerContent.style.display = "none";
        }
    })
}

function showQuestion() {
    // Destructuring the object 
    const { correctAnswer, options, question } = quesJSON[currentQuestion];
    questionNo.textContent = `Question: ${currentQuestion + 1}/${totalQuestion}`
    scoreDis.textContent = `Score: ${score}/${totalQuestion}`

    // setting question text content 
    questionEl.textContent = question;

    // Show answer 
    showAnswerContent.textContent = `Answer : "${correctAnswer}"`;

    let shuffledOptions = shuffledOption(options);

    // Populating the Options div with the buttons 

    shuffledOptions.forEach(option => {
        // create button 
        const btn = document.createElement('button');
        btn.className = "btn"
        optionEl.appendChild(btn);
        btn.textContent = option;

        // event handling on the button 
        btn.addEventListener('click', () => {

            if (showAnswerClick > 0) {
                score = score;
            } else if (option === correctAnswer) {
                score = score + 1;

            } else {
                score = score - 0.25;
            }
            scoreDis.textContent = `Score: ${score}/${totalQuestion}`;

            nextQuestion();
        })
    });
}





showAnswer()


//  function for nextQuestion
function nextQuestion() {
    currentQuestion++;
    optionEl.textContent = ''

    if (currentQuestion >= quesJSON.length) {

        // remove question number and score form header 
        questionNo.textContent = '';
        scoreDis.textContent = '';

        // display quiz completion 
        questionEl.textContent = "Quiz Completed!!"

        // display the total score 
        displayTotalScore();

        // try again button
        showTryAgain();

        // remove next button 
        nextBtn.remove()

        // remove showAnswer
        document.getElementById('showAnswer').style.border = "none"
        showAnswerContent.textContent = "";
        showAnswerBtn.remove()
    } else {
        showAnswerContent.style.display = "none";
        showAnswerClick = 0
        showQuestion()
    }
}

function displayTotalScore() {
    let scorePer = (totalQuestion * 40) / 100;
    if (score >= scorePer) {
        optionEl.innerHTML = `<div style='color:green; font-size:22px; font-weight:500; text-align: center; margin-bottom: 15px;'><p>Well Done!</p><p >Your Score is: ${score} / ${totalQuestion}</p></div>`;
    } else {
        optionEl.innerHTML = `<div style='color:red; font-size:22px; font-weight:500; text-align: center; padding-top: 10px;'><p>Oops!</p><p >Your Score is: ${score} / ${totalQuestion}</p></div>`;
    }
}


function showTryAgain() {
    tryAgainContainer.style.display = "flex"
    tryAgain.addEventListener('click', () => {
        location.reload();
    })
}

// Shuffled Option

function shuffledOption(options) {
    for (let i = options.length - 1; i >= 0; i--) {
        let j = Math.floor(Math.random() * 4);


        [options[i], options[j]] = [options[j], options[i]];
    }
    return options;
}