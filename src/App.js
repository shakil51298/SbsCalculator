
import { createContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import SbsCal from './Components/SbsCal';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';

export const myContext = createContext();



function App() {
  const [context, setContext] = useState({});
  return (
    <myContext.Provider value={[context, setContext]}>
      <Router className="App">
        <Switch>
          <Container>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/sbsCalculator">
              <SbsCal />
            </Route>
          </Container>
        </Switch>
      </Router>
    </myContext.Provider>

  );
}

export default App;
