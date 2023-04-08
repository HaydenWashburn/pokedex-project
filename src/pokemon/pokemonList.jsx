import { useState } from "react";
import { getListOf } from "../helpers/pokemon.helpers"

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


  let pokemon = getListOf(list, "Pokemon");


  return (
    <div>
      <h1>Pokedex</h1>
      <form action="">
        <div className="form-group">
          <label htmlFor="">
            <select
              name="searchPokemon"
              id="searchPokemon"
              value={searchPokemon}
              onChange={(e) => {
                setSearchPokemon(e.target.value);
              }}
            >
                       <option value="">All</option>
              {pokemon.map((pokemon, idx) => {
                return (
                  <option key={pokemon + idx} value={pokemon}>
                    {pokemon}
                  </option>
                );
              })}
            </select>
          </label>
        </div>
      </form>
    </div>
  );
}

export default PokemonList;
