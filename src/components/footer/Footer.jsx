import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import Whatsapp from "@iconscout/react-unicons/icons/uil-whatsapp";
import Youtube from "@iconscout/react-unicons/icons/uil-youtube";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import Top from "@iconscout/react-unicons/icons/uil-top-arrow-to-top";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>hassanahmed5022@gmail.com</span>
        <div className="f-icons">
          <a href="https://instagram.com/i_am_hassan8" target="_blank">
            <Insta color="white" size={"3rem"} />
          </a>
          <a href="https://facebook.com/ahmedhassansaqlaini" target="_blank">
            <Facebook color="white" size={"3rem"} />
          </a>
          <a href="https://github.com/hassan5022" target="_blank">
            <Gitub color="white" size={"3rem"} />
          </a>
          <a href="https://wa.me/+923122367038" target="_blank">
            <Whatsapp color="white" size={"3rem"} />
          </a>
          <a href="https://youtube.com/@hassanwebvlog" target="_blank">
            <Youtube color="white" size={"3rem"} />
          </a>
          <a href="https://linkedin.com/in/hassanahmed0805" target="_blank">
            <Linkedin color="white" size={"3rem"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
