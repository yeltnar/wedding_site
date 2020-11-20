import React, { useEffect } from 'react';

import "./Home.css"
import leaves from "../img/leaves and shit.png"
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
        <div className="home_outer" onClick={onClick}>
            <div className="leaves_img" id="leaves1">
                <img src={leaves} className="leaves_src"></img>
            </div>
            <div className="centerContentWrapper">
                <div className="centerContent">
                    <div className="img_txt">November 20, 2021</div>
                    <div className="the_one_img"><img src={img} ></img></div>
                </div>
            </div>
            <div className="leaves_img" id="leaves2">
                <img src={leaves} className="leaves_src"></img>
            </div>
            <div className="blackBox top"></div>
            <div className="blackBox bottom"></div>
        </div>
        </>
    );

    function onClick() {
        // props.history.push("/gif");
    }
}

export default Home;