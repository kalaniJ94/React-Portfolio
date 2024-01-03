import React from "react";

import Dropdown from 'react-bootstrap/Dropdown';

import  projectMars  from "../../../public/assets/projectMars.png";
import projectHyperdrive from "../../../public/assets/projectHyperdrive.png";
import celestial from "../../../public/assets/celestial.jpg";
import lambeauField from "../../../public/assets/lambeauField.jpg";
import kdsImage from "../../../public/assets/kdsImage.jpg";
import codingStockImage from "../../../public/assets/codingStockImage.avif";

function Projects() {
    return (
      <div>
        <section id="work" className="jobs">
          <div className="flex-row">
            <h2 className=" mt-5 section-title secondary-border">My Projects and showcased Work.</h2>
          </div>
  
          <div className="job">
            <div className="job-info">
              <div className="job-img">
                <a href="https://kalanij94.github.io/Project-Mars/index.html">
                  {" "}
                  <img
                    src={projectMars}
                    className="my-2"
                    style={{ width: "75%" }}
                    alt="Project-Mars"
                  />
                </a>
              </div>
              <div className="job-text">
                <h4>Project Mars</h4>
                <p>
                 My first project, done through the University of Denver Full-Stack Web Devolpment Bootcamp, utilizes two different third-party web APIs to display real data about planets in our solar system, and directly comparing them to Earth. This project was a ton of fun, and I am extremely proud of the work done within. I served as project lead, and with my two great project partners, produced an exceptional product. 
                </p>
              </div>
            </div>
          </div>
  
          <div className="job">
            <div className="job-info">
              <div className="job-img">
                <a href="https://github.com/kalaniJ94/Project_Hyperdrive">
                  {" "}
                  <img
                    src={projectHyperdrive}
                    className="my-2"
                    style={{ width: "75%" }}
                    alt="Project Hyperdrive"
                  />
                </a>
              </div>
              <div className="job-text">
                <h4>Project Hyperdrive</h4>
                <p>
                  My second project, done through the Bootcamp, is Project Hyperdrive, an interactive educational tool aimed at helping people learn about real exoplanets in our galaxy, using a fun 'game' system to let users travel virtually through hyperspace. As project lead and as a member of five devolpers who worked passionatly on this Project, we are extremly proud of the finished product. 
                </p>
              </div>
            </div>
          </div>
  
          <div className="job">
            <div className="job-info">
              <div className="job-img">
                <a href="https://celestialvoyages-284k.onrender.com/">
                  {" "}
                  <img
                    src={celestial}
                    className="my-2"
                    style={{ width: "75%" }}
                    alt="Celestial"
                  />
                </a>
              </div>
              <div className="job-text">
                <h4>Celestial Voyages - WIP</h4>
                <p>
                 Our third project, Celestial Voyages, combines a clean, professional UI with a mock "space travel agency" function.  It was extremely satisfying  to work with a full MERN stack to complete my bootcamp journey. 
                </p>
              </div>
            </div>
          </div>
  
          <div className="job">
            <div className="job-info">
              <div className="job-img">
                <a href="https://github.com/kalaniJ94/Packers-Practice-Site">
                  {" "}
                  <img
                    src={lambeauField}
                    className="my-2"
                    style={{ width: "75%" }}
                    alt="Lambeau Field"
                  />
                </a>
              </div>
              <div className="job-text">
                <h4>Packers Roster/Stats Tracker - WIP</h4>
                <p>
                 A personal practice Website, aimed at keeping track of the players, and stats, of the Green Bay Packers. While this site is, currently, very much a work in progress, I look forward to it's completed state for use, both by myself and others!
                </p>
              </div>
            </div>
          </div>
  
         
  
          <div className="job">
            <div className="job-info">
              <div className="job-img">
                <a href="#">
                  {" "}
                  <img
                    src={kdsImage}
                    className="my-2"
                    style={{ width: "75%" }}
                    alt="KDS Project"
                  />
                </a>
              </div>
              <div className="job-text">
                <h4>Kitchen Display System Backend Project - Coming Soon!</h4>
                <p>
                 A Kitchen Display System, or KDS, is a complicated database/routing system that keeps track of customer orders, time, inventory, modifications, and so much more. I look forward to working on this project to improve and develop my skills in these areas. 
                </p>
              </div>
            </div>
          </div>
  
          <div className="job">
            <div className="job-info">
              <div className="job-img">
                <a href="#">
                  {" "}
                  <img
                    src={codingStockImage}
                    className="my-2"
                    style={{ width: "75%" }}
                    alt="Coding Stock Image"
                  />
                </a>
              </div>
              <div className="job-text">
                <h4>Coding Bootcamp Challenges</h4>
                <p>
                 During my time in coding bootcamp, we had the opportunity to work on weekly "challenges" that tested and grew our skills. Please feel free to look through my code in these areas, covering everything from basic HTML and CSS, to MERN stacks and mySQL! 
                </p>
                <Dropdown>
      <Dropdown.Toggle 
      variant="success" 
      id="dropdown-basic"
      bsStyle="default"
        bsSize="medium"
        style={{ maxHeight: "200px" }}
        title={"Qty"}
        key={1}
       
      >
        Bootcamp Challenges
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="https://github.com/kalaniJ94/week1-refactor-seo">HTML - Refactor - SEO</Dropdown.Item>
        <Dropdown.Item href="https://github.com/kalaniJ94/Personal-Portfolio">CSS</Dropdown.Item>
        <Dropdown.Item href="https://github.com/kalaniJ94/Password-Generator">Intro to Javascript</Dropdown.Item>
        <Dropdown.Item href="https://github.com/kalaniJ94/Practice-Quiz">Web APIs</Dropdown.Item>
        <Dropdown.Item href="https://github.com/kalaniJ94/Simple-Calendar">Third Party APIS</Dropdown.Item>
        <Dropdown.Item href="https://github.com/kalaniJ94/Weather-App">Server Side APIs</Dropdown.Item>
        <Dropdown.Item href="https://github.com/kalaniJ94/Readme_Generator">Node JS</Dropdown.Item>
        <Dropdown.Item href="https://github.com/kalaniJ94/Logo-Generator">OOP</Dropdown.Item>
        <Dropdown.Item href="https://github.com/kalaniJ94/Note_Taker">Express JS</Dropdown.Item>
        <Dropdown.Item href="https://github.com/kalaniJ94/Employee_Tracker">SQL</Dropdown.Item>
        <Dropdown.Item href="https://github.com/kalaniJ94/E-Commerce-BackEnd">Object Relational Mapping</Dropdown.Item>
        <Dropdown.Item href="https://gist.github.com/kalaniJ94/283fba2e355e2fe7356dbf53eae22035">Computer Science</Dropdown.Item>
        <Dropdown.Item href="https://github.com/kalaniJ94/Text-Editor">Progressive Web Applications</Dropdown.Item>
        <Dropdown.Item href="https://github.com/kalaniJ94/React-Portfolio">React</Dropdown.Item>
        <Dropdown.Item href="https://github.com/kalaniJ94/Book_Search_Engine">MERN Stack</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
  
  export default Projects;