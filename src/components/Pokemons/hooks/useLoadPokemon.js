import { useEffect, useState } from 'react';
import axios from 'axios';

const useGetPokemons = (loadedPokemons) => {
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [pokemons, setPokemons] = useState([]);
  const [nextURI, setNextURI] = useState(
    'https://pokeapi.co/api/v2/pokemon?limit=8'
  );
  const [totalCount, setTotalCount] = useState(8);

  const loadPokemonsCallBack = () => {
    setLoading(true);
    let cancel = '';
    const request = {
      method: 'GET',
      url: nextURI,
    };

    axios(request).then((res) => {
      console.log('fetching data...');
      // set next uri
      if (!res.data.next) {
        console.log('end of pokemons');
      }
      res.data.next ? setNextURI(res.data.next) : setHasMore(false);

      res.data.results.forEach(async (pokemon) => {
        const res = await fetch(
          'https://pokeapi.co/api/v2/pokemon/' + pokemon.name
        );
        const data = await res.json();
        // set pokemons into an array
        setPokemons((prevArray) => [...prevArray, data]);
        setTotalCount((prev) => prev + 1);
      });

      setLoading(false);
    });
  };

  useEffect(loadPokemonsCallBack, [loadedPokemons]);

  return { pokemons, loading, hasMore, totalCount };
};
export default useGetPokemons;
