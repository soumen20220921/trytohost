import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { useGlobalContext } from "../context";

const HeroSection = () => {
  const { name, image } = useGlobalContext();

  return (
    <Wrapper>
      <div className="section">
      <div className="container grid grid-two-column">
        <div className="section-hero-data">

          {/* <p className="hero-top-data">THIS IS ME</p> */}
          <h1 className="hero-heading">{name}</h1>
          <p className="hero-para">
          The diagnosis assistant works as an assistant to real doctors, which conducts a detailed symptom investigation and extracts relevant symptoms through conversing with a patient depending on chief patient complaints and ongoing dialogue context.
          </p>
          <Button className="btn hireme-btn">
            <NavLink to="/services"> More </NavLink>
          </Button>
        </div>

        {/* for image  */}
        <div className="section-hero-image">
          <picture>
            <img src=".\images\online Dr. consultant.webp" className="hero-img " />
          </picture>
        </div>
      </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 3rem 0;
background-color:lightblue;
  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
.section{
   height:inherit;
   width:inherit;
   
 }
wraper{
  
}
  .btn {
    max-width: 16rem;
  }
  section.sc-dPyBCJ.hnWBCR {
    background-color: lightblue;
}
  .hireme-btn{
    max-width: 20rem;
  }
  .hero-top-data {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.helper};
  }

  .hero-heading {
    text-transform: uppercase;
    font-size: 6.4rem;
  }

  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
  }

  .section-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  picture {
    text-align: center;
  }

  .hero-img {
    max-width: 80%;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 7.2rem;
    }
  }
`;

export default HeroSection;
