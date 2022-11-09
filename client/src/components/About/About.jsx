import React from 'react'

const About = () => {
  return (
    <div className='landing-conteiner'>
      <h1> About </h1>

      <section className='div-conteiner'>
      <h2>The project</h2>
      <p className='landing-bg'>This project is proposed by 'SoyHenry' Bootcamp code to give the alumni the opportunity to test their abilities a knowledge acquired during the last 3 months.<br/>
      In this case, this project is about getting data from the external APIs with a lot of info from all the countries in the world, in some cases the info is incomplete and the student has to manage that problem without hardcode the info for every case.
      </p>
      </section>

      <section  className='div-conteiner'>
      <h2>The tecnhologies</h2>
      <p className='landing-bg'>For the Front-End approach is used React technologies because ist the most wielded popular library in the coding world. <br/>
      Also, it's looking to demonstrate a clean and efficient distribution of component along the project.</p>
      <h3>Front-End</h3>
      <ul className='landing-bg'>
        <li>React </li>
        <li>React-Redux </li>
        <li>React-Router </li>
      </ul>
      <h3>Back-End</h3>
      <ul className='landing-bg'>
        <li>Node.js </li>
        <li>Node package 'Express' </li>
        <li>Node package 'Sequelize' </li>
        <li>Postgrest database</li>
      </ul>
      </section>
  </div>
  )
}

export default About