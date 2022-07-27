import React from 'react';
import profilePic from '../../assets/personal/EricPhoto.JPG'

function About() {
  return (
    <section id='aboutContainer'>
      <h1 id="about">About Me</h1>
      <img id='profilePic' src={profilePic} className="my-2" alt="cover" />
      <p>
        Ever since I was a little kid, to my parents' dismay, I loved to take things apart and put them back together. 
        Anything from toys to basic electronics, I just wanted to know why and how things worked.  I remember, one day,  going to my grandparents' house, and when my grandfather's original Xbox console started having problems I begged that we could take it apart and look inside. 
        However daunting and out of reach for me to understand at the time, it amazed me nonetheless. Throughout my middle and high school experience, the need for me to learn about how things worked hadn't changed. Then my senior year of high school I got to take both computer science and physics. What a blast. The culmination of these two classes was everything I had built up a passion for over so many years. <br />
        <br />
        Physics, showing me how everything in the universe works and manufactures itself, around a set of unbreakable rules that has yet to be fully completed.  <br />
        <br />
        AND <br />
        <br />
        Computer science, which gave me a front-row seat to the inner workings of the software inside the technology I was so fascinated with. <br />
        <br />
        From that moment on I had decided I wanted to be a part of the small group of physics majors at Gustavus Adolphus College. 
        I began studying mathematics (another of my favorite subjects), math, and computer science, at a much higher level than just the previous year.
        Due to the fact that high school physics was a breeze, I knew there was still much for me to learn in the next four years. 
        Throughout my time I found some classes to be more interesting than others, as we did a lot of theoretical physics, but we were exposed to many coding programs and languages, along with the hands-on labs, it was riveting. All along the way, I was immersed in the world of mathematics, making my understanding of the rules behind physics that much deeper. <br />

        <br />
        Now after experienceing the careers in the engineering and physics world, I find that my
        passion lies within the world of computer science, software, and full stack development.
      </p>
    </section>
  );
}

export default About;