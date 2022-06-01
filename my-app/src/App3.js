import React, { Component } from 'react';
import Students from './components/Students';
export default class App3 extends Component {
  constructor() {
    super();
    this.state = {
        student:[
            {name:'vikas',marks:5},
            {name:'rajinder',marks:7},
            {name:'gagan',marks:8},
            {name:'shiv',marks:9},
            {name:'yogesh',marks:10}
        ]

    }
  }
  increment=(name)=>{
      let ppl=this.state.student.map((s)=>{
          if(s.name==name){
              s.marks++
          }
          return s
      })
      this.setState({student:ppl})
  }
  render(){
    return(
        <div className="App3">
            {this.state.student.map((student) =>(
                <Students name={student.name}
                marks={student.marks}
                increment={this.increment}
                />
            ) )}
        </div>
    )
}
}
