import React, { useEffect, useState } from 'react';

import "./Accommodations.css"
// import img from "../../public/weddingparty/Drulie.jpg"; 
const img = '/weddingparty/Drulie.jpg';

const event_date_str = "November 20, 2021 16:00";

const MS_IN_SEC = 1000;
const MS_IN_MIN = MS_IN_SEC*60;
const MS_IN_HR = MS_IN_MIN*60;
const MS_IN_DAY = MS_IN_HR*24;

function Home(props: any) {

    return (
        <>
            <div className="centerContent home">
                <div className="img_txt">Accommodations coming soon</div>
            </div>
        </>
    );
}

export default Home;