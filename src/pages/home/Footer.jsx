import React from "react";
import { Link } from "react-router-dom";
import { BsYoutube, BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";
import { FaFacebookF, FaPinterestP } from "react-icons/fa";

export const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="ftr-contact flex">
            <ul className="ftr-contact-ul">
              <h4><Link to="#">Contact</Link></h4>
              <li>
                <Link to="#">Contact Us</Link>
              </li>
              <li>
                <Link to="#">hello@sama.com</Link>
              </li>
              <li>
                <Link to="#">Book an appointment</Link>
              </li>
              <li>
                <Link to="#">Affiliate</Link>
              </li>
            </ul>
            <ul className="ftr-contact-ul">
            <h4><Link to="#">SUPPORT</Link></h4>              
              <li>
                <Link to="#">Shipping & Delivery</Link>
              </li>
              <li>
                <Link to="#">Returns & Exchange</Link>
              </li>
              <li>
                <Link to="#">Warranty</Link>
              </li>
              <li>
                <Link to="#">Payment Plans</Link>
              </li>
              <li>
                <Link to="#">FAQ's</Link>
              </li>
            </ul>
            <ul className="ftr-contact-ul">
            <h4><Link to="#">Education</Link></h4>
              <li>
                <Link to="#">Diamond Buying Guide</Link>
              </li>
              <li>
                <Link to="#">Lab-grown Diamonds</Link>
              </li>
              <li>
                <Link to="#">Jewelry Care</Link>
              </li>
              <li>
                <Link to="#">Ring Sizer</Link>
              </li>
            </ul>
            <ul className="ftr-contact-ul">
            <h4><Link to="#">ABOUT</Link></h4>

              <li>
                <Link to="#">Our Story</Link>
              </li>
              <li>
                <Link to="#">Blog</Link>
              </li>
              <li>
                <Link to="#">Terms of Use</Link>
              </li>
              <li>
                <Link to="#">Privacy Policy</Link>
              </li>
            </ul>
            <ul className="ftr-contact-form">
            <h4>Stay connected</h4>

              <p>
                Join our mailing list for the latest products, news, and offers!
              </p>

              <form action="#">
                <div className="email">
                  <input type="email" placeholder="Enter Email Address.." />
                </div>
                <div className="submit-btn">
                  <input className="button" type="submit" />
                </div>
              </form>

              <div className="ftr-icons flex">
                <span>
                  <Link to="#"><BsYoutube /></Link>
                </span>
                <span>
                  <Link to="#"><BsInstagram /></Link>                  
                </span>
                <span>
                  <Link to="#"><FaFacebookF /></Link>
                </span>
                <span>
                 <Link to="#"> <BsTwitter /></Link>
                </span>
                <span>
                  <Link to="#"><BsLinkedin /></Link>
                </span>
                <span>
                  <Link to="#"><FaPinterestP /></Link>
                </span>
                <span>
                  <Link to="#"><BsTwitter /></Link>
                </span>
              </div>
            </ul>
          </div>
        </div>
      </footer>
      <div className="copy-right">
        <p>©2023 Sama.All Rights Reserved.</p>
      </div>
    </>
  );
};
