import React from 'react';
import "./about.css"

const About = () => {
  return (
    <p className="container__">
      <h1>About This App</h1>
      <p>App to search Github users</p>
      <p>By<a href="https://github.com/RashadGuluzadeh" target='_blank'> RashadGuluzadeh</a></p>
      <p>Version 1.0.0</p>
    </p>
  );
};

export default About;
