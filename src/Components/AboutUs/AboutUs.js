import React, {Component} from 'react';
import {Col,Row} from 'react-bootstrap';

class AboutUs extends Component {
 render() {
  return (
    <Row className={this.props.aboutUsGrid}>
      <Col xs={6} md={12}>
        <h1>About us</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </Col>
    </Row>
  )
 }
}

export default AboutUs;
