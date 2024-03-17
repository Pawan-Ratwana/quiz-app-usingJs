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


questionEl.textContent = question;

options.forEach(option => {
    const btn = document.createElement('button');
    btn.className = "btn";
    optionEl.appendChild(btn);
    btn.textContent = option;
});


// options.map(option => {
//     const optionBtn = document.createElement('button');
//     optionBtn.className = "btn";
//     optionEl.appendChild(optionBtn);
//     optionBtn.textContent = option
// })


// for (let i = 0; i < options.length; i++) {
//     const optionBtn = document.createElement('button');
//     optionBtn.className = "btn";
//     optionEl.appendChild(optionBtn);
//     optionBtn.textContent = options[i];
// }