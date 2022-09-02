import React from "react";
import { Link } from "react-router-dom";
import Courses from "../components/sections/Courses";
import Experts from "../components/sections/Experts";
import Features from "../components/sections/Features";
const Home = () => {
  return (
    <>
      {/*Home*/}
      <section
        id="home"
        style={{
          backgroundImage: `linear-gradient(rgba(9, 5, 54, 0.3), rgba(5, 4, 46, 0.7)),
    url("./images/back.jpg") `,
        }}
      >
        <h2>Enhance Your Future With Our Courses</h2>
        <p />
        <div className="btn">
          <Link className="blue" to="/about">
            Learn More
          </Link>
          <Link className="yellow" to="/course">
            Visit Courses
          </Link>
        </div>
      </section>
      {/*features*/}
      <Features />
      {/*Courses*/}
      <Courses />
      {/* Registration*/}
      <section id="registration">
        <div className="reminder">
          <p>Get 100 Online Courses for Free</p>
          <h1>Register To Get It</h1>
          <div className="time">
            <div className="date">
              18
              <br />
              Days
            </div>
            <div className="date">
              23
              <br />
              Hours
            </div>
            <div className="date">
              06
              <br />
              Mins
            </div>
            <div className="date">
              58
              <br />
              Secs
            </div>
          </div>
        </div>
        {/*Form*/}
        <div className="form">
          <h3>Create Free Account NOW!</h3>
          <input type="text" placeholder="Name" name="" id="" />
          <input type="text" placeholder="Email Address" name="" id="" />
          <input type="text" placeholder="Phone Number" name="" id="" />
          <div className="btn">
            <a className="yellow" href="#">
              Submit Form
            </a>
          </div>
        </div>
      </section>
      {/* Community Profiles*/}
      <Experts />
      {/*Footer*/}
    </>
  );
};

export default Home;
