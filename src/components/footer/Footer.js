import React from "react";
import "./Footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="para">
          <p>© 2022 GorkCoder - All Rights Reserved.</p>
        </div>
        <div className="icon">
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
          <FaYoutube />
        </div>
      </footer>
    </>
  );
};

export default Footer;
