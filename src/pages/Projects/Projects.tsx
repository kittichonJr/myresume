import React from "react";
import Title from "../../components/Title/Title";
import resort from "../../assets/project-resort.png";
import cooking from "../../assets/project-cooking.png";
import final from "../../assets/project-final-project.png";

const Projects = () => {
  return (
    <section className="projects scrollbar">
      <Title title="my projects" />
      <div className="projects-all --border-left">
        <a
          href="https://typescript-resort.vercel.app/"
          className="project-content-contain"
        >
          <img src={resort} alt="" />
          <h2>resort</h2>
          <h3>react/typescript</h3>
        </a>
        <a
          href="https://cooking-with-react.vercel.app/"
          className="project-content-contain"
        >
          <img src={cooking} alt="" />
          <h2>cooking recipe</h2>
          <h3>react/javascript</h3>
        </a>
        <a
          href="https://final-project-jsd1-djmapp.vercel.app/AddActivity"
          className="project-content-contain"
        >
          <img src={final} alt="" />
          <h2>jsd#1 final project</h2>
          <h3>react/javascipt</h3>
        </a>
      </div>
    </section>
  );
};

export default Projects;
