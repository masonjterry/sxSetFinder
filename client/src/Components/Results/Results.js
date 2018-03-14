import React, { Component } from "react";
import { Button, Grid, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";

const style = {
  buttonStyle: {
    margin: "10px 10px 0 0",
    float: "right"
  },
  headerStyle: {
    margin: "20px 0 0 10px",
    fontWeight: 700,
    fontSize: "4rem",
    textDecoration: "none",
    color: "#333"
  },
  displayDiv: {
    backgroundColor: "rgba(255, 255, 255, .7)",
    maxWidth: 850,
    margin: "100px auto"
  },
  divHeader: {
    fontWeight: 700,
    padding: 20,
    fontSize: "3rem"
  },
  imgStyle: {
    maxHeight: 200,
    margin: 15
  },
  displayName: {
    margin: 15,
    fontSize: "2rem"
  },
  displayFooter: {
    fontSize: "2.5rem",
    fontWeight: 700,
    textAlign: "center",
    margin: 50
  }
}

export default class Result extends Component {
  render() {
    return (
      <div>
        <Link style={style.headerStyle} to ="/">SXSetFinder</Link><Link style={style.buttonStyle} className="btn btn-primary" to="/credentials">Messenger Login</Link>
        <div style={style.displayDiv}>
          <p style={style.divHeader}>Top 3 Artist Recommendations for Philip</p>
          <Grid>
            <Row className="show-grid">
              <Col xs={12}>
                <Row className="show-grid">
                  <Col xs={3}>
                    <div>
                      <img style={style.imgStyle} src={require("../../images/deluxe.jpeg")} alt="artist 1" />
                      <p style={style.displayName}>Deluxe</p>
                    </div>
                  </Col>
                  <Col xs={3}>
                    <div>
                      <img style={style.imgStyle} src={require("../../images/saint-motel.jpg")} alt="artist 2" />
                      <p style={style.displayName}>Saint Motel</p>
                    </div>
                  </Col>
                  <Col xs={3}>
                    <div>
                      <img style={style.imgStyle} src={require("../../images/billie-ellish.jpg")} alt="artist 3" />
                      <p style={style.displayName}>Billie Ellish</p>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
            <p style={style.divHeader}>Top 3 Artist Recommendations for Andie</p>
            <Row className="show-grid">
              <Col xs={12}>
                <Row className="show-grid">
                  <Col xs={3}>
                    <div>
                      <img style={style.imgStyle} src={require("../../images/070.jpg")} alt="artist 1" />
                      <p style={style.displayName}>070</p>
                    </div>
                  </Col>
                  <Col xs={3}>
                    <div>
                      <img style={style.imgStyle} src={require("../../images/halsey.jpg")} alt="artist 2" />
                      <p style={style.displayName}>Halsey</p>
                    </div>
                  </Col>
                  <Col xs={3}>
                    <div>
                      <img style={style.imgStyle} src={require("../../images/khalid.jpg")} alt="artist 3" />
                      <p style={style.displayName}>Kalid</p>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Grid>
          <p style={style.displayFooter}>Connect with your personalized group!</p>
        </div>
      </div>
    );
  }
}
