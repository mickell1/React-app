import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, Image } from 'react-bootstrap';
import '../css/customNavbar.css';

export default class customNavbar extends Component {
  render() {
    return (
      <Navbar default collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/"><Image src="assets/andigital.jpeg " /></Link>
          </Navbar.Brand>
          <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} componentClass={Link} href="/" to="/">
              Home
            </NavItem>
            <NavItem eventKey={2} componentClass={Link} href="/about" to="/about">
              About
            </NavItem>
            <NavItem eventKey={3} componentClass={Link} href="/news" to="/news">
              News
            </NavItem>
            <NavItem eventKey={4} componentClass={Link} href="/todolist" to="/todolist">
              ToDoList
            </NavItem>
            <NavItem eventKey={1} componentClass={Link} href="/meettheteam" to="/meettheteam">
              MeetTheTeam
            </NavItem>
            <NavItem eventKey={1} componentClass={Link} href="/clubskills" to="/clubskills">
              Club Skills
            </NavItem>
            <NavItem eventKey={1} componentClass={Link} href="/contact" to="/contact">
              Contact
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

// export default News;
