const pokemonArr = [
    {
        name: "charmander",
        type: "fire"
    },
    {
        name: "squirtle",
        type: "water"
    },
    {
        name: "bulbasaur",
        type: "earth"
    },
]

const searchInput = (str) => {
    str = document.getElementById("search").value
    str = str.trim().toLowerCase()
    filterPoke(str)
}

const filterPoke = (str) => {
    let printResults = document.getElementById("results")
    const result = pokemonArr.filter(pokemon => pokemon.type == str);
    printResults.innerHTML = result[0].name
}


