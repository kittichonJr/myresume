import React, { useState } from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import About from "./pages/About/About";
import Resume from "./pages/Resume/Resume";
import Projects from "./pages/Projects/Projects";

enum Path {
  about = "about",
  resume = "resume",
  projects = "projects",
  contact = "contact",
}

function App() {
  const [state, setState] = useState<Path>(Path.about);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    switch (event.currentTarget.name) {
      case Path.about:
        setState(Path.about);
        break;
      case Path.resume:
        setState(Path.resume);
        break;
      case Path.projects:
        setState(Path.projects);
        break;
      case Path.contact:
        setState(Path.contact);
        break;
      default:
        setState(Path.about);
    }
  };
  return (
    <section className="home">
      <div className="home-left-side">
        <Nav handleClick={handleClick} />
        <Profile handleClick={handleClick} />
      </div>
      <div className="home-right-side">
        {state === Path.about && <About />}
        {state === Path.resume && <Resume />}
        {state === Path.projects && <Projects />}
      </div>
    </section>
  );
}

export default App;
