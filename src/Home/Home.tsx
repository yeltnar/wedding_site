import React from 'react';
import { withRouter } from "react-router-dom";


import "./Home.css"

function Home(props:any){

    return (
        <div className="home_outer" onClick={onClick}>
            <div className="home_outer_content">
                <div >Coming Soon</div>
            </div>
        </div>
    );

    function onClick(){
        props.history.push("/gif");
    }
}

export default withRouter(Home);