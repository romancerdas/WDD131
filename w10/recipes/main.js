const recipes = [
  {
    tags: ['Waffles', 'Sweet Potato', 'Side'],
    description: 'Savory waffles made with Sweet potato with a hint of Ginger',
    image: './images/sweet-potato-waffle-md.jpg',
    name: 'Sweet Potato Waffles',
    rating: 4
  },
  {
    tags: ['Chicken', 'Entree'],
    description: 'Delicious quick and easy creamy rice dish. The mustard, mushrooms, and lemon all blend together wonderfully',
    image: './images/escalopes-de-poulet-a-la-creme.webp',
    name: 'Escalope de Poulet a la Creme with steamed green beans (Chicken with Cream)',
    rating: 4.5
  },
  {
    tags: ['Potatoes', 'side'],
    description: 'Easy and delicious oven roasted potatoes that go great with almost anything.',
    image: './images/roasted-potatoes.webp',
    name: 'Oven Roasted potato slices',
    rating: 4
  },
  {
    tags: ['Southwest', 'entree'],
    description: 'Black beans and tomatoes served over a bed of rice. Top with cheese and scoop up with tortilla chips for maximum enjoyment.',
    image: './images/black-beans-and-rice.jpg',
    name: 'Black Beans and Rice',
    rating: 3
  },
  {
    tags: ['chicken', 'entree', 'Indian'],
    description: 'Quick and easy Chicken curry recipe made with easy to find ingredients.',
    image: './images/chicken-curry.webp',
    name: 'Chicken Curry',
    rating: 5
  },
  {
    tags: ['dessert'],
    description: 'Delicious soft chocolate chip cookies with coconut.',
    image: './images/chocolate-chip-cookies.jpg',
    name: 'Chocolate Chip Cookies',
    rating: 5
  },
  {
    tags: ['dessert', 'German'],
    description: "This gooseberry cake with crumble is easy to follow, a bit tart and not too sweet. Made up of a cake base, filled with fresh gooseberries and vanilla cream and finished off with crumble that's flavored with vanilla.",
    image: './images/german-gooseberry-cake.jpg',
    name: 'Gooseberry cake with vanilla cream and crumble',
    rating: 5
  },
  {
    tags: ['dessert'],
    description: "This apple crisp recipe is a simple yet delicious fall dessert that's great served warm with vanilla ice cream.",
    image: './images/apple-crisp.jpg',
    name: 'Apple Crisp',
    rating: 4
  }
];

const searchForm = document.querySelector('.search');
const searchInput = document.querySelector('#search-input');
const results = document.querySelector('#recipes');

function random(number) {
  return Math.floor(Math.random() * number);
}

function getRandomRecipe(recipeList) {
  return recipeList[random(recipeList.length)];
}

function recipeTemplate(recipe) {
  return `
    <article class="recipe-card">
      <img src="${recipe.image}" alt="${recipe.name}" onerror="this.style.display='none'" />
      <div class="recipe-info">
        <div class="tags">${tagsTemplate(recipe.tags)}</div>
        <h2>${recipe.name}</h2>
        <div class="rating" aria-label="Rating: ${recipe.rating} out of 5">${ratingTemplate(recipe.rating)}</div>
        <p class="description">${recipe.description}</p>
      </div>
    </article>`;
}

function tagsTemplate(tags) {
  return tags.map((tag) => `<span class="tag">${tag}</span>`).join('');
}

function ratingTemplate(rating) {
  const wholeStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  const emptyStars = 5 - wholeStars - (hasHalf ? 1 : 0);
  return `${'★'.repeat(wholeStars)}${hasHalf ? '½' : ''}${'☆'.repeat(emptyStars)}`;
}

function renderRecipes(recipeList) {
  if (!recipeList.length) {
    results.innerHTML = '<p class="empty">No recipes found. Try another search term.</p>';
    return;
  }
  results.innerHTML = recipeList.map(recipeTemplate).join('');
}

function normalize(text) {
  return text.toLowerCase().trim();
}

function filterRecipes(query) {
  const cleanQuery = normalize(query);
  if (!cleanQuery) return [getRandomRecipe(recipes)];

  return recipes
    .filter((recipe) => {
      const haystack = [recipe.name, recipe.description, recipe.tags.join(' ')].join(' ').toLowerCase();
      return haystack.includes(cleanQuery);
    })
    .sort((a, b) => a.name.localeCompare(b.name));
}

function searchHandler(event) {
  event.preventDefault();
  renderRecipes(filterRecipes(searchInput.value));
}

searchForm.addEventListener('submit', searchHandler);
renderRecipes([getRandomRecipe(recipes)]);
