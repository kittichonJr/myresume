import React from "react";
import Title from "../../components/Title/Title";

const About = () => {
  return (
    <section className="about scrollbar">
      <Title title="about me" />
      <div className="about-me --border-left">
        <p>
          I am Kittichon Phitakkiri, Junior Software Developer from Thailand. I
          am crossing career paths go-to software development with a passion for
          coding. And love to develop and challenge every day.
        </p>
        <div className="about-me-detail">
          <h3>
            AGE.....<span>26</span>
          </h3>
          <h3>
            RESIDENCE.....<span>Thailand</span>
          </h3>
          <h3>
            STATUS.....<span>Unemployed</span>
          </h3>
          <h3>
            ADDRESS.....<span>Bangkok, TH</span>
          </h3>
        </div>
      </div>
      <Title title="tech stack" />
      <div className="about-tech --border-left">
        <h1>web development</h1>
        <div className="about-tech-web">
          <h2>
            <span>M</span>
            <span>E</span>
            <span>R</span>
            <span>N</span>
          </h2>
          <h2>
            <span>MongoDB</span>
            <span>Express</span>
            <span>ReactJS/TS</span>
            <span>NodeJS</span>
          </h2>
        </div>
        <div className="curly-end"></div>
        <h1>control version</h1>
        <div className="about-tech-git">
          <h2>
            <span>G</span>
          </h2>
          <h2>
            <span>Git</span>
          </h2>
        </div>
        <div className="curly-end"></div>
      </div>
      <Title title="looking for" />
      <div className="about-job --border-left">
        <h2>Job Position</h2>
        <ul>
          <li>🔥 Front End Developer</li>
          <li>🔍 Back End Developer</li>
          <li>💪 Full-Stack Developer</li>
          <li>✨ Smart Contract Developer</li>
        </ul>
      </div>
      <Title title="interesting" />
      <div className="about-interesting --border-left">
        <ul>
          <li>BlockChain</li>
          <li>Web3</li>
          <li>Smart Contract</li>
          <li>Traditional Finance</li>
        </ul>
      </div>
    </section>
  );
};

export default About;
