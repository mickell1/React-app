import React, { Component } from 'react';

//CSS
import { Grid, Row, Col, Image, } from 'react-bootstrap';
import '../css/Contact.css';

export default class News extends Component {
  render() {
    return (
      <div>
        <Image src="assets/contact-header.jpg" className="header-image" />
        <Grid>
          <h2>Contact</h2>
          <h3>Coming Soon</h3>
        </Grid>
      </div>
    );
  }
}
