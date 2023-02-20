import React, { Component } from 'react';
import Hello from './Hello';

class App extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      flag: false
    }
  }
  handleChange() {
    this.setState({
      flag: !this.state.flag
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.handleChange}>Switch Flag</button>
        {`${this.state.flag}`}
        <Hello/>
      </div>
    )
  }
}

export default App