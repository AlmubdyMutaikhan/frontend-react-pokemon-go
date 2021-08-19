
import { useState } from 'react/cjs/react.development';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Pokemons from './components/Pokemons/Pokemons';
function App() {
  const [totalLoadedPokemons, setTotalLoadedPokemons] = useState(8);
  const setCount = (count) => {
    setTotalLoadedPokemons(count);
  }

  return (
    <div className="app-container">
        <Navbar/>
        <div className="show">
          <span className="top">Total:</span>
          <h1 className="show">{totalLoadedPokemons}</h1>
          <span className="bottom">Loaded pokemons:</span>
        </div>
        <Pokemons setCount={setCount}/>
    </div>
  );
}

export default App;
