// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
// подставляет его текущее значение в span#name - output.Если инпут пустой, в спане должна отображаться строка "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

// const textInput = document.querySelector('#name-input')
// const output = document.querySelector('#name-output')

// textInput.addEventListener('input', (event) => {
//    event.currentTarget.value === '' ? event.currentTarget.value = 'Anonymous' : output.textContent = event.currentTarget.value
// })

const inputNameRef = document.querySelector("#name-input");
const outputRef = document.querySelector("#name-output");
const handleInputName = (event) => {
  const { value } = event.target;
  outputRef.textContent = value ? value : "Anonymous";
};