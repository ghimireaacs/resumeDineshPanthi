import React from "react";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile-items">
        <div className="profile-background">
          <div className="profile-picture">
            <img src="/assets/images/profilePic.png" alt="Dinesh Panthi" />
          </div>
        </div>
        <div className="titles">
          <p>Dinesh Panthi</p>
          <p>Associate Professor</p>
        </div>
        <div className="university">
          <p>Nepal</p>
          <p>Sanskrit</p>
          <p>University</p>
        </div>
      </div>
    </div>
  );
};
export default Profile;
