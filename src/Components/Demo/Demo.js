import React, {Component} from 'react';
import {Col,Row} from 'react-bootstrap';

class Demo extends Component {
 render() {
  return (
     <Row className={this.props.demoGrid}>
       <Col xs={6} md={6}>
         <h4>Demo</h4>
       </Col>
       <Col xs={6} md={6}>
         <img alt='placeholder' src="http://via.placeholder.com/350x150"/>
       </Col>
       <Col mdOffset={6} md={6}>
         <img alt='placeholder' src="http://via.placeholder.com/350x150"/>
       </Col>
     </Row>
  )
 }
}

export default Demo;
