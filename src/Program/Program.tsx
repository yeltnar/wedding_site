import React from 'react';

import "./Program.css"

function Program(props:any){

    const events = [
        {
            time:"4:30p",
            title:"Ceremony",
            icon:"/icons/RINGS.svg",
        },
        {
            time:"5:00p",
            title:"Cocktails",
            icon:"/icons/DRINKING.svg",
        },
        {
            time:"6:00p",
            title:"Reception",
            // icon:"/icons/CUTLERY.svg",
            extra:"Although we love your littles ones, we respectfully request an adults-only reception. We will be unable to accommodate children outside of the wedding party."
        },
        {
            title:"Introductions / Toasts",
            icon:"/icons/CHAMPAGNE.svg"
        },
        {
            title:"Dinner",
            icon:"/icons/CUTLERY.svg"
        },
        {
            title:"Party",
            icon:"/icons/MUSIC.svg"
        },
        {
            title:"Cake",
            icon:"/icons/CAKE.svg"
        },
        {
            time:"10:00p",
            title:"Exit",
            icon:"/icons/JUST MARRIED.svg",
            extra:"Please note, Uber and Lyft will not be able to pick up guests from Bethel Rock. Please be sure to arrange transportation to and from the venue prior to the event."
        },
    ]

    const events_eles = events.map((c,i,a)=>{

        const bottom_line = i!==a.length-1 ? (<LineThing/>) : null;
        const main = c.time===undefined ? c.title : `${c.time} - ${c.title}`;
        const extra = c.extra===undefined ? null : (<div className="extra_text">{c.extra}</div>);
        const icon = c.icon===undefined? null : (<img className="icon" src={c.icon}/>);

        return (
            <div className="event">
                <div>{main}</div>
                {/* {bottom_line} */}
                {icon}
                {extra}
                {bottom_line}
            </div>
        );
    });

    return (
        <div className="Program" onClick={onClick}>
            <div className="ProgramWrapper">
                <div className="fancyFont page_title">Wedding Day Details</div>
                <div>―</div>
                <div>
                    <span className="fancyFont">Saturday, November 20, 2021</span>
                    <div>
                        <span>Bethel Rock Wedding Venue</span><br/>
                        5262 FM896, Leonard, TX 75452<br/>
                    </div>
                    <img className="icon" src="/icons/WEDDING LOCATION.svg"/><br/>
                </div>
                ―
                {/* <div>―</div> */}
                <div><span className="fancyFont">Timeline</span></div>
                {events_eles}
            </div>
        </div>
    );

    function onClick(){
        // props.history.push("/gif");
    }
}

function LineThing(){
    return (<div>|</div>);
}

export default Program;