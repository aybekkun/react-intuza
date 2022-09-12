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
    url("./images/back1.webp")`,
        }}
      >
        <h2>Intuza Academy haqqında /</h2>
      </section>
      {/*about-container*/}
      <section id="about-container">
        <div className="about-img">
          <img src="images/a.webp" />
        </div>
        <div className="about-text">
          <h2>Intuza IT Academy | Zamanaģoy kàsipler mektebi</h2>
          <p>
            Endi siz Intuza IT akademiyasında IT tarawın nolden Qániyge
            dárejesine shekem úyrene alasız
          </p>
          <div className="about-fe">
            <img src="images/fe1.webp" />
            <div className="fe-text">
              <h5>7+ Kurslar</h5>
              <p>
                UI/UX Designer, Front-End, Back-End, Compyuter Foundition, Scratch,
                Kotlin, Android bulardıń bári Intuza IT akademiyasında
              </p>
            </div>
          </div>
          <div className="about-fe">
            <img src="images/fe2.webp" />
            <div className="fe-text">
              <h5>Intuza IT akademiyası esikleri hàmme ushın ashıq!</h5>
              <p>Bizde toqtawsız jańa toparlar ashılıp turadı</p>
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
          <img src="images/trust (1).webp" />
          <img src="images/trust (2).webp" />
          <img src="images/trust (3).webp" />
          <img src="images/trust (4).webp" />
          <img src="images/trust (5).webp" />
          <img src="images/trust (6).webp" />
        </div>
      </section>
      {/*Footer*/}
    </>
  );
};

export default About;
