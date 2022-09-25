import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
const CourseInner = () => {
  const courses = useSelector((state) => state.course.courses);
  const { id } = useParams();
  const course = courses.find((course) => Number(course.id) === Number(id));
  return (
    <>
      {/*Home*/}
      <section
        id="about-home"
        style={{
          backgroundImage: `linear-gradient(rgba(9, 5, 54, 0.3), rgba(5, 4, 46, 0.7)), url("/images/development.webp")`,
        }}
      >
        <h2>Kurslarımızǵa jazılıń hám bilimińizdi asırıń </h2>
      </section>
      <section id="course-inner">
        <div className="overview">
          <img className="course-img" src={`/images/${course.image}`} />
          <div className="course-head">
            <div className="c-name">
              <h2>{course.name}</h2>
              <p>Modern JavaScript from the Beginning - all the way up to JS expert level!</p>
            </div>
            <span>
              {new Intl.NumberFormat("ru-RU").format(course.price)} UZS
            </span>
          </div>
          <h2>Kim ótedi</h2>
          <div className="tutor">
            <img src="/images/c4.webp" />
            <div className="tutor-det">
              <h5>John Deo</h5>
              <p>Web Developer At Google</p>
            </div>
          </div>
          <hr />
          <h3>Kurs haqqında</h3>
          <p>{course.overview}</p>
          <hr />
          <h3>Ne úyrenesiz</h3>
          <div className="learn">
            {course.learnlist.map((list) => (
              <p>
                <i className="far fa-check-circle" />
                {list}
              </p>
            ))}
          </div>
        </div>
        <div className="enroll">
          <h3>Bul kurs óz ishine:</h3>
          <i className="fa fa-cloud-download" aria-hidden="true" />
          <p>
            <i className="fa-regular fa-clock" aria-hidden="true" />
            6 ay 
          </p>
          <p>
            <i className="far fa-newspaper" />
          Qosımsha testler
          </p>
          <p>
            <i className="fa-regular fa-folder-open"></i>
           Kurs materiyalları
          </p>
          <p>
            <i className="fa-solid fa-file-code"></i>
            Portfolio
          </p>
          <p>
            <i className="fa-regular fa-copy"></i>
            Sertifikat
          </p>
          <div className="enroll-btn">
            <Link to="/contact" className="blue">
              Jazılıw
            </Link>
          </div>
        </div>
      </section>
      {/*Footer*/}
    </>
  );
};

export default CourseInner;
