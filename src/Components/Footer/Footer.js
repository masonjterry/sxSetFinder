import React, {Component} from 'react';
import {Navbar,Nav,NavItem} from 'react-bootstrap';

class Footer extends Component {
 render() {
  return (
    <Navbar >
      <Nav className='nav-items'>
        <NavItem eventKey={1} href="#">
          <p>Contact info</p>
        </NavItem>
        <NavItem eventKey={2} href="#">
          Information
        </NavItem>
        <NavItem>
        <p href='#'>About us</p>
        </NavItem>
      </Nav>
    </Navbar>
  )
 }
}

export default Footer;
