import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
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
  },
  displayInfo: {
    margin: 15,
    fontSize: "1.5rem"
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
                      <p style={style.displayInfo}>Venue: Maggie Mae’s Rooftop</p>
                      <p style={style.displayInfo}>Date: 15-Mar-18</p>
                      <p style={style.displayInfo}>Time: 1:00am</p>
                    </div>
                  </Col>
                  <Col xs={3}>
                    <div>
                      <img style={style.imgStyle} src={require("../../images/saint-motel.jpg")} alt="artist 2" />
                      <p style={style.displayName}>Saint Motel</p>
                      <p style={style.displayInfo}>Venue: Stubb's</p>
                      <p style={style.displayInfo}>Date: 15-Mar-18</p>
                      <p style={style.displayInfo}>Time: 10:40pm</p>
                    </div>
                  </Col>
                  <Col xs={3}>
                    <div>
                      <img style={style.imgStyle} src={require("../../images/billie-ellish.jpg")} alt="artist 3" />
                      <p style={style.displayName}>Billie Ellish</p>
                      <p style={style.displayInfo}>Venue: Mohawk Outdoor</p>
                      <p style={style.displayInfo}>Date: 15-Mar-18</p>
                      <p style={style.displayInfo}>Time: 9:00pm</p>
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
                      <p style={style.displayInfo}>Venue: Highland Lounge</p>
                      <p style={style.displayInfo}>Date: 17-Mar-18</p>
                      <p style={style.displayInfo}></p>
                    </div>
                  </Col>
                  <Col xs={3}>
                    <div>
                      <img style={style.imgStyle} src={require("../../images/kelela.jpg")} alt="artist 2" />
                      <p style={style.displayName}>Kelela</p>
                      <p style={style.displayInfo}>Venue: The Gatsby</p>
                      <p style={style.displayInfo}>Date: 14-Mar-18</p>
                      <p style={style.displayInfo}>Time: 10:00pm</p>
                    </div>
                  </Col>
                  <Col xs={3}>
                    <div>
                      <img style={style.imgStyle} src={require("../../images/khalid.jpg")} alt="artist 3" />
                      <p style={style.displayName}>Kalid</p>
                      <p style={style.displayInfo}>Venue: Trinity Warehouse</p>
                      <p style={style.displayInfo}>Date: 15-Mar-18</p>
                      <p style={style.displayInfo}>Time: 12:00am</p>
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
