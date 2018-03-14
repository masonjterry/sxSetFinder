import React, { Component } from "react";
import { Button } from "react-bootstrap";

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
  inputStyle: {
    margin: 10
  },
  btnStyle: {
    marginBottom: 10
  }
}

export default class Result extends Component {

  state = {
    phoneNumber: "",
    nickName: ""
  }

  handleChange = (e) => {
    const {name, value} = e.target;

    this.setState({
      [name]: value
    })
  }

  handleClick = (e) => {
    e.preventDefault();
    alert(this.state.phoneNumber);
    alert(this.state.nickName);
  }

  render() {
    return (
      <div>
        <h1 style={style.headerStyle}>SXSetFinder</h1><Button style={style.buttonStyle} bsStyle="primary">Messenger Login</Button>
        <div style={style.displayDiv}>
          <p style={style.divHeader}>Enter Groupme Credentials:</p>
          <div style={style.inputStyle}>
            <input className="form-control" name="phoneNumber" value={this.state.phoneNumber} type="text" onChange={this.handleChange} placeholder="Phone Number" />
            <br />
            <input className="form-control" name="nickName" value={this.state.nickName} type="text" onChange={this.handleChange} placeholder="Nickname" />
            <br />
            <Button style={style.btnStyle} bsStyle="danger" onClick={this.handleClick}>Submit</Button>
          </div>
        </div>
      </div>
    );
  }
}
