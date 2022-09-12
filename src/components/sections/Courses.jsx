import React from "react";
import { useSelector } from "react-redux";
import Course from "../Course";
//{ id, name, price, image, duration }
const Courses = () => {
  const courses = useSelector((state) => state.course.courses);
  return (
    <section id="course">
      <h1>Biziń Kurslar </h1>
      <p className="mid">
        Bul jerde IT tarawına tiyisli barlıq kurslardı tabasız
      </p>
      <div className="course-box">
        {courses.map((course) => (
          <Course
            key={course.id}
            id={course.id}
            name={course.name}
            duration={course.duration}
            price={course.price}
            image={course.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Courses;
