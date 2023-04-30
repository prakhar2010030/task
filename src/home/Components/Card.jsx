import React from "react";
import "../Styles/Card.css";
const Card = ({ title, Description, img }) => {
  return (
    <div className="cardContainer">
      <div className="textContainer">
        <h1>{title}</h1>
        <p>{Description}</p>
      </div>
      <img src={img} alt="relativeImage" className="image" />
    </div>
  );
};

export default Card;


