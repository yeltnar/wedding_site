import React, { useState, useEffect } from 'react';

import './WeddingParty.css';

import PersonCard from './PersonCard';
import wedding_people from './wedding_people.json';


export default function WeddingParty(){

    const boys_cards = wedding_people.boys.reduce((acc:JSX.Element[],cur)=>{
        const ele = <PersonCard name={cur.name} img={cur.img} relation={cur.relation}></PersonCard>
        if( cur.hide !==true ){
            acc.push(ele);
        }
        return acc
    },[]);

    const girls_cards = wedding_people.girls.reduce((acc:JSX.Element[],cur)=>{
        const ele = <PersonCard name={cur.name} img={cur.img} relation={cur.relation}></PersonCard>
        if( cur.hide !==true ){
            acc.push(ele);
        }
        return acc
    },[]);

    return (
        <div className="WeddingParty">
            <div className="WeddingPartyWrapper">
                {[...girls_cards,...boys_cards]}
            </div>
        </div>
    );
}
