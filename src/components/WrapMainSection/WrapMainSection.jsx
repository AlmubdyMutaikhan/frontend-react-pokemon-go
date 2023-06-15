import Pokemons from '../Pokemons/Pokemons';
import { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
const WrapMainSection = () => {
  const [totalLoadedPokemons, setTotalLoadedPokemons] = useState(8);
  const setCount = (count) => {
    setTotalLoadedPokemons(count);
  };
  return (
    <>
      <Navbar />
      <div>
        <div className="show">
          <span className="top">Total:</span>
          <h1 className="show">{totalLoadedPokemons}</h1>
          <span className="bottom">Loaded pokemons:</span>
        </div>
        <Pokemons setCount={setCount} />
      </div>
    </>
  );
};

export default WrapMainSection;
