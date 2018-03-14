import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "./style.css";

const style = {
  buttonStyle: {
    margin: "-40px 10px 0 0",
    float: "right"
  },
  headerStyle: {
    margin: "20px 0 0 10px",
    fontWeight: 700
  },
  displayDiv: {
    backgroundColor: "rgba(255, 255, 255, .7)",
    maxWidth: 800,
    margin: "100px auto"
  },
  divHeader: {
    fontWeight: 700,
    padding: 20,
    fontSize: "3rem"
  },
  imgStyle: {
    // maxWidth: 200
    margin: 10
  },
  displayName: {
    margin: 5
  },
  displayFooter: {
    fontSize: "2.5rem",
    fontWeight: 700,
    textAlign: "center"
  }
}

export default class Result extends Component {
  render() {
    return (
      <div>
        <h1 style={style.headerStyle}>SXSetFinder</h1><Button style={style.buttonStyle} bsStyle="primary">Messenger Login</Button>
        <div style={style.displayDiv}>
          <p style={style.divHeader}>Top 3 Artist Recommendations</p>
          <div>
          <img style={style.imgStyle} src="http://via.placeholder.com/200x200" alt="artist image" />
          <p style={style.displayName}>Artist Name</p>
          </div>
          <div>
          <img style={style.imgStyle} src="http://via.placeholder.com/200x200" alt="artist image" />
          <p style={style.displayName}>Artist Name</p>
          </div>
          <div>
          <img style={style.imgStyle} src="http://via.placeholder.com/200x200" alt="artist image" />
          <p style={style.displayName}>Artist Name</p>
          </div>
          <p style={style.displayFooter}>Connect with your personalized group!</p>
        </div>
      </div>
    );
  }
}
