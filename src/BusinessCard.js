import React from "react";
import "./BusinessCard.css";
import picture from "./Images/picture.png";
import Email from "./Images/EmailButton.png";
import Facebook from "./Images/Facebook.png";
import GitHub from "./Images/GitHub.png";
import Instagram from "./Images/Instagram.png";
import Linkedln from "./Images/Linkedin.png";
import Twitter from "./Images/Twitter.png";
import LinkedlnButton from "./Images/LInkedlnButton.png";

export const BusinessCard = () => {
  return (
    <div className="container">
      <div className="picture">
        <img src={picture} alt="pic" />
      </div>

      <div className="main">
        <div className="main-top">
          <h1 className="name">Jackton Mtembete</h1>
          <h3 className="title">MERNstack Developer</h3>
          <p className="website">Jackmtembete.com</p>
          <p className="buttons">
            <span>
              <img src={Email} alt="Email" />
            </span>
            <span>
              <img src={LinkedlnButton} alt="Linkedln" />
            </span>
          </p>
        </div>
      </div>

      <div className="main-bottom">
        <div className="main-bottom-top">
          <h2 className="main-bottom-title">About</h2>
          <p className="body">
            I am a frontend developer with a particular interest in making
            things simple and automating daily tasks. I try to keep up with
            security and best practices, and am always looking for new things to
            learn.
          </p>
        </div>

        <div className="main-bottom-bottom">
          <h2 className="main-bottom-title">Interests</h2>
          <p className="body">
            Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
            Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
          </p>
        </div>
      </div>

      <div className="footer">
        <p className="footer-icons">
          <span>
            <img src={Facebook} alt="facebook" />
          </span>
          <span>
            <img src={GitHub} alt="" />
          </span>
          <span>
            <img src={Instagram} alt="instagram" />
          </span>
          <span>
            <img src={Linkedln} alt="linkedln" />
          </span>

          <span>
            <img src={Twitter} alt="twitter" />
          </span>
        </p>
      </div>
    </div>
  );
};
