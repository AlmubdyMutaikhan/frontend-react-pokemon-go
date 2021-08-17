
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Pokemons from './components/Pokemons/Pokemons';
function App() {
  return (
    <div className="app-container">
        <Navbar/>
        <Hero />
        <Pokemons />
    </div>
  );
}

export default App;
