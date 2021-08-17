import './Pokemon.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';
 
const Pokemon = (props) => {
  
  return(
        <div className="pokemon">
            <p>{props.name}</p>
              <LazyLoadImage 
                alt={props.name}
                src={props.img ? props.img : 'https://vistapointe.net/images/unknown-2.jpg'}
                
                effect="opacity"
              />
        </div>
    )
}

export default Pokemon;