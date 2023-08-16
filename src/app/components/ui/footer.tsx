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
            <p className="text-white">123 Main St., Anytown, USA</p>
            <p className="text-white">Email: info@abchvac.com</p>
            <p className="text-white">Phone: (123) 456-7890</p>
          </div>

          <div className="section-footer__item">
            <h3 className="h2 text-3xl text-white">Follow Us</h3>
            <div className="links">
              <a href="https://www.facebook.com/abchvac">
                <FaFacebookSquare />
              </a>
              <a href="https://www.twitter.com/abchvac">
                <FaTwitter />
              </a>
              <a href="https://www.instagram.com/abchvac">
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
