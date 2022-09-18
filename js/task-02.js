const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingred = document.querySelector('#ingredients')

const createElls = ingredients.map((value) => {
  const createEll = document.createElement('li')
  createEll.textContent = value
    createEll.classList.add('item')
      return createEll
})

ingred.append(...createElls)
