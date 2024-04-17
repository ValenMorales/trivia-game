export async function characterRickAndMorty() {
  try {
    return fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => data.results);
  } catch (error) {
    console.log(error);
  }
}

export async function characterStarWars() {
  try {
    const charactersResponse = await fetch("https://swapi.dev/api/people");
    const charactersData = await charactersResponse.json();

    // Obtener los resultados de los personajes
    const characters = charactersData.results;

    // Obtener información detallada de cada personaje
    const detailedCharacters = await Promise.all(
      characters.map(async (character) => {
        const characterResponse = await fetch(character.url);
        const characterData = await characterResponse.json();
        return characterData;
      })
    );

    return detailedCharacters;
  } catch (error) {
    console.log(error);
  }
}


export async function characterPokemon() {
  try {
    // Realizar la solicitud para obtener los nombres de los Pokémon
    const response = await fetch("https://pokeapi.co/api/v2/pokemon");
    const data = await response.json();
    const pokemonList = data.results;

    // Realizar una solicitud para obtener más detalles de cada Pokémon
    const pokemonDetails = await Promise.all(
      pokemonList.map(async (pokemon) => {
        const pokemonResponse = await fetch(pokemon.url);
        const pokemonData = await pokemonResponse.json();
        return pokemonData;
      })
    );

    return pokemonDetails;
  } catch (error) {
    console.log(error);
  }
}

export async function tvShows() {
  try {
    return fetch("https://www.episodate.com/api/most-popular?page=1")
      .then((response) => response.json())
      .then((data) => data.tv_shows);
  } catch (error) {
    console.log(error);
  }
}

export async function tvShowsSpecified() {
  try {
    const detailList = [];
    const response = await axios.get('https://www.episodate.com/api/most-popular?page=1');
    const showsData = response.data.slice(0, 10); 
    this.shows = showsData.map(show => ({
      id: show.id,
      name: show.name
    }));


    await Promise.all(this.shows.map(async show => {
      const detailResponse = await axios.get(`https://www.episodate.com/api/show-details?q=${encodeURIComponent(show.name)}`);
      detailList.push(detailResponse);
    }));
    return detailList;
  } catch (error) {
    console.error('Error al obtener los datos:', error);
  }
}



export async function characterMarvel() {
  try {
    const publicKey = "3149e996393fa95d1f39ea7e5ff1313b";
    const url = `https://gateway.marvel.com/v1/public/characters?apikey=${publicKey}`;

    const response = await fetch(url);
    const data = await response.json();

    if (!data || !data.data || !data.data.results) {
      console.log("Error: Respuesta de la API inesperada", data);
      return;
    }

    return data.data.results;
  } catch (error) {
    console.log("Error al obtener datos de la API de Marvel:", error);
  }
}

export async function eventsMarvel() {
  try {
    const publicKey = "3149e996393fa95d1f39ea7e5ff1313b";
    const url = `https://gateway.marvel.com/v1/public/events?apikey=${publicKey}`;

    const response = await fetch(url);
    const data = await response.json();

    if (!data || !data.data || !data.data.results) {
      console.log("Error: Respuesta de la API inesperada", data);
      return;
    }
    return data.data.results;

  }catch (error) {
    console.log("Error al obtener datos de la API de Marvel:", error);
  }
}





export function filterAllRickAndMorty(object) {
  return object.map((character) => {
    return {
      name: character.name,
      image: character.image,
      gender: character.gender,
      species: character.species,
    };
  });
}
