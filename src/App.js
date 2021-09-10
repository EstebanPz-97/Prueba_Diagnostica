import {Prueba} from "./components/pruebatecnica/Prueba.js";
import { Preguntas } from "./components/Preguntas";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  
  return (
    <div className="App">
         <Router>
         <Switch>
          <Route path="/prueba">
        <Preguntas />
          </Route>
          <Route path="/">
            <Prueba/>
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
