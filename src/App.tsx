import React from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <section className="home">
      <div className="home-left-side">
        <Nav />
        <Profile />
      </div>
      <div className="home-right-side"></div>
    </section>
  );
}

export default App;
