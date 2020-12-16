import React, { useState } from 'react';

// import TheOne from "./TheOne/TheOne";
import Home from "./Home/Home"
import WeddingParty from "./WeddingParty/WeddingParty"
import ComingSoon from "./ComingSoon/ComingSoon"
// import CountDown from "./CountDown/CountDown"
// import SaveTheDate from "./SaveTheDate/SaveTheDate"

import "./App.css"
import isMobile from './mobilecheck.js'

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

const overflow_states = {open:"open",closed:"closed"};

function App(){

  const [overflow_state,setOverflowState] = useState(overflow_states.closed);
  
  const page = getCurrentPage();

  let content;

  if( page==="party" ){
    content = (<WeddingParty></WeddingParty>);
  }else if( page==="story" ){
    content = (<ComingSoon></ComingSoon>);
  }else if( page==="registry" ){
    content = (<ComingSoon></ComingSoon>);
  }else{
    content = (<Home></Home>);
  }

  const top_level_class = (()=>{
    const overflow_open = overflow_state;
    const is_mobile = isMobile()===true?"is_mobile":"is_desktop";
    return `${is_mobile} ${overflow_open}`;
  })()

  return (
    <div className={top_level_class}>
        <div className="home_outer" onClick={()=>{}}>
            <OverflowButton setOverflowState={setOverflowState} overflow_state={overflow_state}></OverflowButton>
              <div className="leaves_img" id="leaves1">
                  <img src={leaves} className="leaves_src"></img>
              </div>
              <div className="centerContentWrapper">
                <TopBar overflow_state={overflow_state}></TopBar>
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

function OverflowButton(props:{overflow_state:string,setOverflowState:Function}){

  function overflowButtonClick(){
    if(props.overflow_state===overflow_states.closed){
      props.setOverflowState(overflow_states.open);
    }
    else if(props.overflow_state===overflow_states.open){
      props.setOverflowState(overflow_states.closed);
    }
  }

  return (
    <div className="overflow" onClick={overflowButtonClick}>
        <img src='/overflow_icon.png' className="overflow_icon"></img>
    </div>
  );
}

function TopBar(props:{overflow_state:string}){

  const top_bar_elements = top_bar_list.map((cur, i, arr)=>{

    const page = getCurrentPage();

    function handleClick(){
      const s = cur.page_link===""?"/":`/?p=${cur.page_link}`;
      window.location.href = s;
    }

    console.log({page});
    console.log({cur_page:cur.page_link});
    if( page===cur.page_link ){
      console.log('on page '+cur.name)
    } 

    const inline_style = {
      textDecoration: page===cur.page_link?"underline":""
    };

    return (<div onClick={handleClick} key={i} style={inline_style}>{cur.name}</div>);
  });
  
  const style=(()=>{
    let height=0;

    const e = document.querySelector('.topbar_wrapper');

    if( document!==undefined && e!==null && props.overflow_state!==overflow_states.closed ){
      height = e.getBoundingClientRect().height;
    }

    return {
      height
    }
  })();

  return (
    <div id="topbar" style={style}>
      <div className="topbar_wrapper">
        {top_bar_elements}
      </div>
    </div>
  );
}

function getCurrentPage(){
  let page = new URLSearchParams(window.location.search).get('p')
  if(page===null){
    return ""
  }
  return page;
}

export default App;
