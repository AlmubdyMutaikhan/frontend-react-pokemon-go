import { useState } from 'react/cjs/react.development';
import './Search.css';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Load from '../animations/loading/Load';
const Search = () => {
    const [pokemon, setPokemon] = useState('');
    const [redirect, setRedirect] = useState(false);
    const [notFound, setNotFound] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
            .then(res => {
                setRedirect(true);
                setLoading(false);
            })
            .catch(err => {
                setRedirect(false);
                setLoading(false);
                setNotFound(true);

                setTimeout(()=>{
                    setNotFound(false);
                }, 3000);
             
                
            })
    }


    const handleChange = (e) => {
        setPokemon((e.target.value).trim());
    }



    return(<div className="search-container">
        {loading && <div className="center"><Load/></div>}
        {notFound && <h1 className="center">Not found</h1>}
        
        <div className="form">
            <h1>Search your pokemon</h1>
            <input type="text" onChange={handleChange} placeholder={`Type pokemon name`}/>
            <button onClick={handleSubmit}>Find</button>
            
            {redirect && <Redirect to={`/pokemons/${pokemon}`} />}
        </div>
        
   
    </div>)
}

export default Search;