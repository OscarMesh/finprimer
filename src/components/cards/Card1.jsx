import React from 'react';
import design from '../../assets/Group 3082.svg';
import rightarrow from '../../assets/right-arrow 1.svg'
import  receipts  from "../../assets/receipts.svg";
import "./card1.css";

const Card1 = () => {
  return (
    <div className="finprimer__card1 section__padding">
      <div className="finprimer__card1-container">
        <div classname="finprimer__card1-container_logo">
          <img src={receipts} alt="" />
        </div>
        <div className="finprimer__card1-container_details">
          <h2>Receipts</h2>
          <p>
            Easily create, send and save customizable receipts for your
            clients/customers.
          </p>
        </div>
        <div className="finprimer__card1-container_design">
          <img src={design} alt="" />
        </div>
        <div className="finprimer__card1-container_learnmore">
          <a href="/">
            <p>learn more</p>
            <img src={rightarrow} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card1;
