import React from 'react';
import myResume from "../../assets/myResume.pdf";

import { BsCloudDownload } from "react-icons/bs";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Resume() {
  return (
    <div>
      <section id="welcome-section" className="download-intro">
        <div className="flex-row">
          <h2 className="section-title primary-border">My Resume</h2>
        </div>
        <div className="flex-row">
          <div className="download-info">
            <div className="download-text">
              <a href={myResume} className="download-logo" download>
                <BsCloudDownload />
              </a>
              <p>
                Please feel free to check out my list of Developer
                Proficiencies!
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* // This is the resume language */}
      <Container id="home-page-body" className="resume-body">
        <Row>
        <Col className="article column1">
          <p className="column-title">Font-End Tech</p>
          <p className="column-text">
            <ul>
            
              <li>HTML5</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>APIs</li>
              <li>Bootstrap</li>
              <li>GIT</li>
            </ul>
          </p>
        </Col>

        <Col className="article column2">
          <p className="column-title">Back-End Tech</p>
            <ul>
              <li>Node.Js</li>
              <li>Jest</li>
              <li>Express.js</li>
              <li>MySQL</li>
              <li>Sequelize</li>
              <li>Object-Relational Mapping(ORM)</li>
              <li>Model-View-Controller (MVC)</li>
            </ul> 
        </Col>
        <Col className="article column3">
          <p className="column-title">Performance Tech</p>
            <ul>
              <li>NoSQL</li>
              <li>Progressive Web Applications (PWA)</li>
              <li>MongoDB</li>
              <li>Mongoose</li>
              <li>GraphQL</li>
              <li>React</li>
              <li>MERN</li>
              <li>State</li>
            </ul>
        </Col >
        </Row>
      </Container>
    </div>
  );
}

export default Resume;