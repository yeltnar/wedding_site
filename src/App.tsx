import React from 'react';

// import TheOne from "./TheOne/TheOne";
import Home from "./Home/Home"
import WeddingParty from "./WeddingParty/WeddingParty"
// import CountDown from "./CountDown/CountDown"
// import SaveTheDate from "./SaveTheDate/SaveTheDate"

import leaves from "./img/leaves and shit.png"

const top_bar_list = [
  {
    name:"Home",
    page_link: "",
  },
  {
    name:"Our Story",
    page_link: "story",
  },
  {
    name:"Wedding Party",
    page_link: "party",
  },
  {
    name:"Registry",
    page_link: "registry",
  },
  {
    name:"Accommodations",
    page_link: "accommodations",
  },
  {
    name:"COVID-19 Sux",
    page_link: "covid",
  }
];

function App(){
  
  const page = getPage();

  let content;

  if( page==="party" ){
    content = (<WeddingParty></WeddingParty>);
  }else{
    content = (<Home></Home>);
  }

  return (
    <div>
        <div className="home_outer" onClick={()=>{}}>
              <div className="leaves_img" id="leaves1">
                  <img src={leaves} className="leaves_src"></img>
              </div>
              <div className="centerContentWrapper">
                <TopBar></TopBar>
                {content}
              </div>
              <div className="leaves_img" id="leaves2">
                  <img src={leaves} className="leaves_src"></img>
              </div>
              <div className="blackBox top"></div>
              <div className="whiteBox bottom"></div>
          </div>
    </div>
  );
}

function TopBar(){

  const top_bar_elements = top_bar_list.map((cur, i, arr)=>{

    function handleClick(){
      const s = cur.page_link===""?"/":`/?p=${cur.page_link}`;
      window.location.href = s;
    }

    const page = getPage();
    console.log({page});
    if( page===cur.page_link || (page===undefined && cur.page_link==="") ){
      console.log('on page '+cur.name)
    } 

    return (<div onClick={handleClick} key={i}>{cur.name}</div>);
  });

  return (
    <div id="topbar">
      {top_bar_elements}
    </div>
  );
}

function getPage(){
  return new URLSearchParams(window.location.search).get('p');
}

export default App;
