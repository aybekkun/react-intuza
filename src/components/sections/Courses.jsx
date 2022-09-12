import React from "react";
import Course from "../Course";

const Courses = () => {
  return (
    <section id="course">
      <h1>Biziń Kurslar </h1>
      <p className="mid">
        Bul jerde IT tarawına tiyisli barlıq kurslardı tabasız 
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
