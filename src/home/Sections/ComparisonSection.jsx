import React from "react";
import "../Styles/comparision.css";
import ComparisionCard from "../Components/ComparisionCard";
import { arrayList, arrayList1, arrayList2 } from "../Constants/Comparision";
const ComparisonSection = () => {
  return (
    <div className="comparisionContainer">
      <div className="comparisonHeading">
        <span>Study India</span>
        <span>Vs</span>
        <span>Study Abroad</span>
      </div>
      <div className="comparisionCardContainer">
        <ComparisionCard color="bisque" arrayList={arrayList} />
        <ComparisionCard arrayList={arrayList1} />
        <ComparisionCard arrayList={arrayList2} />
      </div>
    </div>
  );
};

export default ComparisonSection;
