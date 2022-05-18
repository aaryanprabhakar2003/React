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
        //setText(event.target.value);
    }
  return (
    <div>
    <textarea className="form-control1" id="textbox" rows="10" cols="30" onChange={handleOnChange} value={text}></textarea><br></br>
    <button class="btn btn-primary" onClick={handleOnClick}>Button</button>
    </div>
  )
}
