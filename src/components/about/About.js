/**
 * Alex Knowlton
 * 8/17/2022
 * 
 * The section of the website devoted to the "About Us" materials. 
 */

import React from 'react'
import OfficerAbout from './OfficerAbout';
import data from "./data.json";
import { Container } from 'react-bootstrap';
import president from "../../img/mugshots/Knowlton_Alex.JPG";

export default function About() {
  return (
    <Container>
      {data.officers.slice(0, 1).map((item, i) => 
        <OfficerAbout 
          position={item.position}
          name={item.name}
          year={item.year}
          major={item.major}
          photo={president}
          elevatorPitch={item.elevatorPitch}
        />)
      }
    </Container>
  )
}
