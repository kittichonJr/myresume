import React from "react";
import { ImUser, ImProfile, ImStack, ImBubbles } from "react-icons/im";

const Nav = () => {
  return (
    <nav className="navigation">
      <ul className="menu">
        <li>
          <ImUser className="menu__icon" />
          <span>about</span>
        </li>
        <li>
          <ImProfile className="menu__icon" />
          <span>resume</span>
        </li>
        <li>
          <ImStack className="menu__icon" />
          <span>projects</span>
        </li>
        <li>
          <ImBubbles className="menu__icon" />
          <span>contact</span>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
