import React from "react";
import { useNavigate } from "react-router-dom";

const Course = ({ id = 1, duration = 2 }) => {
  const navigate = useNavigate();

  const onClickPost = ()=>{
    navigate(`/course/${id}`);
    window.scrollTo(0, 360);
  }
  return (
    <div className="courses">
      <img
        className="link"
        onClick={onClickPost}
        src="./images/c1.jpg"
        alt="image"
      />
      <div className="details">
        <span>Dawamlıǵı {duration} ay</span>
        <h6 className="link" onClick={onClickPost}>
          JavaScript Beginner Courses
        </h6>
      </div>
      <div className="cost">350 000 UZS</div>
    </div>
  );
};

export default Course;
