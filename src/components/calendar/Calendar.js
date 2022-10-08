import React from 'react'
import { Container } from 'react-bootstrap';
export default function Calendar() {
  return (
    <Container className="p-3 text-center">
      <iframe title="Google Calendar" src="https://calendar.google.com/calendar/embed?src=tbpeng%40uw.edu&ctz=America%2FLos_Angeles" style={{border: 0}} width="1000" height="750" frameborder="0" scrolling="no"></iframe>
    </Container>
  )
}
