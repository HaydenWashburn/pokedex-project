import './App.css';
import PokemonList from './pokemon/pokemonList';

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
