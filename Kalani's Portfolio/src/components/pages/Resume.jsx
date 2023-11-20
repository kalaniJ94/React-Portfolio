import React from 'react';
import myResume from "../../assets/myResume.pdf";
import { BsCloudDownload } from "react-icons/bs";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Resume() {
  return (
    <div>
      <section id="resume-intro" >
        <div className="flex-row">
          <h2 className="">My Resume</h2>
          <h4>Click here to download</h4>
        </div>
        <div className="flex-row">
          <div className="download-info">
            <div className="download-text">
              <a href={myResume} className="download-logo" download>
                <BsCloudDownload />
              </a>
              <h4 id='dev-text'className='mb-8'>
                Proficencies
              </h4>
            </div>
          </div>
        </div>
      </section>
      <Container id="dev-body" className="resume-body">
        <Row>
        <Col className="article column1">
          <h5 className="column-title">Font-End Tech</h5>
          <p className="column-text">
            <ul>
            
              <li>HTML5</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>APIs</li>
              <li>Bootstrap</li>
              <li>React Bootstrap</li>
              <li>Tailwind</li>
              <li>SASS</li>
              <li>GIT</li>
            </ul>
          </p>
        </Col>

        <Col className="article column2">
          <h5 className="column-title">Back-End Tech</h5>
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
          <h5 className="column-title">Performance Tech</h5>
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