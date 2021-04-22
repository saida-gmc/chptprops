import React from "react";
import PropTypes from "prop-types";
import parentComponent from "./ParentComponent";

const Profile = ({ FullName, Bio, Profession, children }) => {
  return (
    <div>
      <h1>{FullName}</h1>
      <p>{Bio}</p>
      <h4> {Profession} </h4>
      {children}
      <button onClick={() => handleAlert(FullName)}>Name-user</button>
    </div>
  );
};

ChildComponent.defaultProps = {
  Bio: "This is a new profile user",
};

ChildComponent.propTypes = {
  FullName: PropTypes.string.isRequired,
  Bio: PropTypes.string,
  Profession: PropTypes.string.isRequired,
  handleAlert: PropTypes.func.isRequired,
};

export default Profile;
