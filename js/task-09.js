// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// const btnRef = document.querySelector(".change-color");
// const colorRef = document.querySelector(".color");

// const btnClick = () => {
//   colorRef.textContent = document.body.style.background = getRandomHexColor();
// };
// btnRef.addEventListener("click", btnClick);

const refs = {
  body: document.querySelector('body'),
  colorName: document.querySelector('.color'),
  btn: document.querySelector('.change-color'),
};
refs.btn.addEventListener('click', () => {
  const colorRandom = getRandomHexColor();
  refs.body.style.backgroundColor = colorRandom;
  refs.colorName.textContent = colorRandom;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}