// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

const categoriesItemsRef = document.querySelectorAll('.item');
console.log('Number of categories:', categoriesItemsRef.length);
categoriesItemsRef.forEach(item => {
  console.log('Categori:', item.firstElementChild.textContent);
  const itemsList = item.querySelector('ul');
  console.log('Elements:', itemsList.children.length);
});