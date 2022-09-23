/**
 * Alex Knowlton
 * 8/17/2022
 *
 * Standard navbar for the entire site. Consists of links to other
 * parts of the site. Check App.js to make sure that the links are
 * valid.
 */
import React from "react";
import { Nav, Navbar } from "react-bootstrap";

export default function NavMenu() {
  return (
    <Navbar bg="light" expand="md">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#/">Home</Nav.Link>
          <Nav.Link href="#/calendar">Calendar</Nav.Link>
          {/* Uncomment when About Us page has been contented and styled */}
          {/* <Nav.Link href="#/about">About Us</Nav.Link> */}
          <Nav.Link href="mailto:tbp@uw.edu">Contact Us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
