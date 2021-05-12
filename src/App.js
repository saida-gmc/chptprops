import React from "react";
import "./App.css";
import ProfileComponent from "./Profile/ProfileComponent";

function App() {
  const profile = {
    Fullname: "Saida Ben Salah",
    bio: " I'm an hydrometeorologist engineer",
    profession: "Full Stack JS student",
  };
  const handleAlert = (e) => alert(e);
  return (
    <div className="App">
      <ProfileComponent profile={profile} handleAlert={handleAlert}>
        <img
          src="https://lh3.googleusercontent.com/ytP9VP86DItizVX2YNA-xTYzV09IS7rh4WexVp7eilIcfHmm74B7odbcwD5DTXmL0PF42i2wnRKSFPBHlmSjCblWHDCD2oD1oaM1CGFcSd48VBKJfsCi4bS170PKxGwji8CPmehwPw=w200-h247-no"
          alt="Person"
          className="card__image"
        />
      </ProfileComponent>
    </div>
  );
}

export default App;
