import React, {Component} from 'react';
import {Navbar,Nav,NavItem,MenuItem} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class NavBar extends Component {
 render() {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand className='app-name'>
          <a href="#home">sxSetFinder</a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav className='nav-items'>
        <NavItem eventKey={1} href="#">
          About us
        </NavItem>
        <NavItem eventKey={2} href="#">
          Information
        </NavItem>
        <NavItem>
          <Router>
            <Link to={`/login`}>Login</Link>
          </Router>
        </NavItem>
      </Nav>
    </Navbar>
  )
 }
}

export default NavBar;
