import React, { useState } from "react";
import PropTypes from 'prop-types'
import About from "./About";


export default function Navbar(props) {
  const [myStyle,setmyStyle]=useState({
    color:'black',
    backgroundColor:'white'

  })
  const [btnText,setbtnText]=useState("Enable dark mode");
  const ToggleMode=()=>
  {
    if(myStyle.color==='black')
    {
      setmyStyle(
        {
          color:'white',
          backgroundColor:'black'

        }
        
      )
      setbtnText("Enable White Mode");
      

    }
    else{
      setmyStyle(
        {
          color:'black',
          backgroundColor:'white'

        }
      )
      setbtnText("Enable White Mode");


    }
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid" style={myStyle}>
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
        <button
          className="navbar-toggler" style={myStyle}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
               {props.home}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/About">
                {props.about}
              </a>
            </li>
          </ul>
          <form className="d-flex">
          <div className="form-check form-switch">
         <input className="form-check-input" onClick={ToggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{btnText}</label>
         </div>
           
          </form>
        </div>
      </div>
    </nav>
  );
}
Navbar.propTypes={
  title:PropTypes.string,
  home:PropTypes.string,
  about:PropTypes.string

}
