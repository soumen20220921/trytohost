import React from "react";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { NavLink } from "react-router-dom";
import { FaDiscord, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <Wrapper>
     

      <footer>
        <div className="container grid grid-four-column">
          <div className="footer-about">
            <h3>HealthCareAi</h3>
            <p>
              @{new Date().getFullYear()} HealthCareAi.<br/> All Rights Reserved
            </p> 
          </div>

          {/* 2nd column */}
          <div className="footer-subscribe">
            <h3>Subscribe to get important updates</h3>
            <form action="#">
              <input
                type="email"
                required
                autoComplete="off"
                placeholder="Email"
              />
              <input type="submit" value="Subscribe" />
            </form>
          </div>

          {/* 3rs column  */}
          <div className="footer-social">
            <h3>Follows Us</h3>
            <div className="footer-social--icons">
              <div>
              <a
                  href="https://twitter.com/_Clinical_AI_/"
                  target="_blank">
                  <FaTwitter className="icons" />
                </a>
              </div>
              <div>
              <a
                  href="https://www.instagram.com/"
                  target="_blank">
                  <FaInstagram className="icons" />
                </a>
              </div>
              <div>
                <a
                  href="https://www.linkedin.com/company/clinical-ai-assistance"
                  target="_blank">
                  <FaLinkedin className="icons" />
                </a>
              </div>
            </div>
          </div>

          {/* 4th column  */}
          <div className="footer-contact">
            <h3>Contact Us</h3>
            <p>Foundation For Innovators In Science And Technology(FIIST), <br/>
Office- 7, 5th Floor, Block 9<br/>
Indian Institute of Technology, Patna<br/>
Bihta, Bihar 801106 India</p>
          </div>
          <div className="footer-contact">
            <h3>Sponsored By</h3>
            <div>
              <div className="microsoft">
                 <img src=".\images\Microsoft.jpeg" alt="" />
              </div>
              <div className="fist">
              <img src=".\images\fist2.png" alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* bottom section  */}
        
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);
  }
  .contact-short-btn {
    justify-self: end;
    align-self: center;
  }
.footer-about{
  width:300px;
}
.microsoft,.fist{
  height:90px;
  width:180px;
  background-color:red;
  border-radius:1rem;
}
.fist{
  background-color:blue;
  margin-top:5px;
  }
  .microsoft img{
      height:inherit;
      width:100%;
      border-radius:1rem;
    }
    .fist img{
      height:inherit;
      width:100%;
      border-radius:1rem;
    }
  footer {
    padding: 6rem 0 3rem 0;
    background-color:#3f5bb5;

    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
      width: 300px;
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;
      .footer-contact{
        width:200px;
      }
      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};

        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }

    .footer-bottom--section {
      // padding-top: 9rem;
      hr {
        margin-bottom: 2rem;
        color: ${({ theme }) => theme.colors.hr};
        height: 0.1px;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 95vw;
      padding: 2rem 0rem;
      display: flex;
      justify-content: center;
      align-items: center;

      .contact-short-btn {
        text-align: center;
        justify-self: flex-start;
      }
    }

    footer .footer-bottom--section {
      padding-top: 3.2rem;
    }
  }
`;

export default Footer;
