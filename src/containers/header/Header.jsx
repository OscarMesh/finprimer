import React from 'react';
import './header.css';
import head from '../../assets/head.png';
import Ellipse from '../../assets/Ellipse 6.png'

const header = () => {
  return (

    <div className='finprimer__header section__padding' id='home'>
        <div className='finprimer__header-content'>
            <h1>Painless accounting and finance for your 
                business and clients.</h1>
                <div className='finprimer__header-content_image'>
                    <img src={head} alt="head" />
                 <img src={Ellipse} alt="elipse" />
                </div>

                <div className='finprimer__header-content__btn'>
                    <button type='button'>Get started</button>
                </div>
        </div> 
    </div>

  )
};

export default header;
