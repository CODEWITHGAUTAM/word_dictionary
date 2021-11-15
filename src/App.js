import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
//import About from "./components/About";

function App() {
  return (
   
  
    <><Navbar title="Word Counter" home="Home" about="About Us" />
    <Form heading="Enter Text to Analyze!!" />
    {/*<About aboutauthor="About Developer" contactauthor="Developer Achievements" links="Contact Developer"/>*/}
    
    
    </>
    
   
    
      
  );
}

export default App;
