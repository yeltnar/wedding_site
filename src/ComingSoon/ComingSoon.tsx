import React from 'react';

import "./Registry.css"

function Registry(props:any){

    return (
        <div className="coming_soon_outer" onClick={onClick}>
            <div className="coming_soon_outer_content">
                <div >Coming Soon</div>
            </div>
        </div>
    );

    function onClick(){
        // props.history.push("/gif");
    }
}

export default Registry;