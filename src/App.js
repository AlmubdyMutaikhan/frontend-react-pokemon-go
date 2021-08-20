
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';

import './App.css';
import InvalidPage from './components/404/404';
import About from './components/About/About';
import Navbar from './components/Navbar/Navbar';
import Pokemon from './components/Pokemon/Pokemon';
import Search from './components/Search/Search';

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
              <Route path="/search" component={Search} />
              <Route path="*" component={InvalidPage} />
            </Switch>
            
        </div>
    </Router>
    
  );
}

export default App;
