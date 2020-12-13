import React, { useState, useEffect } from 'react';

import './personCard.css';

export default function PersonCard(props:{name:string, img:string, relation:string}){
    return (
        <div className="personCard">
            <div>{props.name}</div>
            <div><img src={props.img}></img></div>
            <div>{props.relation}</div>
        </div>
    );
}