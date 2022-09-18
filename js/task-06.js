// Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на правильное количество введённых символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }
// const inputText = document.querySelector('#validation-input')

// const lengthInputText = inputText.getAttribute('data-length')

// inputText.addEventListener('blur', () => {
//     inputText.value.length < lengthInputText || inputText.value.length > lengthInputText
//      ? inputText.classList.add('invalid') 
//      : inputText.classList.remove('invalid'),
//     inputText.classList.add("valid")
// })

const inputText = document.querySelector("#validation-input");
inputText.addEventListener("blur", (event) => {
  if (
    event.target.value.length ===
    Number(inputText.getAttribute("data-length"))
  ) {
    inputText.classList.add("valid");
    inputText.classList.remove("invalid");
  } else {
    inputText.classList.add("invalid");
    inputText.classList.remove("valid");
  }
});