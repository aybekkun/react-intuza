import React from "react";
import { useNavigate } from "react-router-dom";

const Course = ({ id = 1, duration = 2, name, price, image }) => {
  const navigate = useNavigate();

  const onClickPost = () => {
    navigate(`/course/${id}`);
    window.scrollTo(0, 360);
  };
  return (
    <div className="courses">
      <img
        className="link"
        onClick={onClickPost}
        src={`./images/${image}`}
        alt="Курс ментор"
      />
      <div className="details">
        <span>Dawamlıǵı {duration} ay</span>
        <h6 className="link" onClick={onClickPost}>
          {name}
        </h6>
      </div>
      <div className="cost">
        {new Intl.NumberFormat("ru-RU").format(price)} UZS
      </div>
    </div>
  );
};

export default Course;
