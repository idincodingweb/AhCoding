import React from 'react';
import { Typography, Box } from '@mui/material';
import '../assets/style/About.css';
import profileImage from '../assets/images/FB_IMG_1733158331408.jpg'; // Ganti dengan path gambar profil Anda

const About = () => {
  return (
    <Box className="about">
      <img src={profileImage} alt="Profile" className="profile-image" />
      <Typography className="name">Idin Iskandar, S.Kom</Typography>
      <Typography className="title">Software Engineer</Typography>
      <Typography variant="body1" paragraph>
        Hello! My name is Idin Iskandar, and I am a passionate Software Engineer with a Bachelor's degree in Computer Science. I specialize in front-end development and have a keen interest in creating responsive and user-friendly web applications.
      </Typography>
      <Typography variant="body1" paragraph>
        Over the years, I have honed my skills in various technologies including React.js, Material UI, and Next.js. I enjoy working on challenging projects that push the boundaries of web development and allow me to continuously learn and grow.
      </Typography>
      <Typography variant="body1" paragraph>
        In my free time, I love exploring new technologies, contributing to open-source projects, and sharing my knowledge with the developer community. I believe in the power of collaboration and am always open to new opportunities and connections.
      </Typography>
    </Box>
  );
};

export default About;
