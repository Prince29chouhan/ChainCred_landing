import React from 'react';
import styles from './team.module.css';
import team from '../assets/team.png'


const teamMembers = [
  {
    name: 'Parth Ajmera',
    title: 'CEO, Founder',
    description: 'CS graduate from IITM with strong passion for web3, computer systems and technology, driven by the intent to revolutionize',
    image: {team}
  },
  {
    name: 'Gaurav Jhawar',
    title: 'CMO, Co-Founder',
    description: 'Highly experienced as Product Manager with multiple giants, is all set to dive into building something for the industry',
    image: "https://i.pinimg.com/736x/51/e0/d5/51e0d5aa27808ce689e3dd5a5cd7685a.jpg"
  }
];

const TeamComponent = () => {
  return (
    <div className={`mt-10 md:mt-5 p-5 md:p-20 ${styles.teamContainer}`} id='team'>
      <h2 className={` text-2xl md:text-4xl mt-2 md:mt-16 text-center ${styles.teamTitle}`} data-aos="fade-down" data-aos-delay="50">Meet The People Behind <span className='text-center mx-16 md:mx-0'>ChainCred.</span></h2>
      <p className={styles.teamSubtitle} data-aos="fade-down" data-aos-delay="100">
        We come from different backgrounds, but there is one thing that brings us all together: we live and breathe web3.
      </p>
      <div className={`${styles.teamMembers}`}>
        {teamMembers.map((member, index) => (
          <div key={index} className={`w-[300px] md:w-[300px]  ${styles.teamMember}`} data-aos="fade-down" data-aos-delay="250">
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
