import React, { useLayoutEffect, useRef } from 'react';
import { Box, Typography } from '@mui/material';
import { SocialIcon } from 'react-social-icons';
import '../assets/style/Hero.css';

const Hero = () => {
  const textRef = useRef(null);

  useLayoutEffect(() => {
    const text = "Ah Coding";
    let charIndex = 0;
    let currentText = '';

    const type = () => {
      if (textRef.current) {
        currentText = text.substring(0, charIndex++);
        textRef.current.innerText = currentText;

        if (charIndex <= text.length) {
          setTimeout(type, 100);
        } else {
          charIndex = 0;
          setTimeout(type, 2000);
        }
      }
    };

    type();
  }, []);

  return (
    <Box className="hero">
      <Box className="social-icons">
        <SocialIcon url="https://facebook.com" />
        <SocialIcon url="https://instagram.com" />
        <SocialIcon url="https://twitter.com" />
        <SocialIcon url="https://pinterest.com" />
      </Box>
      <Typography variant="h1">
        Hi Im, <span ref={textRef} className="typing"></span>
      </Typography>
    </Box>
  );
};

export default Hero;
