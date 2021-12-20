import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [revealBar, setRevealBar] = useState(false);
  return (
    <ul className={`header ${revealBar && "activeBar"}`}>
      <li>
        <NavLink
          onClick={() => setRevealBar(false)}
          className={`header__itemsMenu ${revealBar && "showItems"}`}
          to="/portefolio"
        >
          Portefolio
        </NavLink>
      </li>
      <li className="header__logoMenu" onClick={() => setRevealBar(!revealBar)}>
        {revealBar && (
          <NavLink
            onClick={() => setRevealBar(false)}
            className="logoCircle"
            to="/"
          >
            Home
          </NavLink>
        )}
      </li>
      <li>
        <NavLink
          onClick={() => setRevealBar(false)}
          className={`header__itemsMenu ${revealBar && "showItems"}`}
          to="/contact"
        >
          Contact
        </NavLink>
      </li>
    </ul>
  );
};

export default Header;
