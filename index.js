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


const { correctAnswer, options, question } = quesJSON;
const questionEl = document.getElementById('question');
const optionEl = document.getElementById('options');
const scoreEl = document.getElementById('score');
const nextBtn = document.getElementById('nextBtn');
let score = 0;
let currentQuestion = 0;
// Manipulate the DOM 

function showQuestion() {
    // Destructuring the object 
    const { correctAnswer, options, question } = quesJSON[currentQuestion];

    // setting question text content 
    questionEl.textContent = question;

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

            if (option === correctAnswer) {
                score = score + 1;
            } else {
                score = score - 0.25;
            }
            questionEl.textContent = "Quiz Completed!!"
            optionEl.textContent = ''
            scoreEl.textContent = `Score: ${score}`;
            nextBtn.remove()
        })
    });
}

showQuestion()

// Shuffled Option

function shuffledOption(options) {
    for (let i = options.length - 1; i >= 0; i--) {
        let j = Math.floor(Math.random() * 4);


        [options[i], options[j]] = [options[j], options[i]];
    }
    return options;
}