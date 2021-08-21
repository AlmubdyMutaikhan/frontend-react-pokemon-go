const axios = require('axios');
const fs = require('fs');

let jsObj = {pokemons : []};

axios.get('https://pokeapi.co/api/v2/pokemon?limit=1118')
    .then(res => {
        res.data.results.forEach(pokemon => {
            jsObj.pokemons.push(pokemon.name);
        })

        const json = JSON.stringify(jsObj);
        fs.writeFile('./pokemonName.json', json, 'utf8', ()=>{});
    })
    



