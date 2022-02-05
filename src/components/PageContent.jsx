import React from "react";
import imageInSrc from "../images/imageInSrc.jpg";
import imageInPublic from "../images/imageInPublic.jpg";
import "./style.css";

const PageContent = () => {
  return (
    <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
      <h1 className="title red">Jeeby the cat</h1>
      <br />
      <img src={imageInSrc} alt="cat1" />
      <br />
      <img src={imageInPublic} alt="cat2" />
    </div>
  );
};

export default PageContent;
