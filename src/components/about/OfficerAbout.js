import React from 'react'
import { Container } from 'react-bootstrap';

export default function OfficerAbout(props) {
  let {position, name, year, major, elevatorPitch, photo} = props;
  return (
    <Container className="home-container-vertical home-container-horizontal background-secondary">
      <h2>{position}</h2>
      <div className="d-flex align-items-start">
        <div>
          <img className="headshot" alt={name} src={photo} />
        </div>
        <div>
          <h3>{name}</h3>
          <h4>{year}, {major}</h4>
          {elevatorPitch.map((item, i) => <p key={i}>{item}</p>)}
        </div>
      </div>
    </Container>
  )
}