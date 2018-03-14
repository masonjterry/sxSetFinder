import React, {Component} from 'react';
import {Col,Row,Button} from 'react-bootstrap';

class MainPage extends Component {
 render() {
  return (
     <Row className={this.props.showGrid}>
       <Col xs={6} md={12}>
         <h1>Some really cool catch phrase!</h1>
       </Col>
       <Button bsStyle="primary">Sign up</Button>
     </Row>
  )
 }
}

export default MainPage;
