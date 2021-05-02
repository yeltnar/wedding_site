import React, { useEffect, useState } from 'react';

import "./Accommodations.css";

const hotel_link = "https://hamptoninn.hilton.com/en/hp/groups/personalized/D/DALMYHX-SBB-20211119/index.jhtml?WT.mc_id=POG";

function Home(props: any) {

    return (
        <>
            <div className="centerContent accommodations">
                <div className="txt">
                    <div>For your convenience, a block of rooms has been reserved. Use the link below to make your reservation!</div>
                    <br/>
                    <div><a href={hotel_link}>Hampton Inn & Suites McKinney</a></div>
                    {/* <br/> */}
                    <div>2008 N Central Expy, McKinney, TX 75069</div>
                    {/* <br/> */}
                    <div>+1 972-542-6622</div>
                </div>
            </div>
        </>
    );
}

export default Home;