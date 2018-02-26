import React, { Component } from 'react';

//CSS
import { Grid, Row, Col, Image, } from 'react-bootstrap';
import '../css/MeetTheTeam.css';

export default class MeetTheTeam extends Component {
  render() {
    return (
      <div>
        <Image src="assets/axe-throwing.jpg" className="header-image" />
        <Grid>
          <h2>Meet The Team</h2>
          <Row className="show-grid text-center">
            <Col xs={12} sm={4} className="person-wrapper">
              <Image src='assets/Mickell.jpg' circle className="profile-pic" />
              <h3>Mickell</h3>
              <p>
              I have now worked within the IT industry for 7 years. My career began with an apprenticeship, which led
              me to my first role which involved 1st/2nd line support to different schools in Bedfordshire,
              Hertfordshire and Buckinghamshire. After a few enjoyable years, I decided to undergo a degree in
              computer science, during which I spent time in J.P. Morgan’s technology infrastructure team as a
              technology analyst. In the final year of my degree I developed four small IOS applications for my
              dissertation.
              </p>
            </Col>
            <Col xs={12} sm={4} className="person-wrapper">
              <Image src='assets/Lindsay.jpg' circle className="profile-pic" />
              <h3>Lindsay</h3>
              <p>
                Over the last year as a consultant, I have widened my technical knowledge using JavaScript and gained
                experience delivering for clients through agile methods. My experience includes web languages,
                building internal sites and proof of concepts. I have strong analytical and communication skills
                through my undergraduate in Modern Languages, and from working in multicultural and lingual
                environments. I enjoy how different technologies can support conveying and sharing our ideas.
              </p>
            </Col>
            <Col xs={12} sm={4} className="person-wrapper">
              <Image src='assets/Akram.jpg' circle className="profile-pic" />
              <h3>Akram</h3>
              <p>
                Language lover AND tech enthusiast. After graduating from university, I taught english overseas with
                the intention to build upon linguistic methods. I quickly hit brick walls but found technological
                platforms to aid me, such as language and memory apps. Since dipping my toe in the ocean of
                technology through languages, I have fully embraced all things tech, graduating from a bootcamp
                (Makers Academy) in 2016.
              </p>
            </Col>
          </Row>

          <Row className="show-grid text-center">
            <Col xs={12} sm={4} className="person-wrapper">
              <Image src='assets/Ajesh.jpg' circle className="profile-pic" />
              <h3>Ajesh</h3>
              <p>
                I am a highly motivated individual with a passion for technology and business. I had my first working
                experience as an in-house engineer for Mondelez International working on projects for both the manufacturing
                and R&D departments. Most of my learning has come through studying Computer Science at University and exploring
                a wide range of different languages. These skills were then applied to developing my final year project, to
                provide an improved approach to learning code using a real time collaborative environment.
              </p>
            </Col>
            <Col xs={12} sm={4} className="person-wrapper">
              <Image src='assets/Jas.jpg' circle className="profile-pic" />
              <h3>Jasmien</h3>
              <p>
                Entering the world of computer science was a natural progression for me, due to my enthusiasm for technology
                and because I desired to bring my own ideas to life. Accomplishing an intensive Computer Science MSc  at UCL has
                proven my ability to quickly alter my ways of thinking and acquire new skills. At university, and as a freelance
                Android developer, I have had the chance to play with some very exciting computer languages, such as functional
                and object orientated, and technologies (Virtual Reality and IoT). As an individual, I am always striving to
                become a better programmer and communicator through being highly self-motivated and organised.
              </p>
            </Col>
            <Col xs={12} sm={4} className="person-wrapper">
              <Image src='assets/olly.jpg' circle className="profile-pic" />
              <h3>Olly</h3>
              <p>
                I am a full stack Javascript developer. During my undergraduate Computer Science degree, I interned as
                a software developer for PA Consulting and worked on full stack Java and Javascript applications, gaining
                experience developing within Agile teams and with multiple frameworks. After gaining experience in designing
                and testing small and medium scale applications, as well as working as a backend developer on a major
                programme within the Home Office, I began working on side projects including a portfolio written in self-taught
                React. I love creative solutions, and having worked with Drones, iBeacons and music generation systems previously,
                I enjoy bringing an innovative side to all the projects I work on.

              </p>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
