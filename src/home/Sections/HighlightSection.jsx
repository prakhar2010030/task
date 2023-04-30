import React from "react";
import "./../Styles/hightlights.css";

import HighLightCard from "../Components/Card";
import { sectionLeftData, sectionRightData } from "../Constants/constant";

const HighlightSection = () => {
  return (
    <div className="outerContainer">
      <div className="upperContainer">
        <h1 className="Heading">Highlights about India</h1>
      </div>
      <div className="lowerContainer">
        <div className="lowerRightContainer">
          {sectionLeftData.map((Data, i) => (
            <HighLightCard
              key={i}
              title={Data.title}
              Description={Data.Description}
              img={Data.Image}
            />
          ))}
        </div>
        <div className="lowerRightContainer">
          {sectionRightData.map((Data, i) => (
            <HighLightCard
              key={i}
              title={Data.title}
              Description={Data.Description}
              img={Data.Image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HighlightSection;
