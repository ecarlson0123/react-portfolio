import React from 'react';
import profilePic from '../../assets/personal/EricPhoto.JPG'

function About() {
  return (
    <section>
      <h1 id="about">About Me</h1>
      <img src={profilePic} className="my-2" style={{ width: "100%" }} alt="cover" />
    </section>
  );
}

export default About;