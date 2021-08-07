import React from "react";
import Sidebar from "../../components/SideBar/SideBar.js";
import "./ProfileCreation.scss";
import SelectButtonIcon from "../../components/Forms/SelectButtonIcon/SelectButtonIcon.js";

const ProfileCreation = () => {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="profile-wrapper">
        <h2>Persona and capabilities</h2>
        <div className="profile-main">
          <SelectButtonIcon />
        </div>
      </div>
    </div>
  );
};

export default ProfileCreation;
