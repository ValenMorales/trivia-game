export async function characterRickAndMorty() {
    try{
        return fetch("https://rickandmortyapi.com/api/character")
        .then(response => response.json())
        .then(data => data.results)
    } catch (error){
        console.log(error)
    }
    
}

export async function  characterStarWars() {
    try{
        return fetch("https://swapi.dev/api/people")
        .then(response => response.json())
        .then(data => data.results)
    } catch(error){
        console.log(error)
    }
   
}

export async function characterPokemon() {
    try{
        return fetch("https://pokeapi.co/api/v2/pokemon")
        .then(response => response.json())
        .then(data => data.results)
    } catch(error){
        console.log(error)
    }
}