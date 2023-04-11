import './App.css';
import PokemonList from './pokemon/pokemonList';
import SearchBar  from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Pokedex
        </h1>
      </header>
      <div>
        <PokemonList />
      </div>
    </div>
  );
}

export default App;
