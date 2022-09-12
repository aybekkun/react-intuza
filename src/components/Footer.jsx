import React from "react";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <footer>
      <div className="copyright">
        <p>Intuza IT Academy | Zamanaģoy kàsipler mektebi</p>
        <div className="pro-links">
          {/*     <a
            href="https://www.facebook.com/rishabh.chaubey.754"
            target="_blank"
          >
            <i className="fab fa-facebook" />
          </a> */}
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
