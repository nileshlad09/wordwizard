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
  const [wordMap]= useState({});

  function countRepeatedWords(sentence) {
    let words = sentence.split(" ");
  
    for (let i = 0; i < words.length; i++) {
      let currentWordCount = wordMap[words[i]];
      let count = currentWordCount ? currentWordCount : 0;
      wordMap[words[i]] = count + 1;
    }
    return wordMap;
  }
  console.log(countRepeatedWords(text));

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
          <div className="col-lg-4 col-md-12">
            <div
              className="text-summary "
            >
              <h3>Your Text Summary</h3>
              <p>Total words : {text ? text.split(/\s+/).length : 0}</p>
              <p>Total characters : {text.replaceAll(' ', '').length}</p>
              <p>{(0.008 *  (text?text.replaceAll(' ', '').length:0)).toFixed(2)} minutes read</p>
              <h3>Preview</h3>
              <p>{text}</p>
            </div>
          </div>
        </div>
      <p className="createdBy">Created By <a href="https://nileshlad.vercel.app" target="_blank">Nilesh</a></p>
      </div>
    </div>
  );
};

export default TextForm;
