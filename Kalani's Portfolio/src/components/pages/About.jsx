import React from "react";
import profileImage from '../../assets/kalaniHeadshot.jpg';
function About() {
    return (
<section id="about-me" className="my-5 intro">
      <div className="flex-row">
        <h1 id="about" className="section-title primary-border">
          About Me
        </h1>
      </div>
      <div className="flex-row">
        <div className="intro-info">
          <div className="intro-img">
            <img src={profileImage} style={{ width: "100%" }} alt="profile" />
          </div>
          <p>
            It's a me.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum veniam amet nobis laboriosam cum consequatur quia accusantium, similique excepturi quam architecto. Deleniti totam quasi repudiandae, ullam consequuntur dolorum cum officiis?
          </p>
        </div>
      </div>
    </section>
    )
}

export default About;