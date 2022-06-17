import React from "react";
import Title from "../../components/Title/Title";
import {
  ImBriefcase,
  ImBook,
  ImStarFull,
  ImEmbed2,
  ImEarth,
} from "react-icons/im";

const Resume = () => {
  return (
    <section className="resume scrollbar">
      <Title title="resume" />
      <div className="exp-and-edu">
        <div className="exp --border-left">
          <h1>
            <ImBriefcase className="resume__icon" />
            &nbsp;&nbsp;&nbsp;experience
          </h1>
          <div className="exp-content">
            <h6 className="exp-date">
              <div className="dot"></div> Aug 2021 - Aug 2018
            </h6>
            <h6 className="exp-title">CNC Machine Operator</h6>
            <h6 className="exp-company">Kobayashi Corporation, Japan</h6>
            <ul>
              <li>
                Collaborated in a professional team to solve workflow issues.
              </li>
              <li>
                Measured completed pieces to identify product irregularities and
                specifications non-conformance; adjusting machines to correct
                issues.
              </li>
            </ul>
          </div>
          <div className="exp-content">
            <h6 className="exp-date">
              <div className="dot"></div> Nov 2017 - April 2017
            </h6>
            <h6 className="exp-title">Soldier</h6>
            <h6 className="exp-company">Royal Thai Army, Thailand</h6>
            <ul>
              <li>
                Secured and protected military property, assets, and personnel.
              </li>
              <li>
                Responded to reports of irregular activities and notified
                dispatchers for required emergency units.
              </li>
            </ul>
          </div>
        </div>
        {/* education */}
        <div className="edu --border-left">
          <h1>
            <ImBook className="resume__icon" />
            &nbsp;&nbsp;&nbsp;education
          </h1>
          <div className="edu-content">
            <h6 className="edu-date">
              <div className="dot"></div> Jan 2022 - April 2022
            </h6>
            <h6 className="edu-title">Junior Software Developer JSD#1</h6>
            <h6 className="edu-company">Generation Thailand Bootcamp</h6>
            <ul>
              <li>Full time bootcamp 9AM - 17PM</li>
              <li>Online learning</li>
            </ul>
          </div>
          <div className="edu-content">
            <h6 className="edu-date">
              <div className="dot"></div> March 2017 - May 2015
            </h6>
            <h6 className="edu-title">
              Diploma in Information Technology (IT)
            </h6>
            <h6 className="edu-company">
              Eastern Technology College(E-Tech), Chonburi
            </h6>
            <ul>
              <li>Graduated with honors.</li>
              <li>Passed first round of NECTEC Tech contest 2017</li>
            </ul>
          </div>
        </div>
        {/* qualification */}
        <div className="qualification --border-left">
          <h1>
            <ImStarFull className="resume__icon" />
            &nbsp;&nbsp;&nbsp;qualification
          </h1>
          <div className="qualification-content">
            <h6 className="qualification-date">
              <div className="dot"></div> April 2022
            </h6>
            <h6 className="qualification-title">
              Certificate of Completion of Junior Software Developer Generation
              Thailand
            </h6>
          </div>
          <div className="qualification-content">
            <h6 className="qualification-date">
              <div className="dot"></div> Aug 2021
            </h6>
            <h6 className="qualification-title">
              Certificate of Completion of Technical Intern Training in Japan
            </h6>
          </div>
          <div className="qualification-content">
            <h6 className="qualification-date">
              <div className="dot"></div> July 2019
            </h6>
            <h6 className="qualification-title">
              Japanese Language Proficiency Test (JLPT): N4
            </h6>
          </div>
          <div className="qualification-content">
            <h6 className="qualification-date">
              <div className="dot"></div> Aug 2018 - Sep 2018
            </h6>
            <h6 className="qualification-title">
              IM Japan Training Center Kasukabe in Japan
            </h6>
          </div>
        </div>
      </div>
      {/* skill */}
      <Title title="my skills" />
      <div className="myskill --border-left">
        <h1>
          <ImEmbed2 className="resume__icon" />
          &nbsp;&nbsp;&nbsp;coding
        </h1>
        <div className="myskill-beginner">
          <div className="dot"></div>
          <h3>beginner</h3>
          <h6>finding...</h6>
        </div>
        <div className="myskill-intermediate">
          <div className="dot"></div>
          <div>
            <h3>intermediate</h3>
          </div>
          <div className="myskill-intermediate-detail">
            <h6>Typscript</h6>
            <h6>JavaScript</h6>
            <h6>React</h6>
            <h6>Tailwind</h6>
            <h6>NodeJs</h6>
            <h6>express</h6>
            <h6>MongoDB</h6>
          </div>
        </div>
        <div className="myskill-proficient">
          <div className="dot"></div>
          <h3>proficient</h3>
          <h6>HTML</h6>
          <h6>CSS</h6>
        </div>
      </div>

      <div className="mylanguage --border-left">
        <h1>
          <ImEarth className="resume__icon" />
          &nbsp;&nbsp;&nbsp;languages
        </h1>
        <div className="mylanguage-beginner">
          <div className="dot"></div>
          <h3>Native</h3>
          <h6>🇹🇭 Thai</h6>
        </div>
        <div className="mylanguage-beginner">
          <div className="dot"></div>
          <h3>Read Write Speak &amp; General Communicate</h3>
          <h6>🇺🇸 English</h6>
          <h6>🇯🇵 Japanese</h6>
        </div>
      </div>
    </section>
  );
};

export default Resume;
