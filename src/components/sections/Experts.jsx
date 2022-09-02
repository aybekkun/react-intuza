import React from "react";
import Profile from "../Profile";

const Experts = () => {
  return (
    <section id="experts">
      <h1>Community Expert</h1>
      <p className="mid">We have best Community Expert from whole world!</p>
      <div className="expert-box">
        <Profile/>
        <Profile/>
        <Profile/>
      </div>
    </section>
  );
};

export default Experts;
