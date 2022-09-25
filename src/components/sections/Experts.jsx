import React from "react";
import Profile from "../Profile";

const Experts = () => {
  return (
    <section id="experts">
      <h1>Bizdiń mentorlar</h1>
      <p className="mid">Bizde tájriybeli mentorlar bar!</p>
      <div className="expert-box">
        <Profile/>
        <Profile/>
        <Profile/>
      </div>
    </section>
  );
};

export default Experts;
