import React, { FC } from "react";
import { ImUser, ImProfile, ImStack, ImBubbles } from "react-icons/im";

interface Props {
  handleClick: (v: React.MouseEvent<HTMLButtonElement>) => void;
}

const Nav: FC<Props> = ({ handleClick }) => {
  return (
    <nav className="navigation">
      <ul className="menu">
        <button className="btn" name="about" onClick={(e) => handleClick(e)}>
          <ImUser className="menu__icon" />
          <span>about</span>
        </button>
        <button className="btn" name="resume" onClick={(e) => handleClick(e)}>
          <ImProfile className="menu__icon" />
          <span>resume</span>
        </button>
        <button className="btn" name="projects" onClick={(e) => handleClick(e)}>
          <ImStack className="menu__icon" />
          <span>projects</span>
        </button>
        <button className="btn" name="contact" onClick={(e) => handleClick(e)}>
          <ImBubbles className="menu__icon" />
          <span>contact</span>
        </button>
      </ul>
    </nav>
  );
};

export default Nav;
