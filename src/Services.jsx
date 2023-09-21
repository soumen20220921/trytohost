import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "./context";
import { NavLink } from "react-router-dom";
import { Button } from "./styles/Button";

const Services = () => {
  const { services } = useGlobalContext();
  console.log(services);

  return (
    <Wrapper className="section">
       <header>
        <h1 style={{color:"#3F5BB5"}}>Our Services</h1>
    </header>

    <main>
    <div class="service-box">
            <h2><b>Online Doctor Consultant</b></h2>
            <img className="Dr" src=".\images\Online-Doctor-Consultation 2.jpg" alt="" />
            <div className="button">
            <Button className="btn hireme-btn">
            <NavLink to="/"> DETAILS </NavLink>
          </Button>
          <Button className="btn hireme-btn">
            <NavLink to="/"> Access </NavLink>
          </Button>
            </div>
        </div>
        <div class="service-box">
            <h2><b>Dataset</b></h2>
            <img src=".\images\dataset.png" alt="" />
            <div className="button">
            <Button className="btn hireme-btn">
            <NavLink to="/"> USE </NavLink>
          </Button>
          <Button className="btn hireme-btn">
            <NavLink to="/"> Access </NavLink>
          </Button>
            </div>
        </div>

        <div class="service-box">
          <h2><b>Framework</b></h2>
            <img src="./images/framework.png" alt="" />
            <div className="button">
            <Button className="btn hireme-btn">
            <NavLink to="/contact"> USE </NavLink>
          </Button>
          <Button className="btn hireme-btn">
            <NavLink to="/contact"> Access </NavLink>
          </Button>
            </div>
        </div>
        <div class="service-box">
          <h2><b>Clinical Task</b></h2>
            <img src=".\images\clinik2.jpg" alt="" />
            <div className="button">
            <Button className="btn hireme-btn">
            <NavLink to="/contact"> USE </NavLink>
          </Button>
          <Button className="btn hireme-btn">
            <NavLink to="/contact"> REGISTER </NavLink>
          </Button>
            </div>
        </div>
        <div class="service-box">
          <h2><b>Mentorship</b></h2>
            <img src=".\images\mentorship.jpg" alt="" />
            <div className="button">
            <Button className="btn hireme-btn">
            <NavLink to="/contact"> USE </NavLink>
          </Button>
          <Button className="btn hireme-btn">
            <NavLink to="/contact"> REGISTER </NavLink>
          </Button>

            </div>
        </div>

        {/* <div class="service-box">
          <H2></H2>
            <img src=".\images\clinik.avif" alt="" />
            <Button className="btn hireme-btn">
            <NavLink to="/contact"> Clinikal NLP Task </NavLink>
          </Button>
        </div>

        <div class="service-box">
            <img src=".\images\mentorship.jpg" alt="" />
            <Button className="btn hireme-btn">
            <NavLink to="/contact"> Mentorship </NavLink>
          </Button>
        </div> */}
    </main>
      
    </Wrapper>
  );
};

const Wrapper = styled.section`
  
  background-color: ${({ theme }) => theme.colors.bg};
  padding:9rem 0;
  body, h1, h2, p {
    margin: 0;
    padding: 0; 
}
.Dr{
  height:69%;
}
h2{
  font-size:2.9rem;
}
body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
}
h2{
  background-color: AliceBlue;
}

header {
    color: #fff;
    text-align: center;
    padding: 0 0 10rem 0;
}
.button{
  
  display:flex;
  flex-direction: row;
  justify-content:space-around;

}
button{
  width: 135px;
}

main {
    display: flex;
    justify-content: space-between;
    padding: 2rem;
}

.service-box {
    width: 300px;
    height: 300px;
    background-color: #fff;
    // padding: 1rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
    text-align: center;
    border-radius:5rem;
}
  img{
    height:80%;
    width:inherit;
    margin:4px 0;
    border-radius:5rem;
  }

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    .grid-three-column {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-two-column,
    .grid-three-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Services;
