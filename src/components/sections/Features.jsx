import React from "react";

const Features = () => {
  return (
    <section id="features">
      <h1>Qolaylıqlar</h1>
      <p className="mid">Bizdiń qolaylıqlardı kórinler.</p>
      <div className="fea-base">
        <div className="fea-box">
          <i className="fas fa-graduation-cap" />
          <h3>Tájriybeli Mentorlar</h3>
          <p>
            {" "}
            Jónelis hám professional kónlikpeler kompleksin tańlawda mentorlar
            sizge járdem beredi.
          </p>
        </div>
        <div className="fea-box">
          <i class="fa-solid fa-dollar-sign"></i>
          <h3>Qolay bahalar</h3>
          <p>Bizde eń jaqsı bahalar.</p>
        </div>
        <div className="fea-box">
          <i className="fas fa-award" />
          <h3>Sertifikat</h3>
          <p>Hár bir kursımız tabıslı tamamlaǵanlarǵa sertifikat beriledi.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
