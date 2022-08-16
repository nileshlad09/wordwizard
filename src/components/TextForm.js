import React, { useState } from "react";

const TextForm = (props) => {
  const [text, setText] = useState("");

  const CTuppercase = () => {
    const newText = text.toUpperCase();
    setText(newText);
  };

  const CTlowercase = () => {
    const newText = text.toLowerCase();
    setText(newText);
  };

  const CTclipboard = () => {
    const copyText = document.getElementById("myBox");
    copyText.select();
    navigator.clipboard.writeText(text);
  };

  const ClearText = () => {
    setText("");
  };

  const handleExtraSpaces = () => {
    const newText = text.split(/[ ]+/);
    console.log(newText);
    setText(newText.join(" "));
  };

  const onChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="container">
      <div className="mb-3">
        <div className="row">
          <div className="col-lg-8 col-md-12 col-sm-12">
            <h1>Enter Your Text Here</h1>
            <textarea
              className="form-control "
              id="myBox"
              rows="6"
              value={text}
              onChange={onChange}
            ></textarea>
            <div className="btngroup">
            <button className="btn" onClick={CTuppercase}>
              Convert To Uppercase
            </button>
            <button className="btn" onClick={CTlowercase}>
              Convert To Lowercase
            </button>
            <button className="btn " onClick={CTclipboard}>
              Copy to Clipboard
            </button>
            <button className="btn " onClick={handleExtraSpaces}>
              Romove Extra spaces
            </button>
            <button className="btn " onClick={ClearText}>
              Clear
            </button>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12">
            <div
              className="text-summary "
            >
              <h1>Your Text Summary</h1>
              <p>Total words : {text.length ? text.split(" ").length : 0}</p>
              <p>Total characters : {text.split("").length}</p>
              <p>{0.008 * text.split(" ").length} minutes read</p>
              <h3>Preview</h3>
              <p>{text}</p>
            </div>
          </div>
        </div>
      <p>Created By <a href="https://nileshlad09.github.io/portfolio-nilesh/" target="_blank">Nilesh</a></p>
      </div>
    </div>
  );
};

export default TextForm;
