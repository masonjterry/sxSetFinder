import React, {Component} from 'react';
import {Navbar,Nav,NavItem} from 'react-bootstrap';

class Footer extends Component {
 render() {
  return (
    <Navbar >
      <Nav className='nav-items'>
        <NavItem eventKey={1} href="#">
          <a href='#'>Contact info</a>
        </NavItem>
        <NavItem eventKey={2} href="#">
          Information
        </NavItem>
        <NavItem>
        <a href='#'>About us</a>
        </NavItem>
      </Nav>
    </Navbar>
  )
 }
}

export default Footer;
