import React from 'react';
import Home from './comp/Home';
import Contact from './comp/Home';
import About from './comp/About';
import Work from './comp/Work';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  return (
    <Router>
        <Switch>
          <Route path="/" exact><Home /></Route>
          <Route path="/about"><About /></Route>
          <Route path="/contact"><Contact /></Route>
          <Route path="/work"><Work /></Route>
        </Switch>
    </Router>
  );
}
export default App;
