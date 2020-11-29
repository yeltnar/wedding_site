import React, { useState, useEffect } from 'react';

const wedding_date = new Date("November 20, 2021");

const day = 1000 * 60 * 60 * 24;

export default function CountDown(){

    const [count_down_date,setCountDownDate] = useState( new Date() );

    useEffect(()=>{
        
        const interval_id = setInterval(()=>{
            setCountDownDate( new Date() );
        },1000);

        return ()=>{
            clearInterval(interval_id);
        }

    },[])

    return (
        <div>
            <div>{wedding_date.getTime()}</div>
            <div>{count_down_date.getTime()}</div>
            <div>{parseInt(""+(wedding_date.getTime() - count_down_date.getTime())/day)}</div>
        </div>
    );
}