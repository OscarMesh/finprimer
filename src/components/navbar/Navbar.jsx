import React, {useState} from "react";
import './navbar.css';
import logo from '../../assets/logo.svg';
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Menu = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#about">About</a>
    </p>
    <p>
      <a href="#services">Services</a>
    </p>
    <p>
      <a href="#contact">Contact</a>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="finprimer__navbar">
      <div className="finprimer__navbar-links">
        <div className="finprimer__navbar-links-logo">
          <img src={logo} alt="logo" />
          <h1>Finprimer</h1>
        </div>
        <div className="finprimer__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="finprimer__navbar-sign">
        <p>Login</p>
        <button>Sign up</button>
      </div>
      <div className="finprimer__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
           
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="finprimer__navbar-menu_container scale-up-center">
            <div className="finprimer__navbar-menu_container-links">
              <Menu />
              <div className="finprimer__navbar-menu_container-links-sign">
                <p>Login</p>
                <button>Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Navbar;
