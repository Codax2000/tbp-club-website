/**
 * Alex Knowlton
 * 8/17/2022
 * 
 * The section of the website devoted to the "About Us" materials. 
 */

import React from 'react'
import OfficerAbout from './OfficerAbout';
import data from "./data.json";
import { Container, Jumbotron } from 'react-bootstrap';

import president from "../../img/mugshots/Knowlton_Alex.JPG";
import vicePresident from "../../img/mugshots/Walenta_Madison.JPG";
import treasurer from "../../img/mugshots/Kwek_Kai.JPG";
import recordingSecretary from  "../../img/mugshots/Deruyter_Nathan.JPG";
import correspondingSecretary from "../../img/mugshots/Zhou_Steven.jpg";

let pics = [president, vicePresident, treasurer, recordingSecretary, correspondingSecretary];

export default function About() {
  return (
    <Container>
      <Jumbotron fluid className="background-primary d-flex align-items-center">
        <Container>
          <h2>About Us</h2>
        </Container>
      </Jumbotron>
      <div className="background-highlight highlight-divider">
        no text
      </div>
      <div>
        <Container className="home-container-horizontal background-secondary pt-5">
          <p>{data.about}</p>
        </Container>
        {data.officers.map((item, i) => 
          <OfficerAbout 
            position={item.position}
            name={item.name}
            year={item.year}
            major={item.major}
            photo={pics[i]}
            elevatorPitch={item["elevator-pitch"]}
          />)
        }
      </div>
    </Container>
    
  )
}
