import { useState, useEffect } from "react";

function PokemonList(props) {
  let [list, setList] = useState([]);
  let [filteredList, setFilteredList] = useState([]);
  let [searchPokemon, setSearchPokemon] = useState("");
  let [searchType, setSearchType] = useState("");
  let [searchWeakness, setSearchWeakness] = useState("");
  let [currentPage, setCurrentPage] = useState(1);
  let totalPages = Math.ceil(filteredList.length / 6);
  let start = currentPage * 6 - 6;
  let end = currentPage * 6;
  
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
        setFilteredList(data.pokemon);
      })
      .catch((error) => console.error(error));
  }

  function handleSearch(searchTerm, type) {
    let filterName = searchPokemon;
    let filterType = searchType;
    let filterWeakness = searchWeakness;

    if (type === "name") {
      setSearchPokemon(searchTerm);
      filterName = searchTerm;
    } else if (type === "type") {
      setSearchType(searchTerm);
      filterType = searchTerm;
    } else if (type === "weakness") {
      setSearchWeakness(searchTerm);
      filterWeakness = searchTerm;
    }

    let tempList = list.filter((pokemon) => {
      let matchesName = filterName
        ? pokemon.name.toLowerCase().includes(filterName)
        : true;
      let matchesType = filterType
        ? pokemon.type.some((type) => type.toLowerCase().includes(filterType))
        : true;
      let matchesWeakness = filterWeakness
        ? pokemon.weaknesses.some((weakness) =>
            weakness.toLowerCase().includes(filterWeakness)
          )
        : true;

      return matchesName && matchesType && matchesWeakness;
    });

    setFilteredList(tempList);
  }

  function updatePage(dir) {
    let updatedPage = currentPage + dir;
    if (updatedPage > totalPages) {
      updatedPage = 1;
    } else if (updatedPage < 1) {
      updatedPage = totalPages;
    }
    setCurrentPage(updatedPage);
  }

  useEffect(() => {
    getPokemon();
  }, []);


  return (
    <div>
      <form className="search-form gameboy">
        <p className="search-header">Name</p>
        <input
          type="text"
          name="name"
          id="name"
          value={searchPokemon}
          onChange={(e) => handleSearch(e.target.value.toLowerCase(), "name")}
        />
        <p className="search-header">Type</p>
        <input
          type="text"
          name="type"
          id="type"
          value={searchType}
          onChange={(e) => handleSearch(e.target.value.toLowerCase(), "type")}
        />
        <p className="search-header">Weaknesses</p>
        <input
          type="text"
          name="weaknesses"
          id="weaknesses"
          value={searchWeakness}
          onChange={(e) =>
            handleSearch(e.target.value.toLowerCase(), "weakness")
          }
        />
      </form>
      <div>
        <button className="gameboy"
          onClick={() => {
            updatePage(-1);
          }}
        >
          Previous Page
        </button>
        <span style={{margin: "0 1rem"}}>{currentPage}</span>
        <button className="gameboy" onClick={() => updatePage(1)}>Next Page</button>
      </div>
      <ul className="list grid-container">
        {filteredList.slice(start, end).map((pokemon) => {
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
                <img src={pokemon.img} alt="pokemon images" />
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default PokemonList;
