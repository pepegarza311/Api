let contadorPokemonId = 100;

const getData = async (pokemonId) => {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
    );
    const data = await response.json();
    MostrarPokemon(data);
  } catch (error) {
    console.error("Erro al obtener datos: ", error);
  } /*finally{
                console.log('Ha finalizado');
            }*/
};

const MostrarPokemon = (pokemon) => {
  const Contenido = document.getElementById("Container");
  Contenido.innerHTML = ""; //limpiar contenido antes de Mostrar

  const pokemonCard = document.createElement("div");
  pokemonCard.classList.add("pokemon-card"); //Agrega una clase para el css

  const pokemonName = document.createElement("h2");
  pokemonName.textContent = pokemon.name.toUpperCase();

  const pokemonImage = document.createElement("img");
  pokemonImage.src = pokemon.sprites.front_default;
  /*  Tamaño del pokemon  */
  const Altura_Metro = pokemon.height / 10;
  const Peso_kilogramos = pokemon.weight / 10;

  const pokemonDatos = document.createElement("p");
  pokemonDatos.textContent = `Altura: ${Altura_Metro} m | Peso: ${Peso_kilogramos} kg`;

  pokemonCard.appendChild(pokemonName);
  pokemonCard.appendChild(pokemonImage);
  pokemonCard.appendChild(pokemonDatos);
  Contenido.appendChild(pokemonCard);
};

//boton antes:
document.getElementById("prevBtn").addEventListener("click", () => {
  if (contadorPokemonId > 1) {
    contadorPokemonId--;
    getData(contadorPokemonId);
  }
});

//boton siguinte:
document.getElementById("nextBtn").addEventListener("click", () => {
  contadorPokemonId++;
  getData(contadorPokemonId);
});

// Cargar el primer dato:
getData(contadorPokemonId);
