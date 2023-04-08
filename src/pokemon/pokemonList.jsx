import { useState } from "react";


function PokemonList(props) {
  let [list, setList] = useState([]);
  let [searchPokemon, setSearchPokemon] = useState("");

  function getPokemon() {
    fetch(
      "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((pokemon) => setList(pokemon))
      .catch((error) => console.error(error));
  }

  return (
    <div>
      <h1>Pokemon List</h1>
    </div>
  );
}

export default PokemonList;
