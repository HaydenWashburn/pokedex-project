import { useState, useEffect } from "react";

function PokemonList(props) {
  let [list, setList] = useState([]);
  let [filteredList, setFilteredList] = useState([]);
  let [searchPokemon, setSearchPokemon] = useState("");
  let [searchType, setSearchType] = useState("");
  let [searchWeakness, setSearchWeakness] = useState("");

  function getPokemon() {
    fetch(
      "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setList(data.pokemon);
        setFilteredList(data.pokemon);
      })
      .catch((error) => console.error(error));
  }

  function handleSearch(e) {
    e.preventDefault();

    let tempList = list.filter((pokemon) => {
      let matchesName = searchPokemon
        ? pokemon.name.toLowerCase().includes(searchPokemon)
        : true;
      let matchesType = searchType
        ? pokemon.type.some((type) => type.toLowerCase().includes(searchType))
        : true;
      let matchesWeakness = searchWeakness
        ? pokemon.weaknesses.some((weakness) =>
            weakness.toLowerCase().includes(searchWeakness)
          )
        : true;

      return matchesName && matchesType && matchesWeakness;
    });

    setFilteredList(tempList);
  }

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <div>
      <form className="search-form gameboy" onSubmit={handleSearch}>
        <p className="search-header">Name</p>
        <input
          type="text"
          name="name"
          id="name"
          value={searchPokemon}
          onChange={(e) => setSearchPokemon(e.target.value.toLowerCase())}
        />
        <p className="search-header">Type</p>
        <input
          type="text"
          name="type"
          id="type"
          value={searchType}
          onChange={(e) => setSearchType(e.target.value.toLowerCase())}
        />
        <p className="search-header">Weaknesses</p>
        <input
          type="text"
          name="weaknesses"
          id="weaknesses"
          value={searchWeakness}
          onChange={(e) => setSearchWeakness(e.target.value.toLowerCase())}
        />
        <button type="submit" className="button gameboy">
          Search
        </button>
      </form>
      <ul className="list grid-container">
        {filteredList.map((pokemon) => {
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
