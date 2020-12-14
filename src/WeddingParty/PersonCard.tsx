import React, { useState, useEffect } from 'react';

import './personCard.css';

export default function PersonCard(props:{name:string, img:string, relation:string}){
    return (
        <div className="personCard">
            <div className="person_name">{props.name}</div>
            <div><img src={props.img}></img></div>
            <div className="person_relation">{props.relation}</div>
        </div>
    );
}