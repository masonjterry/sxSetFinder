import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import API from "./utilities/API";
import './Styles/App.css';
import Home from "./Components/Home/Home";
import Results from "./Components/Results/Results";
import Credentials from "./Components/Credentials/Credentials";

class App extends Component {

  state = {
    testName: "",
    testData: [],
    spotifyData: []
  };

  spotifyData = () => {
    API.getSpotify()
    .then(res => {
      this.setState({ spotifyData: res.data });
    }).catch(err => {
      console.log(err);
      alert("something went wrong with Spotify");
    })
  }

  componentDidMount = () => {
    this.spotifyData();
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/results" component={Results} />
            <Route exact path="/credentials" component={Credentials} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
