import React from 'react';

import "./Covid.css"

function Covid(props:any){

    return (
        <div className="outer" onClick={onClick}>
            <div className="outer_content">
                <div >No one knows what next November will look like, but we will do our best to not spread COVID further. Check here for updates!</div>
            </div>
        </div>
    );

    function onClick(){
        // props.history.push("/gif");
    }
}

export default Covid;