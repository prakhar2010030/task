import React from "react";
import mba from "../Images/section2/mba.jpg";

const computerCourses = [
  {
    //  image: BCA,
    trade: "BCA",
  },
  {
    // image: MCA,
    trade: "MCA",
  },
];
const Course = ({ heading, data }) => {
  return (
    <div className="courseComponent">
      <h1 className="mainHeading">{heading}</h1>
      <hr className="horizontalLine" />
      <ul style={{ listStyle: "none" }}>
        {data
          ? data.map((data) => (
              <>
                <li className="courseList">
                  <img src={data.image} alt="courseImage" className="courseImage" />
                  <span>{data.trade}</span>
                </li>
                <hr />
              </>
            ))
          : ""}
      </ul>
    </div>
  );
};

export default Course;
