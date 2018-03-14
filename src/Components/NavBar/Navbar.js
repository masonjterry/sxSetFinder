import React, {Component} from 'react';
import {Navbar,Nav,NavItem} from 'react-bootstrap';
import { BrowserRouter as Router } from "react-router-dom";

class NavBar extends Component {
 render() {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand className='app-name' >
          <a href="">sxSetFinder</a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav className='nav-items'>
        <NavItem eventKey={1} href="#">
          About us
        </NavItem>
        <NavItem eventKey={2} href="#">
          Information
        </NavItem>
        <NavItem href='/login'>
          <Router>
            <p >Login</p>
          </Router>
        </NavItem>
      </Nav>
    </Navbar>
  )
 }
}

export default NavBar;
