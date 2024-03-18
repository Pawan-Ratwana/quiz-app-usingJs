const questionObj = {
    category: 'Food & Drink',
    id: 'qa-1',
    correctAnswer: 'Three',
    options: ['Two', 'Three', 'Four', 'Five'],
    question: "How many pieces of bun are in a Mcdonald's Big Mac?"
};

const { correctAnswer, options, question } = questionObj;
const questionEl = document.getElementById('question');
const optionEl = document.getElementById('options');
const scoreEl = document.getElementById('score');
const nextBtn = document.getElementById('nextBtn');
let score = 0;
// Manipulate the DOM 

// setting question text content 
questionEl.textContent = question;

// Populating the Options div with the buttons 

let shuffledOptions = shuffledOption(options);

shuffledOptions.forEach(option => {
    const btn = document.createElement('button');
    btn.className = "btn";
    optionEl.appendChild(btn);
    btn.textContent = option;
    btn.addEventListener('click', () => {

        if (option === correctAnswer) {
            score = score + 1;
        } else {
            score = score - 0.25;
        }
        questionEl.textContent = "Quiz Completed!!"
        optionEl.textContent = `Score: ${score}/5`
        scoreEl.textContent = `<h2>Score: ${score}/5</h2>`;
        nextBtn.remove()
    });
})

// Shuffled Option

function shuffledOption(options) {
    for (let i = options.length - 1; i >= 0; i--) {
        let j = Math.floor(Math.random() * 4);


        [options[i], options[j]] = [options[j], options[i]];
    }
    return options;
}