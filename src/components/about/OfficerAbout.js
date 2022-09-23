import React from 'react'
import { Container } from 'react-bootstrap';

export default function OfficerAbout(props) {
  let {position, name, year, major, elevatorPitch, photo} = props;
  return (
    <Container className="home-container">
      <h2>{position}</h2>
      <p>{name}</p>
      <img alt={name} src={photo} />
    </Container>
  )
}
