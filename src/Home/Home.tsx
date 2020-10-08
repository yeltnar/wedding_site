import React from 'react';

import "./Home.css"
import leaves from "../img/leaves and shit.png"
import img from "../img/the-one.gif"; 

function Home(props:any){

    return (
        <div className="home_outer" onClick={onClick}>
            <div className={"home_outer_flex"}>
                <div className="home_outer_content">
                    <img src={leaves} id="leaves1"></img>
                    <div className="centerContent">
                        <div className="img_txt">November 20, 2021</div>
                        <img src={img} alt="nice"></img>
                    </div>
                    <img src={leaves} id="leaves2"></img>
                </div>
            </div>
        </div>
    );

    function onClick(){
        // props.history.push("/gif");
    }
}

export default Home;