
const baseEndpoint ='http://www.recipepuppy.com/api';
const proxy ='https://cors-anywhere.herokuapp.com/' ;
const form = document.querySelector('form.search');
const recipeGrid = document.querySelector('.recipes');

async function fetchRecipes(query){
    console.log("starting")
    const res = await fetch(`${proxy}${baseEndpoint}?q=${query}`)
    const data = await res.json()
    return data;
}

async function handleSubmit(event){
    event.preventDefault()
    const el  = event.currentTarget;
    el.submit.disabled = true;
    const results = await fetchRecipes(el.query.value);
    const recipes = results.results
    console.log(recipes)
    displayRecipes(recipes)
    el.submit.disabled = false;
}

function displayRecipes(recipes){
    console.log('creating html')
    const html = recipes.map(recipe =>{
        console.log(recipe)
        return `<div class="recipe">
            <h2> ${recipe.title}</h2>
            <p>${recipe.ingredients} </p>
            ${recipe.thumbnail && `<img src="${recipe.thumbnail}" alt="${recipe.title}"/>`}
        </div>
        `
    })
    recipeGrid.innerHTML = html.join('')
}

form.addEventListener('submit',handleSubmit);