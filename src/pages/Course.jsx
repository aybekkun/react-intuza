import React from "react";
import Courses from "../components/sections/Courses"
const Course = () => {
  return (
    <>
      {/*Home*/}
      <section id="about-home"    style={{
          backgroundImage: `linear-gradient(rgba(9, 5, 54, 0.3), rgba(5, 4, 46, 0.7)),
    url("./images/development.webp")`,
        }}>
        <h2>Courses /</h2>
      </section>
    <Courses/>
      {/*Footer*/}
 
    </>
  );
};

export default Course;
