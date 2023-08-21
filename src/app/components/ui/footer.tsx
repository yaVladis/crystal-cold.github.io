import React from "react";
import { FaFacebookSquare, FaTwitter, FaInstagram } from "react-icons/fa";
import CompareTwoImage from "./compare-two-image";

const Footer = () => {
  return (
    <footer className="section-footer">
      <div className="section-footer__wrapper">
        <div className="section-footer__items">
          <div className="section-footer__item">
            <h3 className="h2 text-3xl text-white">HVAC Company</h3>
            <p className="text-white">
              Keeping you comfortable all year round with reliable HVAC
              solutions.
            </p>
          </div>

          <div className="section-footer__item">
            <h3 className="h2 text-3xl text-white">Contact Us</h3>
            <p className="text-white">Home, 6842 Ranchito Ave, Van Nuys, CA 91405, USA</p>
            <p className="text-white">Email: info@abchvac.com</p>
            <p className="text-white">Phone: +1-818-929-0448</p>
          </div>

          <div className="section-footer__item">
            <h3 className="h2 text-3xl text-white">Follow Us</h3>
            <div className="links">
              <a href="https://www.facebook.com/crystalcoldhvac">
                <FaFacebookSquare />
              </a>
              <a href="https://www.twitter.com/crystalcoldhvac">
                <FaTwitter />
              </a>
              <a href="https://www.instagram.com/crystalcoldhvac">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
        <div className="section-footer__switcher">
          <CompareTwoImage/>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
