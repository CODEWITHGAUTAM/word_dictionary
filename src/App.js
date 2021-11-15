import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";

//import About from "./components/About";

function App() {
  const [mode,darkmode]=useState('light');
  
  const togglemode=()=>{
    if(mode==='light')
    {
      darkmode('dark');
      document.body.style.backgroundColor='#020926';
    }
    else{
      darkmode('light');
      document.body.style.backgroundColor='white';
    }
  }
  return (
   
  
    <><Navbar title="Word Counter" home="Home" about="About Us" mode={mode} togglemode={togglemode} />
    
    <Form heading="Enter Text to Analyze!!" mode={mode}/>
    {/*<About aboutauthor="About Developer" contactauthor="Developer Achievements" links="Contact Developer"/>*/}
    
    
    </>
    
   
    
      
  );
}

export default App;
