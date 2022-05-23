import React,{useState} from 'react';

export default function Component2() {
    const [text,setText]=useState("hello students");
    const handleOnClick=()=>{
        //console.log("you have clicked the button")
        let  newText = text.toUpperCase();
        setText(newText);
        console.log(newText);
    }
    const handleOnChange=(event)=>{
        console.log("you attempted to change the text")
        setText(event.target.value);
    }
    const replaceStr=()=>{
      let repStr=text.replace("CU","TU");
      setText(repStr);
    
    }
    const handleOnClear=()=>{
      let newText="";
      setText(newText);


    }
    const submitvalidation=()=>{
      //let newText="this is website";
      //setText(newText);
      if (text.length<1){
        alert("please complete the form ")
      }
      else{
        alert("form submitted")
    }
    handleOnClear()
    }
    const slice=()=>{
      let newslice=text.slice(6,8);
      setText(newslice)
    }
    const concat=()=>{
       var text2="@gmail.com"
      let newconcat=text.concat(text2);
      setText(newconcat);
    }

  return (
    <>
    <div>
    <textarea className="form-control1" id="textbox" rows="10" cols="30" onChange={handleOnChange} value={text}></textarea><br></br>
    <button class="btn btn-primary mx-2" onClick={handleOnClick}>Button</button>
    <button class="btn btn-primary mx-2" onClick={replaceStr}>Replace</button>
    <button class="btn btn-primary mx-2" onClick={handleOnClear}>Clear</button>
    <button class="btn btn-primary mx-2" onClick={submitvalidation}>Submit</button>
    <button class="btn btn-primary mx-2" onClick={slice}>Slice</button>
    <button class="btn btn-primary mx-2" onClick={concat}>concat</button>

    </div>
    <div classname='container-my-3'>
    <h2>Summary</h2>
    <p>Total number of words:{text.split(" ").length}.</p>
    <p>Total number of characters:{text.length}.</p>
    </div>
  </>
    )
  
}
