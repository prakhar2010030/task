import React from "react";
import "../Styles/CareerCard.css";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
const Card = ({ title, description, Icon }) => {
  return (
    <div className="careerCardContainer">
      <div className="careerTextContainer">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div className="iconContainer">
      <Icon />
      </div>
    </div>
  );
};

export default Card;


