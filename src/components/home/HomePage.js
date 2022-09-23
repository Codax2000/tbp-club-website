import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import data from "./data.json";

export default function HomePage() {
  return (
      <Container>
      <Jumbotron fluid>
        <Container className="home-container">
          <h2>{data.welcome[0]}</h2>
          <p>{data.welcome[1]}</p>
        </Container>
      </Jumbotron>
      <Container className="home-container">
        <h2>Announcements</h2>
        {data.announcements.map((item, i) => <p key={i}>{item}</p>)}
      </Container>
      <Container className="home-container">
        <h2>Weekly Shoutout</h2>
        <h3>{data.shoutout.name}</h3>
        {data.shoutout.about.map((item, i) => <p key={i}>{item}</p>)}
      </Container>
      <Container className="home-container">
        <h2>Connect With Us!</h2>
        <p>Email: tbp@uw.edu</p>
        <p>Discord: TODO add invite link</p>
      </Container>
    </Container>
  )

}
