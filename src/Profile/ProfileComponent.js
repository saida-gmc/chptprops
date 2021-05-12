import React from "react";
import PropTypes from "prop-types";

const ProfileComponent = ({ profile, children, handleAlert }) => {
  return (
    <div className="card">
      {children}
      <p className="card__name">{profile.Fullname}</p>
      <div className="grid-container">
        <div className="grid-child-posts">
          <h3>{profile.bio}</h3>
          <h3>{profile.profession}</h3>
        </div>
      </div>
      <button
        classNameName="btn draw-border"
        onClick={(e) => handleAlert(`Profile user is ${profile.Fullname}`)}
      >
        Click to show the User Name
      </button>
    </div>
  );
};

ProfileComponent.defaultProps = {
  Bio: "This is a new Profile user",
};

ProfileComponent.propTypes = {
  Fullname: PropTypes.string.isRequired,
  Bio: PropTypes.string,
  Profession: PropTypes.string.isRequired,
  handleAlert: PropTypes.func.isRequired,
};

export default ProfileComponent;
