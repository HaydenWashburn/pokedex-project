import { useState, useEffect } from "react";

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
      <ul className="list grid-container">
        {list.map((pokemon) => {
          return (
            <div className="d-flex">
            <li key={pokemon.num} className="gameboy">
              <h3>{pokemon.name}</h3>
              <p>{pokemon.num}</p>
              <p>
                {pokemon.type.map((type) => {
                  return <li key={type}>{type}</li>;
                })}
              </p>
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
