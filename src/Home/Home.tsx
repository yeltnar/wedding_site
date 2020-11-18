import React from 'react';

import "./Home.css"
import leaves from "../img/leaves and shit.png"
import img from "../img/the-one.gif"; 

function Home(props:any){

    return (
        <div className="home_outer" onClick={onClick}>
                    <div className="leaves_img" id="leaves1">
                        <img src={leaves} className="leaves_src"></img>
                    </div>
                    <div className="centerContentWrapper">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div className="centerContentGrid">
                            <div className="centerContent">
                                <div className="img_txt">November 20, 2021</div>
                                <div className="the_one_img_wrapper" style={{backgroundColor:"pink"}}>
                                    <div className="the_one_img" style={{backgroundColor:"green"}}>
                                        <img src={img} ></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className="leaves_img" id="leaves2">
                        <img src={leaves} className="leaves_src"></img>
                    </div>
        </div>
    );

    function onClick(){
        // props.history.push("/gif");
    }
}

export default Home;