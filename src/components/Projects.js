import React from 'react';
import '../assets/style/Projects.css';

const projects = [
  {
    title: 'Netflix Clone',
    description: 'A clone of Netflix built with React.js and Firebase.',
    image: 'https://raw.githubusercontent.com/idincodingweb/packgambar/refs/heads/main/Porfolio/2netflix.jpg',
    demoLink: 'https://netflix-ah.vercel.app',
    codeLink: '#'
  },
  {
    title: 'Anime Story Web',
    description: 'Anime story web build without Material UI.',
    image: 'https://raw.githubusercontent.com/idincodingweb/packgambar/refs/heads/main/Porfolio/4asw.jpg',
    demoLink: 'asw-psi.vercel.app',
    codeLink: '#'
  },
  {
    title: 'Shope In',
    description: 'Shope In app build react with firebase.',
    image: 'https://raw.githubusercontent.com/idincodingweb/packgambar/refs/heads/main/Porfolio/3shop.jpg',
    demoLink: 'https://shope-in.vercel.app/',
    codeLink: '#'
  },
  {
    title: 'Movies App',
    description: 'Movies App without tmdb API.',
    image: 'https://raw.githubusercontent.com/idincodingweb/packgambar/refs/heads/main/Porfolio/1reactfilm.jpg',
    demoLink: 'https://react-filmcuy.vercel.app/',
    codeLink: '#'
  },
  // Tambahkan proyek lainnya di sini
];

const Projects = () => {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />
            <div className="project-card-content">
              <h3 className="project-card-title">{project.title}</h3>
              <p className="project-card-description">{project.description}</p>
              <div className="project-card-buttons">
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer">Demo</a>
                <a href={project.codeLink} target="_blank" rel="noopener noreferrer">Code</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
