import React from 'react';

// import TheOne from "./TheOne/TheOne";
import Home from "./Home/Home"
import WeddingParty from "./WeddingParty/WeddingParty"
// import CountDown from "./CountDown/CountDown"
// import SaveTheDate from "./SaveTheDate/SaveTheDate"

import "./App.css"
import './mobilecheck.js'

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
  // {
  //   name:"Accommodations",
  //   page_link: "accommodations",
  // },
  // {
  //   name:"COVID-19 Sux",
  //   page_link: "covid",
  // }
];

function App(){
  
  const page = getCurrentPage();

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

    const page = getCurrentPage();

    function handleClick(){
      const s = cur.page_link===""?"/":`/?p=${cur.page_link}`;
      window.location.href = s;
    }

    console.log({page});
    if( page===cur.page_link ){
      console.log('on page '+cur.name)
    } 

    const inline_style = {
      textDecoration: page===cur.page_link?"underline":""
    };

    return (<div onClick={handleClick} key={i} style={inline_style}>{cur.name}</div>);
  });

  return (
    <div id="topbar">
      <div className="topbar_wrapper">
        {top_bar_elements}
      </div>
    </div>
  );
}

function getCurrentPage(){
  let page = new URLSearchParams(window.location.search).get('p')
  if(page===null){
    return "home"
  }
  return page;
}

export default App;
