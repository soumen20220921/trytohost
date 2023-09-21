import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "./context";
import TeamMemberCard from "./teamMember";

const Teams = () => {
  const { services } = useGlobalContext();
  console.log(services);

  return (
    <Wrapper className="section">
      <h2 className="common-heading">Our Team</h2>
      <TeamMemberContainer>
        <TeamMemberCard
          name="Abhisek Tiwari"
          position="Director"
          imageUrl=".\public\images\Abhisek Tiwari.jpeg"
        />
        <TeamMemberCard
          name="Sarbajeet Tiwari"
          position="Director"
          imageUrl=".\images\Sarbajeet Tiwari.jpeg"
        />
        {/* <TeamMemberCard
          name="Jane Smith"
          position="Designer"
          imageUrl="./images/team-photo.jpeg"
        />
        <TeamMemberCard
          name="Jane Smith"
          position="Designer"
          imageUrl="./images/team-photo.jpeg"
        /> */}
        {/* <TeamMemberCard
          name="Jane Smith"
          position="Designer"
          imageUrl="./images/team-photo.jpeg"
        />
        <TeamMemberCard
          name="Jane Smith"
          position="Designer"
          imageUrl="./images/team-photo.jpeg"
        />
        <TeamMemberCard
          name="Jane Smith"
          position="Designer"
          imageUrl="./images/team-photo.jpeg"
        /> */}
        
        {/* Add more TeamMemberCard components for other team members */}
      </TeamMemberContainer>
      <div style={{
        height:"50px"
      }}>
      </div>
      <TeamMemberContainer>
        <TeamMemberCard
          name="Sriparna Saha"
          position="Mentor"
          imageUrl=".\public\images\sriparna saha.jpg"
        />
        <TeamMemberCard
          name="Pushpak Bhattacharyya"
          position="Mentor"
          imageUrl=".\public\images\Pushpak Bhattacharyya.jpeg"
        />
         <TeamMemberCard
          name="Minakshi Dhar"
          position="Mentor"
          imageUrl=".\public\images\Minakshi Dhar.jpeg"
        />
        
      </TeamMemberContainer>
      <div style={{
        height:"50px"
      }}>
      </div>
      <TeamMemberContainer>
      <TeamMemberCard
          name="Abhisek Tiwari"
          position="Research"
          imageUrl=".\public\images\Abhisek Tiwari.jpeg"
        />
        <TeamMemberCard
          name="Sarbajeet Tiwari"
          position="Research"
          imageUrl=".\images\Sarbajeet Tiwari.jpeg"
        />
       
        
      </TeamMemberContainer>
      <div style={{
        height:"50px"
      }}>
      </div>
      <TeamMemberContainer>
      <TeamMemberCard
          name="Abhisek Tiwari"
          position="Technical"
          imageUrl=".\public\images\Abhisek Tiwari.jpeg"
        />
        <TeamMemberCard
          name="Aryan Sahoo,"
          position="Technical"
          imageUrl=".\public\images\Aryan Sahoo.jpeg"
        />
        <TeamMemberCard
          name="Soumen Singh"
          position="Technical"
          imageUrl=".\public\images\Soumen Singh.jpeg"
        />
        
      </TeamMemberContainer>
      <div style={{
        height:"50px"
      }}>
      </div>
      <TeamMemberContainer>
      <TeamMemberCard
          name="Varad Paswar"
          position="Technical"
          imageUrl="\images\varad Paswar.jpeg"
        />
        <TeamMemberCard
          name="Karan Ravi Das"
          position="Technical"
          imageUrl="./images/karan.jpeg"
        />
      </TeamMemberContainer>
      <div style={{
        height:"50px"
      }}>
      </div>
      <TeamMemberContainer>
      <TeamMemberCard
          name="Minakshi Dhar"
          position="Mentor"
          imageUrl=".\public\images\Minakshi Dhar.jpeg"
        />
        <TeamMemberCard
          name="Dr Pankaj"
          position="Medical"
          imageUrl=".\public\images\Dr Pankaj.jpeg"
        />
        <TeamMemberCard
          name="Dr. Swarnim"
          position="Medical"
          imageUrl=".\images\Sawarnin.jpeg"
        />
        <TeamMemberCard
          name="Dr. Mrinmoy"
          position="Medical"
          imageUrl=".\images\mrinmoy.jpeg"
        />
        
      </TeamMemberContainer>
      
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};
`;

const TeamMemberContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px; /* Adjust the spacing as needed */
  flex-wrap: wrap;
`;

export default Teams;
