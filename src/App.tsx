import React from 'react';

// import TheOne from "./TheOne/TheOne";
import Home from "./Home/Home"
import CountDown from "./CountDown/CountDown"
// import SaveTheDate from "./SaveTheDate/SaveTheDate"

function App(){
  
  const page = new URLSearchParams(window.location.search).get('p');

  if( page==="countdown" ){
    return <CountDown></CountDown>
  }else{
    return <Home></Home>
  }

  return (<Home></Home>);
}

export default App;
