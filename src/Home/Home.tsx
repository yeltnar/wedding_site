import React, { useEffect, useState } from 'react';

import "./Home.css"
// import img from "../../public/weddingparty/Drulie.jpg"; 
const img = '/weddingparty/Drulie.jpg';

const event_date_str = "November 20, 2021";
const event_date_str_time = "16:30";

const MS_IN_SEC = 1000;
const MS_IN_MIN = MS_IN_SEC*60;
const MS_IN_HR = MS_IN_MIN*60;
const MS_IN_DAY = MS_IN_HR*24;

function Home(props: any) {

    return (
        <>
            <div className="centerContent home">
                <div className="txt">Julie + Drew</div>
                <div className="txt">{event_date_str}</div>
                <div className="the_one_img"><img src={img} ></img></div>
                <CountDown event_date={new Date(`${event_date_str} ${event_date_str_time}`)}></CountDown>
            </div>
        </>
    );
}

const test_date = "November 19, 2021 11:59";

function CountDown(props:{event_date:Date}){

    const [now,setNow] = useState(new Date());

    useEffect(()=>{

        let interval_id:NodeJS.Timeout;

        function cb(){
            const new_now = new Date();
            const timeout_duration = (60*1000) - (new_now.getTime() % MS_IN_MIN);
            console.log({
                timeout_duration,
                now,
                new_now
            });
            interval_id = setTimeout(cb, timeout_duration);
            setNow(new_now);
        }

        cb();

        return ()=>{
            clearTimeout(interval_id);
        };

    },[])

    const diff = props.event_date.getTime() - now.getTime();

    const days = parseInt((diff/MS_IN_DAY)+"");
    const hrs = parseInt(((diff-(days*MS_IN_DAY))/MS_IN_HR)+"");
    const min = parseInt(((diff-(days*MS_IN_DAY + hrs*MS_IN_HR))/MS_IN_MIN)+"");

    const day_txt = days===1?'day':"days";
    const hrs_txt = days===1?'hr':"hrs" ;
    const min_txt = days===1?'min':"mins" ;

    const days_ago = diff>0 ? "" : " ago";

    const time_until_str = `${Math.abs(days)} ${day_txt} ${Math.abs(hrs)} ${hrs_txt} ${Math.abs(min)} ${min_txt}${days_ago}`;

    return (<div className={'countdown'} >{time_until_str}</div>);
}

export default Home;
