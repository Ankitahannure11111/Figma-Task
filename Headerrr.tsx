import React from 'react';
import './Header.css';
import h1 from '../../src/h1.png';
import CustomNavLink from './CustomNavLink';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={h1} alt="Logo" className="logo" />
        <span className="global-text">
          <span className="g-letter">G</span>
          <span className="remaining-letters">lobal</span>
        </span>
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <CustomNavLink to="/" className="nav-link" activeClassName="active-link">
              Home
            </CustomNavLink>
          </li>
          <li className="nav-item">
            <CustomNavLink to="/categories" className="nav-link" activeClassName="active-link">
              Categories
            </CustomNavLink>
          </li>
          <li className="nav-item">
            <CustomNavLink to="/about" className="nav-link" activeClassName="active-link">
              About Us
            </CustomNavLink>
          </li>
          <li className="nav-item">
            <CustomNavLink to="/products" className="nav-link" activeClassName="active-link">
              Products
            </CustomNavLink>
          </li>
          <li className="nav-item">
            <CustomNavLink to="/pet-care" className="nav-link" activeClassName="active-link">
              Pet Care
            </CustomNavLink>
          </li>
          <li className="nav-item">
            <CustomNavLink to="/contact" className="nav-link" activeClassName="active-link">
              Contact
            </CustomNavLink>
          </li>
        </ul>
      </nav>
      <div className="auth-buttons">
        <CustomNavLink to="/sign-in" className="sign-in-button" activeClassName="active-link">
          Sign In
        </CustomNavLink>
        <CustomNavLink to="/register" className="register-button" activeClassName="active-link">
          Register
        </CustomNavLink>
      </div>
    </header>
  );
};

export default Header;
