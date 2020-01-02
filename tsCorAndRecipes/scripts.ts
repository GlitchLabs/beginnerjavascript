console.log("typescript");
const baseEndpoint = "http://www.recipepuppy.com/api";
const proxy = "https://cors-anywhere.herokuapp.com/";
const form = document.querySelector("form.search");
const recipesGrid = document.querySelector(".recipes");

async function fetchRecipes(query: string) {
  const res = await fetch(`${proxy}${baseEndpoint}?q=${query}`);
  const data = await res.json();
  return data;
}
async function handleSubmit(event: any) {
  event.preventDefault();
  const el = event.currentTarget;
  el.submit.disabled = true;
  const results = await fetchRecipes(el.query.value);
  const recipes = results.results;
  console.log(recipes);
  displayRecipes(recipes);
  el.submit.disabled = false;
}

function displayRecipes(recipes: any) {
  console.log("creating html");
  const html = recipes.map((recipe: any) => {
    console.log(recipe);
    return `<div class="recipe">
            <h2> ${recipe.title}</h2>
            <p>${recipe.ingredients} </p>
            ${recipe.thumbnail &&
              `<img src="${recipe.thumbnail}" alt="${recipe.title}"/>`}
        </div>
        `;
  });
  if (recipesGrid) {
    recipesGrid.innerHTML = html.join("");
  }
}

(form as Element).addEventListener("submit", handleSubmit);
