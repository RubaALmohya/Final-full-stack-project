import React from "react";
import styled from "styled-components";
import { AiFillHome, AiOutlineMail, AiOutlinePhone, AiOutlineFacebook, AiFillTwitterSquare, AiOutlineInstagram} from 'react-icons/ai';
import {FaSnapchatSquare} from 'react-icons/fa';

function Footer() {
  return (
    <FooterContainer className="main-footer">
      <div className="footer-middle">
        <div className="container">
          <div className="row">
            {/* Col 1 */}
            <div className="col-md-3 col-sm-6">
              <h4>Contact Us</h4>
              <ul className="list-unstyled">
                <li> <AiFillHome /> Riyadh, SA</li>
                <li> <AiOutlineMail /> info@moodchanger.com</li>
                <li> <AiOutlinePhone/>+966 50 123 4567</li>
              </ul>
            </div>
            {/* Col 2 */}
            <div className="col-md-3 col-sm-6">
              <h4>Site information</h4>
              <ul className="list-unstyled">
                <li> <a href="/cookies">COOKIE NOTICES </a> </li>
                <li> <a href="/privacy"> PRIVACY STATEMENT </a> </li>
                <li> <a href="/terms"> TERMS AND CONDITIONS</a> </li>
                <li> <a href="/sitemap"> SITEMAP </a> </li>
              </ul>
            </div>
            {/* Col 4 */}
            <div className="col-md-3 col-sm-6">
              <h4>Social media</h4>
              <ul className="list-unstyled">
              <li> <a href="/facebook"> <AiOutlineFacebook/>  </a> </li>
                <li> <a href="/twitter"> <AiFillTwitterSquare/></a> </li>
                <li> <a href="/instagram"> <AiOutlineInstagram/> </a> </li>
                <li> <a href="/snapchat"> <FaSnapchatSquare/> </a> </li>
              </ul>
            </div>
          </div>
          {/* Copy Rights */}
          <div className="footer-bottom">
            <p className="text-xs-center">
              &copy;{new Date().getFullYear()} Mood Website - All Rights
              Reserved.
            </p>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
}
export default Footer;

const FooterContainer = styled.footer`
.footer-middle {
    font-family: 'M PLUS Rounded 1c', sans-serif;
  font-size: 15px;
    background: #264871;
    padding-top: 3rem;
    color: white;
}
.footer-bottom{
    padding-top: 3rem;
    padding-bottom: 2rem;
}
ul li a{
    text-decoration: none;
    color: white;
}
ul li a:hover{
    color: #0b0b25;
}
`;