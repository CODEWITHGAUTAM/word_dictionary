import React,{useState} from "react";
//import Navbar from "./navbar";

export default function About(props) {
    
     const [myStyle,setmyStyle] = useState({
           
            color:'black',
            backgroundColor:'white',
            
        })
        const [btnText,setbtnText]=useState("Enable Dark Mode");

     
     const ToggleMode=()=>
     {
         if(myStyle.color==='black')
         {
             setmyStyle({
                 color:'white',
                 backgroundColor:'black',
                 border:'2px solid white'


             })
             setbtnText("Enable Light Mode");
         }
         else{
             setmyStyle({
                 color:'black',
                 backgroundColor:'white'
             })
             setbtnText("Enable Dark mode");
         }
     }

    
  return (
      <>
    <div className="container" style={myStyle}>
      <div className="accordion accordion-flush my-3" id="accordionFlushExample"  >
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingOne">
            <button
              className="accordion-button collapsed"  style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              {props.aboutauthor}
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body"  style={myStyle}>
              The Developer of This Site is <b>Gautam Singh Rajput</b>.He is currently pursuing his B.tech degree of 
              Computer Science from Techno Main Salt Lake,Kolkata.The Developer is born in 2001 and completed his schooling
              from his Hometown Saharsa(Bihar).The developer had prepared to crack IIT but he failed to crack it .
              Developer is very interseted to Learn about Websites,Apps and always wanted to learn something new in this field.
              His dream is to become a Software Development Engineer and wanted to work for the Big Product Based Compony.

            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingTwo">
            <button
              className="accordion-button collapsed"  style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              {props.contactauthor}
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body"  style={myStyle}>
              The developer has secured a rank of 27121 in JEE-MAINS and 4178 in WBJEE.The developer has also worked on Android Apps
              Development.He made apps like <b>Calculator,Camera clone,Music player Clone,Gallery Clone</b> etc.He has also worked 
              on Django Framework.He is currently working on ReactJS(as Full Stack Developer).The developer has recently joined 
              Walkover University Program to get an Internship.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingThree">
            <button
              className="accordion-button collapsed"  style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              {props.links}
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body"  style={myStyle}>
              <li>
              Contact Number-7424960746,8619596069
              </li><li>
              Email-gautamsingh7424@gmail.com
              </li>
              <li>
              <a href="https://www.linkedin.com/in/gautam-singh-rajput-a34149197/">LinkedIn</a>
              </li>
              <li>
              <a href="https://github.com/CODEWITHGAUTAM">Github</a>
              </li>
              <li>
              <a href="https://www.instagram.com/me_gautam_rajput/">Instagram</a>
              </li>
              <li>
              <a href="https://twitter.com/GautamK80224946">Twitter</a>
              </li>

              
            </div>
          </div>
        </div>
      </div>
     
    </div>
    <div className="container" style={myStyle}>
    <button type="button" class="btn btn-primary" onClick={ToggleMode}>{btnText}</button>
    </div>
    </>
    
  );
  
  }
