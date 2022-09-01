
// load cocktal api
const loadCocktail = async (search) => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${search}`
    const response = await fetch(url)
    const data = await response.json()
    displayCoctail(data.drinks)
};


// display cocktail card or api
const displayCoctail = (cocktails) => {
    const cocktailContainer = document.getElementById('cocktai-container');
    cocktailContainer.textContent = ''
    cocktails.forEach(cocktail => {
        const cocktaiDiv = document.createElement('div');
        cocktaiDiv.classList.add('col')
        cocktaiDiv.innerHTML = `
        <div style="height: 730px" class="card p-4 ">
        <img src="${cocktail.strDrinkThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${cocktail.strCategory
            }</h5>
            <p class="card-text">${cocktail.strInstructions
            }</p>
        </div>
    </div>
        `
        cocktailContainer.appendChild(cocktaiDiv)
        console.log(cocktail)
    })
};

document.getElementById('btn-search').addEventListener('click', function () {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    loadCocktail(searchText)
    console.log(searchText)
});
loadCocktail('a')
