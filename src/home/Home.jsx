import React from "react";
import "./Styles/Home.css";
import HighlightSection from "./Sections/HighlightSection";
import CareerSection from "./Sections/CareerSection";
import ComparisonSection from "./Sections/ComparisonSection";
import CourseSection from "./Sections/CourseSection";
const Home = () => {
  return (
    <>
      <HighlightSection />
      <CourseSection/>
      <CareerSection />
      <ComparisonSection />
    </>
  );
};

export default Home;
