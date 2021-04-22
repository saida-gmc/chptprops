import React from "react";

const ParentComponent = () => {
  const handleAlert = (FullName) => alert(`Profile user ${FullName}`);

  return (
    <div>
      <Profilecomponent
        FullName=" Saida Ben Salah"
        Bio="This is my biographie : I'm an hydrometeorologist engineer"
        Profession="Searching for new opportunities"
        handleAlert={handleAlert}
      >
        <div>
          <img
            height="200px"
            width="250px"
            src="https://cdn4.vectorstock.com/i/1000x1000/88/33/new-opportunity-grunge-rubber-stamp-vector-21118833.jpg"
            alt="myimage"
          />
        </div>
      </Profilecomponent>
    </div>
  );
};

export default ParentComponent;
