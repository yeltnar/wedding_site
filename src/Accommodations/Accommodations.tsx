import React, { useEffect, useState } from 'react';

import "./Accommodations.css";

const hotel_link = "https://hamptoninn.hilton.com/en/hp/groups/personalized/D/DALMYHX-SBB-20211119/index.jhtml?WT.mc_id=POG";

function Home(props: any) {

    return (
        <>
            <div className="centerContent home">
                <div className="txt">Make a reservation at <a href={hotel_link}>Hampton Inn &amp Suites McKinney</a></div>
            </div>
        </>
    );
}

export default Home;