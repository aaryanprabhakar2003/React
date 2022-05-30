import React,{useState} from 'react'
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Component2 from './components/Component2';
function App() {
  const[mode,setMode]=useState('light')
  const toggleMode=()=>{
    if(mode=='light'){
      setMode("dark")
    }
    else{
      setMode("light")
    }
  }
  
  return (

    <>
<Navbar title=/*"Chitkara University Punjab Campus"*/
"Chitkara University" abouttxt="About Cu" mode={mode} toggleMode={toggleMode}/>


<Component2/>
</>


  );
}

export default App;
