import React,{useState} from 'react'





const Typing = () => {
  
  const [text,SetText]=useState("");
  const Randomparagraph = document.querySelector('.Randomparagraph');
  const onchange=(e)=>{
      SetText(e.target.value);
      if(text.split("")[0] == Randomparagraph.innerText){
        console.log("correct");
    }
    else{
        console.log("incorrect");
        console.log(Randomparagraph.innerText)
        console.log(text.split("")[0])
      }
  }

  
  
  return (
    <div className="container">
      <div className="mb-3">
        <div className="row">
            <input type="text" onChange={onchange} />
          <div className="col-lg-8 col-md-12 col-sm-12">
            <div className="Randomparagraph">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus maiores beatae excepturi itaque similique velit omnis recusandae explicabo sapiente, nemo sed iure saepe quidem animi accusamus, repellat accusantium tenetur molestiae voluptatem. Ipsam nisi voluptates optio dolore sunt sit porro soluta?
            </div>
            <div className="btngroup">
            <button className="btn randomBtn">
              Generate Random paragraph
            </button>
            </div>
          </div>
        </div>
      <p className="createdBy">Created By <a href="https://nileshlad.vercel.app" target="_blank">Nilesh</a></p>
      </div>
    </div>
  )
}

export default Typing