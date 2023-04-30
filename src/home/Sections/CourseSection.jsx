import React from "react";
import "../Styles/Course.css";
import library from '../Images/section2/library.png'
import Course from "../Components/Course";

import { computerCourses,medicalCourses,EngineeringCourses,managementCourses } from "../Constants/courseConstants";


const CourseSection = () => {
  return (
    <div className="courseOuterContainer">
      <div className="contentContainer">
        <div className="courseHeading">
          <span>Top Courses</span>
          <span>to</span>
          <span>Study India</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sunt voluptates voluptas reiciendis dignissimos velit doloremque iusto placeat corrupti dolorem. Sint adipisci porro tempora totam quasi in, quia sit quis inventore commodi fugiat, explicabo laudantium error, repellendus deserunt molestias magni!
        </p>
        <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti minus voluptatum adipisci! Natus voluptatem debitis a architecto repellat rerum eum?
        </p>
      </div>
      <div className="imageContainer">
        <div className="leftContainer">
          <img src={library} alt="library" className="libraryImage" />
        </div>
        <div className="righContainer">
          <div className="leftCourses">
            <Course heading='computer Courses' data={computerCourses}/>
            <Course heading='Medical Courses' data={medicalCourses}/>
          </div>
          <div className="rightCourses">
          <Course heading='Management Courses' data={managementCourses}/>
            <Course heading='Engineering Courses' data={EngineeringCourses}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseSection;
