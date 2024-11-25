import React, { useState, useEffect } from 'react';

import Home from "./Home/Home";
import OurStory from "./OurStory/OurStory";
import WeddingParty from "./WeddingParty/WeddingParty";
import Covid from "./Covid/Covid";
import Accommodations from "./Accommodations/Accommodations";
import Registry from "./Registry/Registry";
import Program from "./Program/Program"

import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import isMobile from './mobilecheck.js';

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
    name:"Details",
    page_link: "program",
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
    name:"COVID-19",
    page_link: "covid",
  },
];

const overflow_states = {open:"open",closed:"closed"};

function App() {

  useEffect(() => {

    setCustomUnits();
    window.addEventListener('resize', setCustomUnits);

    function setCustomUnits() {
      document.documentElement.style.setProperty('--cvh', `${window.innerHeight * 0.01}px`);
      document.documentElement.style.setProperty('--cvw', `${window.innerWidth * 0.01}px`);
    }
  }, []);

  const [overflow_state,setOverflowState] = useState(overflow_states.closed);

  const top_level_class = (()=>{
    const overflow_open = overflow_state;
    const is_mobile = isMobile()===true?"is_mobile":"is_desktop";
    return `${is_mobile} ${overflow_open}`;
  })()

  function getPage(){
    const page = getCurrentPage();
    if( page==="party" ){
      return (<WeddingParty></WeddingParty>);
    }else if( page==="story" ){
      return (<OurStory></OurStory>);
    }else if( page==="registry" ){
      return (<Registry></Registry>);
    }else if( page==="accommodations" ){
      return (<Accommodations></Accommodations>);
    }else if( page==="covid" ){
      return (<Covid></Covid>);
    }else if( page==="program" ){
      return (<Program></Program>);
    }else{
      return (<Home></Home>);
    }
  }

  return (
    <div className={top_level_class}>
        <div className="home_outer" onClick={()=>{}}>
            <OverflowButton setOverflowState={setOverflowState} overflow_state={overflow_state}></OverflowButton>
              <div className="leaves_img" id="leaves1">
                  <img src={leaves} className="leaves_src"></img>
              </div>
              <div className="centerContentWrapper">
                <TopBar overflow_state={overflow_state} setOverflowState={setOverflowState}></TopBar>
                <Router><Route path="/" render={getPage} /></Router>
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

function TopBar(props:{overflow_state:string,setOverflowState:Function}){

  const [underlined_element,setUnderlinedElement] = useState(getCurrentPage());

  const top_bar_elements = top_bar_list.map((cur, i, arr)=>{

    const page = getCurrentPage();

    function handleClick(){
      const s = cur.page_link==="/"?"/":`/#${cur.page_link}`;
      // window.location.href = s;
      window.location.replace(s);
      props.setOverflowState(overflow_states.closed);
      setUnderlinedElement(cur.page_link); // do this last so the other parts can happen first
    }

    console.log({page});
    console.log({cur_page:cur.page_link});
    if( page===cur.page_link ){
      console.log('on page '+cur.name)
    } 

    const inline_style = {
      textDecoration: underlined_element===cur.page_link?"underline":""
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
  const hash_page_regex_result = /#([a-z]+)/.exec(window.location.href);
  const page = hash_page_regex_result===null?hash_page_regex_result:hash_page_regex_result[1];

  if(page===null){
    return "/";
  }
  return page;
}

export default App;
