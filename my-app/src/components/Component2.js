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
    /*let myStyle={
      color: "white",
      backgroundColor: "black"
    }*/
    const[myStyle,setMyStyle]=useState({
      color: "white",
      backgroundColor: "black"
    })
    //const[btntext,setbtntext]=useState("initial state")
    const togglestyle=()=>{
      if (myStyle.color=="white"){
        setMyStyle({color: "black",
      backgroundColor: "white"})

      }
    }

  return (
    <>
    <div className="container my-3">
    <div>
    <textarea className="form-control1" id="textbox" rows="10" cols="30" onChange={handleOnChange} value={text} className="container my-3"></textarea><br></br>
    <button class="btn btn-primary mx-2" onClick={handleOnClick}>Button</button>
    <button class="btn btn-primary mx-2" onClick={replaceStr}>Replace</button>
    <button class="btn btn-primary mx-2" onClick={handleOnClear}>Clear</button>
    <button class="btn btn-primary mx-2" onClick={submitvalidation}>Submit</button>
    <button class="btn btn-primary mx-2" onClick={slice}>Slice</button>
    <button class="btn btn-primary mx-2" onClick={concat}>concat</button>
    </div>
    <div className='container-my-3'>
    <h2>Summary</h2>
    <p>Total number of words:{text.split(" ").length}.</p>
    <p>Total number of characters:{text.length}.</p>
    </div>
    </div>
    <div class="accordion" id="accordionExample" className="container my-3">
  <div class="accordion-item" >
  <h1 style={myStyle}>Discussion of Accordion</h1>
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" style={myStyle}>
      <div class="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample" style={myStyle}>
      <div class="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"style={myStyle}>
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample" style={myStyle}>
      <div class="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <button className="btn btn-primary" onClick={togglestyle}>Change Mode</button>
</div>
  </>
    )
  
}
