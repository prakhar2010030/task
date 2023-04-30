import React from "react";
import "../Styles/career.css";
import CareerCard from "../Components/CareerCard";
import { careerData } from "../Constants/CareerConstant";
const CareerSection = () => {
  return (
    <div className="outerCareerContainer">
      <div className="upperCareerContainer">
        <div className="headingContainer">
          <h1>Career Scopes for</h1>
          <h1>Students</h1>
        </div>
        <p>
          There are a lot of career scopes for students who completed the
          degrees in India. Student can choose any of the courses from different
          programs in management programs. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Soluta, incidunt!
        </p>
      </div>
      <div className="upperLowerContainer">
        {careerData.map((data, i) => (
          <CareerCard
            key={i}
            title={data.title}
            description={data.Description}
            Icon={data.Icon}
          />
        ))}
      </div>
    </div>
  );
};

export default CareerSection;
