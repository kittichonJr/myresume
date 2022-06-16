import React from "react";
import {
  ImGithub,
  ImTwitter,
  ImLinkedin,
  ImDownload3,
  ImArrowRight2,
} from "react-icons/im";

const Profile = () => {
  return (
    <section className="profile">
      <div className="profile-header">
        <div className="profile-header-bg-img"></div>
        <div className="profile-header--shape"></div>
        <div className="profile-header-img"></div>
        <div className="profile-header-img--shadow"></div>
        <div className="profile-header-text-contain">
          <h1>kittichon phitakkiri</h1>
          <h2>junior software developer</h2>
          <div className="profile-header-text-icon">
            <ImGithub className="profile-icon" />
            <ImTwitter className="profile-icon" />
            <ImLinkedin className="profile-icon" />
          </div>
        </div>
      </div>
      <div className="profile-button">
        <button className="btn profile-button__button">
          download cv <ImDownload3 className="profile-icon" />
        </button>
        <button className="btn profile-button__button">
          contact me <ImArrowRight2 className="profile-icon" />
        </button>
      </div>
    </section>
  );
};

export default Profile;
