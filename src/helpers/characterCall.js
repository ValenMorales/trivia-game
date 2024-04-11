export function characterRickAndMorty() {
    return fetch("https://rickandmortyapi.com/api/character")
        .then(response => response.json())
        .then(data => data.results)
}

export function characterStarWars() {
    return fetch("https://swapi.dev/api/people")
        .then(response => response.json())
        .then(data => data.results)
}

export function characterPokemon() {
    return fetch("https://pokeapi.co/api/v2/pokemon")
        .then(response => response.json())
        .then(data => data.results)
}