import React from 'react';

import "./OurStory.css";
import img from "../img/the-one.gif"; 

function OurStory(props:any){

    return (        
        <>
            <div className="centerContent our_story">
                <div className="img_txt">{"We met."}</div>
                <div className="img_txt">{"Here we are."}</div>
                <div className="the_one_img"><img src={img} ></img></div>
            </div>
        </>
    );

    function onClick(){
        // props.history.push("/gif");
    }
}

export default OurStory;