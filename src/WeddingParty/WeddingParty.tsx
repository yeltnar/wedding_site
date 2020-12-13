import React, { useState, useEffect } from 'react';

import './WeddingParty.css';

import PersonCard from './PersonCard';
import wedding_people from './wedding_people.json';


export default function WeddingParty(){

    const boys_cards = wedding_people.boys.map((cur)=>{
        return <PersonCard name={cur.name} img={cur.img} relation={cur.relation}></PersonCard>
    });

    const girls_cards = wedding_people.girls.map((cur)=>{
        return <PersonCard name={cur.name} img={cur.img} relation={cur.relation}></PersonCard>
    });

    return (
        <div className="WeddingParty">
            <div className="WeddingPartyWrapper">
                {[...girls_cards,...boys_cards]}
            </div>
        </div>
    );
}
