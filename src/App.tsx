import React from 'react';
import logo from './logo.svg';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import TheOne from "./TheOne/TheOne";
import Home from "./Home/Home"

function App() {

  return (
    
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/gif">
          <TheOne></TheOne>
        </Route>
      </Switch>
    </Router>
  );


}

export default App;
