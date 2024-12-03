import React from 'react';
import { Typography, Box, List, ListItem, ListItemText } from '@mui/material';
import '../assets/style/Experience.css';

const Experience = () => {
  const experiences = [
    {
      role: 'Front-End Developer',
      company: 'Tech Innovators Inc.',
      duration: 'Jan 2022 - Present',
      responsibilities: [
        'Developed and maintained the front-end of the company’s main product using React.js and Material UI.',
        'Collaborated with the design team to create a responsive and user-friendly interface.',
        'Implemented state management using Redux and optimized the application for performance.',
        'Conducted code reviews and mentored junior developers.'
      ]
    },
    {
      role: 'Web Developer Intern',
      company: 'Creative Solutions',
      duration: 'Jun 2021 - Dec 2021',
      responsibilities: [
        'Assisted in the development of client websites using HTML, CSS, and JavaScript.',
        'Worked closely with the back-end team to integrate APIs and ensure seamless data flow.',
        'Participated in daily stand-up meetings and contributed to sprint planning sessions.',
        'Performed testing and debugging to ensure cross-browser compatibility.'
      ]
    }
  ];

  return (
    <section className="experience">
      <Typography variant="h2" gutterBottom>Experience</Typography>
      {experiences.map((exp, index) => (
        <Box key={index} mb={4}>
          <Typography variant="h5" component="div">{exp.role}</Typography>
          <Typography variant="subtitle1" color="textSecondary">{exp.company} | {exp.duration}</Typography>
          <List>
            {exp.responsibilities.map((item, idx) => (
              <ListItem key={idx}>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
        </Box>
      ))}
    </section>
  );
};

export default Experience;
