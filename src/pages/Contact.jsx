import React from "react";

const Contact = () => {
  return (
    <>
      {/*Home*/}
      <section
        id="about-home"
        style={{
          backgroundImage: `linear-gradient(rgba(9, 5, 54, 0.3), rgba(5, 4, 46, 0.7)),
    url("./images/back3.webp")`,
        }}
      >
        <h2>Contact / </h2>
      </section>
      <section id="contact1">
        <div className="getin">
          <h2>Get in touch</h2>
          <p>Looking for help? Fill the form and start a new adventure.</p>
          <div className="getin-details">
            <h3>Headquaters</h3>
            <div>
              <i className="fas fa-home get" />
              <p>744, New York Ave, Brooklyn, kings, New York 10224</p>
            </div>
            <h3>Phone</h3>
            <div>
              <i className="fas fa-phone-alt get" />
              <p>
                (+91) 7896543219 <br />
                (+91) 7896543219
              </p>
            </div>
            <h3>Support</h3>
            <div>
              <i className="fas fa-envelope-open-text get" />
              <p>
                kirti@gmail.com <br /> sm@gmail.com
              </p>
            </div>
            <h3>Follow Us</h3>
            <div className="pro-links">
              <a
                href="https://www.facebook.com/rishabh.chaubey.754"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-facebook" />
              </a>
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
        </div>
        <div className="form">
          <h4>Let's Connect</h4>
          <p>Feel free to Contact us!</p>
          <div className="form-row">
            <input type="text" placeholder="Atıńız" />
            <input type="text" placeholder="Familiya" />
          </div>
          <div className="form-col">
            <input type="text" placeholder="Telefon nomer" />
          </div>
          <div className="form-col">
            <select defaultValue={"select"} className="select">
              <option value="select" disabled>
                Kurs saylań
              </option>
              <option value="uiux">UI/UX Designer</option>
              <option value="frontend">Front-End</option>
              <option value="backend">Back-End</option>
              <option value="compyuterfoundition">Compyuter Foundition</option>
              <option value="scratch">Scratch</option>
              <option value="kotlin">Kotlin</option>
              <option value="android">Android</option>
            </select>
          </div>
  
          <div className="form-col">
            <button>Send Message</button>
          </div>
        </div>
      </section>
      {/* Map*/}
      <section id="map">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d1750.333909969499!2d59.6194039992372!3d42.45541961752918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x41dd9a124ab32907%3A0x10098dddecf043fb!2z0J3Rg9C60YPRgSwg0KPQt9Cx0LXQutC40YHRgtCw0L0!3m2!1d42.454924!2d59.618600799999996!5e0!3m2!1sru!2sru!4v1662112207906!5m2!1sru!2sru"
          width="600"
          height="450"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
      {/*Footer*/}
    </>
  );
};

export default Contact;
