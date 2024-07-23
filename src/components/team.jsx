import React from 'react';
import styles from './team.module.css';
import team from '../assets/team.png'


const teamMembers = [
  {
    name: 'Anthony Ryan',
    title: 'Catalyst Founder',
    description: 'Anthony is the founder of Catalyst. The fund was launched to invest, incubate, and accelerate the next generation of projects.',
    image: {team}
  },
  {
    name: 'Levi Rybalov',
    title: 'Mechanism Designer',
    description: 'Levi is Head of Research at Catalyst. His primary focus is on mechanism design and multi-agent crypto economic protocols.',
    image: "https://i.pinimg.com/736x/51/e0/d5/51e0d5aa27808ce689e3dd5a5cd7685a.jpg"
  },
  {
    name: 'Archie Whitford',
    title: 'Investment Analyst',
    description: 'Archie is the fund\'s analyst fresh out of a Bachelor of Commerce from the University of Melbourne.',
    image: {team}
  }
];

const TeamComponent = () => {
  return (
    <div className={styles.teamContainer} id='team'>
      <h2 className={styles.teamTitle} data-aos="fade-down" data-aos-delay="50">Meet The People Behind ChainCred.</h2>
      <p className={styles.teamSubtitle} data-aos="fade-down" data-aos-delay="100">
        We come from different backgrounds, but there is one thing that brings us all together: we live and breathe web3.
      </p>
      <div className={styles.teamMembers}>
        {teamMembers.map((member, index) => (
          <div key={index} className={styles.teamMember} data-aos="fade-down" data-aos-delay="250">
            <img src={team} alt={member.name} className={styles.teamMemberImage} />
            <div className={styles.teamMemberTitle}>{member.title}</div>
            <div className={styles.teamMemberName}>{member.name}</div>
            <p className={styles.teamMemberDescription}>{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamComponent;
