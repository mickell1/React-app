import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//CSS
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import '../css/Home.css';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Image src="assets/Home-header-cropped.jpg" className="header-image" />
        <Grid>
          <Jumbotron>
            <h1>Welcome to TuringGrow</h1>
            <p>
              Turing Grow is a place where our people can grow and learn, while contributing to the growth of the business.
              We want Grow to be a place where we build our people and our company in ways that are engaging, interesting and productive
            </p>

            <h2>React:</h2>

            <h3>
              Declarative
            </h3>

            <p>
              React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
              Declarative views make your code more predictable and easier to debug.
            </p>

            <h3>
              Component-Based
            </h3>

            <p>
              Build encapsulated components that manage their own state, then compose them to make complex UIs.
              Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.
            </p>

            <h3>
              Learn Once, Write Anywhere
            </h3>

            <p>
              We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.
              React can also render on the server using Node and power mobile apps using React Native.
            </p>
            <Link to="/about">
              <Button bsStyle="primary">About</Button>
            </Link>
            <Link to="/news">
              <Button bsStyle="primary">News</Button>
            </Link>
            <Link to="/todolist">
              <Button bsStyle="primary">ToDoList</Button>
            </Link>
            <Link to="/meettheteam">
              <Button bsStyle="primary">MeetTheTeam</Button>
            </Link>
            <Link to="/clubskills">
              <Button bsStyle="primary">Club Skills</Button>
            </Link>
            <Link to="/contact">
              <Button bsStyle="primary">Contact</Button>
            </Link>
          </Jumbotron>
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
              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
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
        </Grid>
      </div>
    );
  }
}
