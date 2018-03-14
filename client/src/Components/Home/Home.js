import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "./style.css";

const style = {
  marginTop: "10%",
  headerStyle: {
    fontSize: "10rem",
    textAlign: "center",
    margin: 20,
    fontWeight: 700
  },
  header2Style: {
    fontSize: "5rem",
    color: "#fff",
    textAlign: "center",
    margin: 20,
    fontWeight: 700
  },
  header3Style: {
    fontSize: "5rem",
    textAlign: "center",
    margin: 20,
    fontWeight: 700
  },
  buttonStyle: {
    textAlign: "center"
  },
  btnStyle: {
    margin: 10
  }
}

export default class Home extends Component {

  handleClick = (e) => {
    this.props.history.push("/results");
  }

  render() {
    return (
      <div style={style}>
      <h1 style={style.headerStyle}>SXSetFinder</h1>
      <p style={style.header2Style}>Find your favorite fans. Connect with other concert goes.</p>
      <p style={style.header3Style}>Experience SXSW the right way!</p>
      <div style={style.buttonStyle}>
        <Button style={style.btnStyle} bsStyle="success" bsSize="large" onClick={this.handleClick}>Spotify Login</Button>
        <Button style={style.btnStyle} bsStyle="primary" bsSize="large" onClick={this.handleClick}>Messenger Login</Button>
      </div>
      </div>
    );
  }
}
