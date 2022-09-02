import React from "react";

const Features = () => {
  return (
    <section id="features">
      <h1>Awesome Features</h1>
      <p className="mid">
        We Provide some awesome features for our enrolled students
      </p>
      <div className="fea-base">
        <div className="fea-box">
          <i className="fas fa-graduation-cap" />
          <h3>Scholarship Facility</h3>
          <p>If you enroll in our courses you get 100% Scholarship.</p>
        </div>
        <div className="fea-box">
        <i className="fa-solid fa-location-dot"></i>
          <h3>Placement</h3>
          <p>We also placed to our students in top company.</p>
        </div>
        <div className="fea-box">
          <i className="fas fa-award" />
          <h3>Global Certificate</h3>
          <p>
            We provide a Global Certificate to our students so that they boost
            their career easily.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
