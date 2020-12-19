import React, { useEffect } from 'react';

import "./Home.css"
import img from "../img/the-one.gif"; 

function Home(props: any) {

    useEffect(()=>{

        setCustomUnits();
        window.addEventListener('resize', setCustomUnits);
        
        function setCustomUnits(){
            document.documentElement.style.setProperty('--cvh', `${window.innerHeight * 0.01}px`);
            document.documentElement.style.setProperty('--cvw', `${window.innerWidth * 0.01}px`);
        }
    },[]);

    return (
        <>
            <div className="centerContent">
                <div className="img_txt">November 20, 2021</div>
                <div className="the_one_img"><img src={img} ></img></div>
            </div>
        </>
    );
}

export default Home;