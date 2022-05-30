import React, { Component } from 'react'
export default class Students extends Component {
  constructor(props) {
    super(props);
    this.state = {
        hasChanged: false,
    }
  }
  increment=(event) => {
      this.setState({hasChanged: true})
      this.props.increment(this.props.name)
  }
  render() {
      return (
          <div className="container my-3">
          <div className="Students">
          <h2>{this.props.name}</h2>
          <h3>{this.props.marks}</h3>
          <button className="btn btn-primary" onClick={this.increment}>Add</button>
          {this.state.hasChanged &&(
              <span>Updated</span>
          )}
          </div>
          </div>
      )
  }
}
