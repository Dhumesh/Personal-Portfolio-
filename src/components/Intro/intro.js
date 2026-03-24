import React from 'react';
import './intro.css';

const Intro = () => {
  return (
    <section id="intro" className="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <h1 className="introText">
          I'm <span className="introName">Dhumesh Priya</span>
          <br />
          <span className="introRole">Undergraduate</span>
        </h1>
        <p className="introPara">
          An undergraduate in Software Engineering with a strong interest in learning
          new technologies. A focused and hardworking student preparing for internship
          opportunities to gain real experience.
        </p>
        <a
          href="https://www.linkedin.com/in/dhumeshpriya05/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn">Let&apos;s Connect</button>
        </a>
      </div>
    </section>
  );
};

export default Intro;
