import React from 'react';
import plants from '../../assets/plants.png';
import gif from '../../assets/components.gif'
import "./about.css";

const About = () => {
  return (
    <div className="finprimer__about section__padding" id="about">
      <div className="finprimer__about-container">
        <div className="finprimer__about-container_svg">
          <img src={gif} alt="welcome" />
        </div>
        <div className="finprimer__about-container_content">
          <p>
            From taking away the sweat and hassle from accounting and tracking
            Financial records to providing crisp and accurate Financial report
            to measure and optimize the performance of your business whilst
            aiding growth.
          </p>
          <p>
            Finprimer is best known for making accounting easy and fun while
            leaving you with ample time to focus on other areas of business
            growth.
          </p>
          <button type='button'>About Us</button>
          <div className='finprimer__about-container_content-img'>
            <img src={plants} alt="plants" />  
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
