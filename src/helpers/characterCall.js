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
    return fetch("https://swapi.dev/api/people")
      .then((response) => response.json())
      .then((data) => data.results);
  } catch (error) {
    console.log(error);
  }
}

export async function characterPokemon() {
  try {
    return fetch("https://pokeapi.co/api/v2/pokemon")
      .then((response) => response.json())
      .then((data) => data.results);
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
