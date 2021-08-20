
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';

import './App.css';
import About from './components/About/About';
import Navbar from './components/Navbar/Navbar';
import Pokemon from './components/Pokemon/Pokemon';

import WrapMainSection from './components/WrapMainSection/WrapMainSection';

function App() {
  

  return (
    <Router>
          <div className="app-container">
            <Navbar/>
            <Switch>
              <Route path="/" exact component={WrapMainSection}></Route>
              <Route path="/about" component={About} />
              <Route path="/pokemons/:name" component={Pokemon} />
            </Switch>
            
        </div>
    </Router>
    
  );
}

export default App;
