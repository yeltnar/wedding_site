import React from 'react';
import logo from './logo.svg';
import './App.css';

import img from "./img/the-one.gif"; 

function App() {
  return (
    <div className="image_holder">
      <img src={img} alt="Smiley face"></img>
    </div>
  );
}

export default App;
