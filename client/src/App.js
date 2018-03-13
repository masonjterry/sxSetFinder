import React, { Component } from 'react';
import API from "./utilities/API";
import './Styles/App.css';

class App extends Component {

  state = {
    testName: ""
  };

  handleChange = (e) => {
    const {name, value} = e.target;

    this.setState({
      [name]: value
    })
  }

  handleClick = (e) => {
    e.preventDefault();
    API.createTest({
      testName: this.state.testName
    }).then(alert("submitted"));
  }

  render() {
    return (
      <div className="App">

        <h2 className='heading'>sxSetFinder!</h2>
        <input name="testName" onChange={this.handleChange} value={this.state.testName} placeholder="test input" />
        <button onClick={this.handleClick}>Submit</button>
      </div>
    );
  }
}

export default App;
