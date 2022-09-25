import React from "react";

const Profile = () => {
  return (
    <div className="profile">
      <img src="./images/pro1.webp" alt="" />
      <h5>Ema Irnik</h5>
      <p>Python &amp; Algorithm Expert</p>
      <div className="pro-links">
        <a
          href="https://www.instagram.com/sarveshmishra3423"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-instagram" />
        </a>
        <a
          href="https://www.linkedin.com/in/kirti-mishra-955075245"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-telegram"></i>
        </a>
      </div>
    </div>
  );
};

export default Profile;
