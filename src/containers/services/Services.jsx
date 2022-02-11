import React from 'react';
import Card1 from '../../components/cards/Card1';
import "./services.css";


const Services = () => {
  return (
    <div className="finprimer__services section__padding">
      <div className="finprimer__services-heading">
        <h1>What we have to offer</h1>
      </div>
        <div className='finprimer__services-container'>
            <div className='finprimer__services-container_groupA'>
                <Card1 />
            </div>
        </div>
    </div>
  );
};

export default Services;
