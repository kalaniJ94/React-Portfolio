import React from "react";
import profileImage from "../../../public/assets/kalaniHeadshot.jpg";
function About() {
    return (
      <section id="about-me" className="my-5 intro">
      <h2>Welcome!</h2>
      <div className="flex-row">
        <h1 id="about" className="section-title primary-border">
          About Me
        </h1>
      </div>
      <div className="flex-row">
        <div className="intro-info">
          <div className="intro-img">
            <img src={profileImage} style={{ width: "50%" }} alt="profile" />
          </div>
          <p>
            My name is Kalani Jones and I am a University of Denver Full-Stack Web Development student. After nine years in the culinary industry, I am excited to make a career change,  look forward to applying my newly formed skills, with a passion for quality and work ethic gained during my time as a Chef. I currently live in Broomfield, CO, and enjoying hiking and gaming in my free time. 
          </p>
        </div>
      </div>
    </section>
    )
}

export default About;