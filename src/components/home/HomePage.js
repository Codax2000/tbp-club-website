import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import data from "./data.json";
import shoutout from "../../img/mugshots/Adam_Margot.JPG"

export default function HomePage() {
  return (
    <Container>
      <Jumbotron fluid className="background-primary d-flex align-items-center">
        <Container>
          <h2>{data.welcome[0]}</h2>
          <p>{data.welcome[1]}</p>
        </Container>
      </Jumbotron>
      <div className="background-highlight highlight-divider">
        no text
      </div>
      <Container className="background-secondary home-container-vertical home-container horizontal">
        <h2>Announcements</h2>
        {data.announcements.important.map((item, i) => <p className="bold" key={i}>{item}</p>)}
        {data.announcements.regular.map((item, i) => <p key={i}>{item}</p>)}
      </Container>
      {/* <Container className="background-secondary home-container-vertical home-container horizontal">
        <h2>Weekly Shoutout</h2>
        <div className="d-flex align-items-start">
          <div>
            <img className="headshot" alt="Margot's Mugshot" src={shoutout} />
          </div>
          <div>
            <h4>{data.shoutout.name}</h4>
            {data.shoutout.about.map((item, i) => <p key={i}>{item}</p>)}
          </div>
        </div>
      </Container> */}
    </Container>
  )

}
