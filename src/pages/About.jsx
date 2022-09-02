import React from "react";
import Features from "../components/sections/Features";

const About = () => {
  return (
    <>
      {/*Home*/}
      <section
        id="about-home"
        style={{
          backgroundImage: `linear-gradient(rgba(9, 5, 54, 0.3), rgba(5, 4, 46, 0.7)),
    url("./images/back1.jpg")`,
        }}
      >
        <h2>About Intuza Academy /</h2>
      </section>
      {/*about-container*/}
      <section id="about-container">
        <div className="about-img">
          <img src="images/a.png" />
        </div>
        <div className="about-text">
          <h2>
            Welcome to TechEduca, Enhance Your Skills With Best Online Course
          </h2>
          <p>
            You can start &amp; finish one of these popular courses in under a
            day - for free! Check out the list below... Take the courses for
            free
          </p>
          <div className="about-fe">
            <img src="images/fe1.png" />
            <div className="fe-text">
              <h5>400+ Courses</h5>
              <p>
                You can start &amp; finish one of these popular courses in under
                our site
              </p>
            </div>
          </div>
          <div className="about-fe">
            <img src="images/fe2.png" />
            <div className="fe-text">
              <h5>Life-Time Access</h5>
              <p>You can access courses any time, any where from our site</p>
            </div>
          </div>
        </div>
      </section>
      {/*features*/}
      <Features />
      {/*Trusted by*/}
      <section id="trust">
        <h1>Trusted By</h1>
        <p>Our Courses are trusted by top University of World!</p>
        <div className="trust-img">
          <img src="images/trust (1).png" />
          <img src="images/trust (2).png" />
          <img src="images/trust (3).png" />
          <img src="images/trust (4).png" />
          <img src="images/trust (5).png" />
          <img src="images/trust (6).png" />
        </div>
      </section>
      {/*Footer*/}
    </>
  );
};

export default About;
