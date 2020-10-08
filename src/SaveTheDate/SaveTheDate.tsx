import React from 'react';
import { withRouter } from "react-router-dom";

import "./SaveTheDate.css"
import leaves from "../img/leaves and shit.png"
import img from "../img/the-one.gif"; 

function SaveTheDate(props:any){

    return(
        <> 
            <img src={leaves} id="leaves1"></img>
            <img src={leaves} id="leaves2"></img>
            <div className="centerContent">
                <div className="img_txt">November 20, 2021</div>
                <img src={img} alt="nice"></img>
            </div>
        </>
    );

    return (
        <div className="save_the_date_outer" onClick={onClick}>
            <div className={"save_the_date_outer_flex"}>
                <div className="save_the_date_outer_content">
                    {/* 
                    <div className="centerContent">
                        <div className="img_txt">November 20, 2021</div>
                        <img src={img} alt="nice"></img>
                    </div>
                    <img src={leaves} id="leaves2"></img> */}
                </div>
            </div>
        </div>
    );

    function onClick(){
        // props.history.push("/gif");
    }
}

export default withRouter(SaveTheDate);