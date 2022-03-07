import React from 'react';
import logo from '../UserPage/logo.png';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function AboutPage() {
  return (
    <Container>
      <div className="text-box">
      <Row>
        <Col>
          {<img src={logo} alt="Logo" className='aboutPage-logo' />}
        </Col>
        <Col>
          <div className ="mission-div">
          <h1 className="missionTitle">Our Mission</h1>
          </div>
          <h5 className="mission-subTitle">Cutting Edge is a service to provide employees with a user-friendly way to navigate intensive snow shifts.</h5>
          <p className="about-text">
            Upon logging in, an employee is welcomed and given the option to either continue an existing work order, or create a new one. 
            A work order consisits of properties to service.
            Structurely, the properties within a work order are arranged into routes.
            Routes are organized strategically by a property's geologic location. In testing, we have found routes to be an important part of workflow to efficently break up properties, and effectively send employees over different areas of town to improve productivity. 
            As an employee arrives and departs from a property, (selects the clocks-in and clock-out buttons) the app records timestamps to document the progress across all devices. After completion of a route, the employee is able to either begin another route or label the work order as complete.</p>
        </Col>
      </Row>
      </div>
    </Container>
  );
}

export default AboutPage;
