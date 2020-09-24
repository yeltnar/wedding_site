import React from 'react';
import './TheOne.css';

import img from "../img/the-one.gif"; 

export default function TheOne(){
    return (
        <div className="image_holder">
          <img src={img} alt="Smiley face"></img>
        </div>
      );
}