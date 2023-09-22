import React from 'react';

function Projects() {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="project">
        <h3>Project 1</h3>
        <p>Description of project 1.</p>
        <a href="#">Link to project 1</a>
      </div>
      <div className="project">
        <h3>Project 2</h3>
        <p>Description of project 2.</p>
        <a href="#">Link to project 2</a>
      </div>
      {/* Add more projects here */}
    </section>
  );
}

export default Projects;
