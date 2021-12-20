import React from "react";
import { Link } from "react-router-dom";

const HeroHeader = () => {
  return (
    <div className="heroHeader">
      <div className="heroHeader__categoryGrid">
        <div className="heroHeader__categoryGrid__category up">
          <h1>
            J<span>i</span>mmy Ganc<span>i</span>
          </h1>
          <h2>Developpeur Web Junior</h2>
        </div>
        <div className="heroHeader__categoryGrid__category leftDown">
          <Link to="/portefolio">
            <button></button>
          </Link>
        </div>
        <div className="heroHeader__categoryGrid__category rightDown">
          <Link to="/contact">
            <button></button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroHeader;
