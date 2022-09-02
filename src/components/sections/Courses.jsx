import React from "react";
import Course from "../Course";

const Courses = () => {
  return (
    <section id="course">
      <h1>Our Popular Courses</h1>
      <p className="mid">
        Here, Our some popular courses which is enrolled by students!
      </p>
      <div className="course-box">
        <Course/>
        <Course/>
        <Course/>
      </div>
    </section>
  );
};

export default Courses;
