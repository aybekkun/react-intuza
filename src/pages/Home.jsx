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
        <h2>Kurslarımız menen keleshegińizdi qurıń</h2>
        <p />
        <div className="btn">
          <Link className="blue" to="/about">
            Qosımsha maǵlıwmat alıw
          </Link>
          <Link className="yellow" to="/course">
            Kurslarımız
          </Link>
        </div>
      </section>
      {/*features*/}
      <Features />
      {/*Courses*/}
      <Courses />
      {/* Community Profiles*/}
      <Experts />
      {/*Footer*/}
    </>
  );
};

export default Home;
