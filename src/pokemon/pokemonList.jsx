import { useState, useEffect } from "react";
import { useTypesAndWeaknesses } from "../utils/helper.functions";
// import filterPokemon function

function PokemonList(props) {
  let [list, setList] = useState([]);
  let [searchPokemon, setSearchPokemon] = useState("");
  let [type, setType] = useState("");
  let [weaknesses, setWeaknesses] = useState("");

  function getPokemon() {
    fetch(
      "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.pokemon);
        setList(data.pokemon);
      })
      .catch((error) => console.error(error));
  }

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <div>
          <form className="search-form gameboy">
        <p className="search-header">Name</p>
        <input type="text" name='name' id='name'/>
        <p className="search-header">Type</p>
        <input type="text" name="type" id="type" />
        <p className="search-header">Weaknesses</p>
        <input type="text" name='weaknesses' id='weaknesses' />
        <button type="submit" className="button gameboy">Search</button>
        </form>
      <ul className="list grid-container">
        {list.map((pokemon) => {
          return (
            <div className="d-flex">
            <li key={pokemon.num} className="gameboy">
              <h3>{pokemon.name}</h3>
              <p>{pokemon.num}</p>
              <h3>Type</h3>
              <p>
                {pokemon.type.map((type) => {
                  return <li key={type}>{type}</li>;
                })}
              </p>
              <h3>Weaknesses</h3>
              <p>
                {pokemon.weaknesses.map((weaknesses) => {
                  return <li key={weaknesses}>{weaknesses}</li>;
                })}
              </p>
              <img src={pokemon.img} />
            </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default PokemonList;
