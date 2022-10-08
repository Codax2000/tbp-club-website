/**
 * Alex Knowlton
 * 8/17/2022
 *
 * Standard navbar for the entire site. Consists of links to other
 * parts of the site. Check App.js to make sure that the links are
 * valid.
 */
import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import discordImage from "../img/pics/DiscordLogo.png"

export default function NavMenu() {

  let height = 24;

  return (
		<Container>
			<Navbar className="navbar" bg="light" expand="md">
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link href="#/">Home</Nav.Link>
						<Nav.Link href="#/calendar">Calendar</Nav.Link>
						{/* <Nav.Link href="#/about">About Us</Nav.Link> */}
						<Nav.Link href="mailto:tbp@uw.edu">Contact Us</Nav.Link>
					</Nav>
					<Nav.Link
						href="https://discord.gg/WbyC4aYWz7"
						target="_blank"
					>
						<img
							id="nav-image"
							height={height}
							src={discordImage}
							alt="Our Discord Invite"
						/>
					</Nav.Link>
				</Navbar.Collapse>
			</Navbar>
		</Container>
  );
}
