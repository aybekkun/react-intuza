import React from "react";

const CourseInner = () => {
  return (
    <>
      {/*Home*/}
      <section
        id="about-home"
        style={{
          backgroundImage: `linear-gradient(rgba(9, 5, 54, 0.3), rgba(5, 4, 46, 0.7)),
    url("./images/development.webp")`,
        }}
      >
        <h2>Enroll Our Popular Courses And Skill Up </h2>
      </section>
      <section id="course-inner">
        <div className="overview">
          <img className="course-img" src="images/c1.jpg" />
          <div className="course-head">
            <div className="c-name">
              <h2>JavaScript Beginner courses</h2>
              <p>
                Modern JavaScript from the Beginning - all the way up to JS
                expert level!
              </p>
            </div>
            <span>$39.99</span>
          </div>
          <h2>Instructor</h2>
          <div className="tutor">
            <img src="images/c4.jpg" />
            <div className="tutor-det">
              <h5>John Deo</h5>
              <p>Web Developer At Google</p>
            </div>
          </div>
          <hr />
          <h3>Course Overview</h3>
          <p>
            JavaScript is among the most powerful and flexible programming
            languages of the web. It powers the dynamic behavior on most
            websites, including this one. Take-Away Skills: You will learn
            programming fundamentals and basic object-oriented concepts using
            the latest JavaScript syntax.
            <br />
            <br />
            JavaScript is a programming language that is one of the core
            technologies of the World Wide Web, alongside HTML and CSS. As of
            2022, 98% of websites use JavaScript on the client side for web page
            behavior, often incorporating third-party libraries. All major web
            browsers have a dedicated JavaScript engine to execute the code on
            users' devices.!
          </p>
          <hr />
          <h3>What you'll learn</h3>
          <div className="learn">
            <p>
              <i className="far fa-check-circle" />
              JavaScript from scratch - beginner to advance
            </p>
            <p>
              <i className="far fa-check-circle" />
              All about variable, functions, array, objects{" "}
            </p>
            <p>
              <i className="far fa-check-circle" />
              Object Oriented Programming{" "}
            </p>
            <p>
              <i className="far fa-check-circle" />
              Project-driven learning with plenty of example{" "}
            </p>
          </div>
        </div>
        <div className="enroll">
          <h3>This course includes:</h3>
          <i className="fa fa-cloud-download" aria-hidden="true" />
          <p>
            <i className="fa-regular fa-clock" aria-hidden="true" />
            52 hours video
          </p>
          <p>
            <i className="far fa-newspaper" />
            72 articals
          </p>
          <p>
            <i className="fa-regular fa-folder-open"></i>
            Materials
          </p>
          <p>
            <i className="fa-solid fa-file-code"></i>
            Portfolio
          </p>
          <p>
            <i className="fa-regular fa-copy"></i>
            Certificate
          </p>
          <div className="enroll-btn">
            <a className="blue" href="contact.html">
              Contact Us
            </a>
          </div>
        </div>
      </section>
      {/*Footer*/}
    </>
  );
};

export default CourseInner;
