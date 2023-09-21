import React from 'react';

const TeamMemberCard = ({ name, position, imageUrl }) => {
  return (
    <div style={styles.card}>
      <img src={imageUrl} alt={name} style={styles.image} />
      <h3 style={styles.name}>{name}</h3>
      <p style={styles.position}>{position}</p>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    width: '20%',
    margin: '0 auto',
  },
  image: {
    height:"100px",
    width: "100px",
    borderRadius: '50%',
  },
  name: {
    fontSize: '1.6rem',
    fontWeight: 'bold',
    margin: '10px 0',
  },
  position: {
    fontSize: '1rem',
    color: 'black',
    fontWeight: 'bold'
  },
};

export default TeamMemberCard;
