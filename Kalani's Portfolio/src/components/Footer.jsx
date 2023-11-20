import React from "react";
import { VscGithubAlt } from "react-icons/vsc";
import { FaInstagram, FaLink } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
  return (
    <Container id='foot-container'>
      <h2>Made by Kalani Jones</h2>
      <Row id='footer-row'>
            <Col className="logo">
          <a href="https://github.com/kalaniJ94">
              <VscGithubAlt />
          </a>
            </Col>
            <Col className="logo">
          <a href="https://www.linkedin.com/in/kalanijones/">
              <FaLinkedin/>
          </a>
            </Col>
            <Col className="logo">
          <a href="https://www.instagram.com/kjones_in_co/">
              <FaInstagram />
          </a>
            </Col>
      </Row>
    </Container>
  );
}

export default Footer;