import React, { Component } from 'react';
import API from "./utilities/API";
import './Styles/App.css';

class App extends Component {

  state = {
    testName: "",
    testData: []
  };

  componentDidMount = () => {
    this.loadItems();
  }

  loadItems = () => {
    API.loadItems()
    .then(res => {
      this.setState({ testData: res.data });
    }).catch(err => {
      console.log(err);
      alert("something went wrong");
    });
  }

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
    }).then(res => this.loadItems());
  }

  render() {
    return (
      <div className="App">

        <h2 className='heading'>sxSetFinder!</h2>
        <input name="testName" onChange={this.handleChange} value={this.state.testName} placeholder="test input" />
        <button onClick={this.handleClick}>Submit</button>
        {this.state.testData.length ?
          (this.state.testData.map(data => <p>Data: {data.testName}</p>)) : (<p>Not data</p>)}
      </div>
    );
  }
}

export default App;
