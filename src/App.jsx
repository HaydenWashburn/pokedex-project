import './App.css';
import PokemonList from './pokemon/pokemonList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Pokedex Project
        </h1>
      <div>
        <PokemonList />
      </div>
      </header>
    </div>
  );
}

export default App;
