import React, { useState } from "react";

export default function Form(props) {
  const [text, setText] = useState("");
  const ToUppercase = () => {
    //console.log("uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
  };
  const ToLowercase = () => {
    //console.log("Lowercase was clicked");
    let newText2 = text.toLowerCase();
    setText(newText2);
  };
  const RemoveSpace = () => {
    //console.log("Extraspace was clicked");
    let newText3 = text.replace(/\s+/g, " ").trim();
    setText(newText3);
  };
  const ClearText = () => {
    //console.log("cleartext button was clicked");
    let newText4 = "";
    setText(newText4);
  };
  const CopyText = () => {
    var text5 = document.getElementById("exampleFormControlTextarea1");
    text5.select();
    navigator.clipboard.writeText(text5.value);
  };
  const handleOnchange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>Text Copied!!</strong> 
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
      <div className="container my-3">
        <h1>{props.heading}</h1>
      </div>
      <div className="container">
        <div className="mb-3">
          <label
            htmlFor="exampleFormControlTextarea1"
            className="form-label "
          ></label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            value={text}
            onChange={handleOnchange}
          ></textarea>
          <button
            type="button"
            onClick={ToUppercase}
            className="btn btn-primary my-3 mx-2"
          >
            Convert to UpperCase
          </button>
          <button
            type="button"
            onClick={ToLowercase}
            className="btn btn-primary my-3 mx-2"
          >
            Convert to LowerCase
          </button>
          <button
            type="button"
            onClick={RemoveSpace}
            className="btn btn-primary my-3 mx-2"
          >
            Remove Extra Space
          </button>
          <button
            type="button"
            onClick={ClearText}
            className="btn btn-primary my-3 mx-2"
          >
            Clear Text
          </button>
          <button
            type="button"
            onClick={CopyText}
            className="btn btn-primary my-3 mx-2"
          >
            CopyText
          </button>
        </div>
      </div>
      <div className="container my-2">
        <h2>Your Text Summary</h2>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>
          {0.08 *
            text.split(/\s+/).filter((element1) => {
              return element1.length !== 0;
            }).length}{" "}
          Minutes Read
        </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
