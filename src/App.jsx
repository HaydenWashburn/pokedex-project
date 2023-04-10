import './App.css';
import PokemonList from './pokemon/pokemonList';
import SearchBar  from './components/sideNav';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Pokedex
        </h1>
      </header>
      <div>
        <SearchBar />
        <PokemonList />
      </div>
    </div>
  );
}

export default App;
