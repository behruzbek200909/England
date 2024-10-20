import React from 'react'
import flag  from "../../assets/img/flag.jpg"
import "./header.css"

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          <div className="header-inner-link">
            <img src={flag} alt="" className="flag" width={30} height={30} />
            <h2 className="flag-star">England</h2>
          </div>
          <ul className="alpen">
            <li className="alpen-gold">
              <a href="#" className="alpen-gold-cream">
                Home
              </a>
            </li>
            <li className="alpen-gold">
              <a href="#" className="alpen-gold-cream">
                About Us
              </a>
            </li>
            <li className="alpen-gold">
              <a href="#" className="alpen-gold-cream">
                Pricing
              </a>
            </li>
            <li className="alpen-gold">
              <a href="#" className="alpen-gold-cream">
                Contacts
              </a>
            </li>
          </ul>
          <div className="cover">
            <a href="#" className="pages">
              Log In
            </a>
            <a href="#" className="sport">
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
