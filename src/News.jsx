import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "./context";
import { NavLink } from "react-router-dom";
import {  } from "./styles/Button";

const Teams = () => {
  const { services } = useGlobalContext();
  console.log(services);

  return (
    <Wrapper className="section">
       <header>
        <div className="top">
        <h1 style={{color:"#3F5BB5"}}>News</h1>
        </div>
    </header>
      <section className="news">
            <article>
                <img src="./images/news1.jpeg" alt="News 1"/>
                <h3>IIT-Patna scholars developing virtual doctor for early diagnosis of diseases</h3>
                <p>PATNA: In a novel and path-breaking initiative, IIT Patna is busy</p>
                <a href="https://timesofindia.indiatimes.com/city/patna/iit-patna-scholars-developing-virtual-doctor-for-early-diagnosis-of-diseases/articleshow/94141545.cms" target="blank">Read More</a>
            </article>
            <article>
                <img src="./images/news2.jpeg" alt="News 2"/>
                <h3>IIT पटना बना रहा वर्चुअल डॉक्टर, एप की मदद से होगा इलाज, जानें क्या होगा खास</h3>
                <p>आने वाले दिनों में यह मोबाइल एप इलाज के तरीकों में बड़ा बदलाव लेकर आ सकता है.</p>
                <a href="https://www.prabhatkhabar.com/state/bihar/patna/iit-patna-is-making-virtual-doctor-for-telemedicine-facility-will-be-easy-ans" target="blank">Read More</a>
            </article>
            <article>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/BfPw-NfddPI?si=FjcWN6-Q4uzdvIIr&amp;start=574" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <h3>AI for the good | Sriparna Saha | TEDxIITPatna</h3>
                <p>Sriparna Saha, one of the eight leading women scientists in the area of AI in India and an Associate Editor of IEEE, is an</p>
                <a href="https://youtu.be/BfPw-NfddPI?si=tRtsQcRgF1Gxjj50" target="blank">Read More</a>
            </article>
        </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .news {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 20px;
}
.top{
  text-align:center;
}
article {
    width: 30%;
    background-color: #f4f4f4;
    padding: 10px;
    margin: 10px;
    border: 1px solid #ccc;
}

/* Style the article images */
article img {
    width: 100%;
    height: auto;
    margin-bottom: 10px;
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

export default Teams;
