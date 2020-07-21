import React, { useState } from 'react';


function App() {
  let Time = new Date().toLocaleTimeString();
  var [time,setTime]=useState(Time)
  setInterval(function(){setTime(time=new Date().toLocaleTimeString())}, 1000);

  return (

    <div className="container">
      <h1>{time}</h1>
      <button onClick={()=>setTime(time=new Date().toLocaleTimeString())}>Get Time</button>
    </div>
  );
}

export default App;
