import React from "react";
import { Link } from "react-router-dom";

function IndexCard() {
  return (
    <Link to="/detail">
      <div className="clickable-image mb-4">
        <img
          src="./images/home/chicken-kare.jpg"
          height="100%"
          width="100%"
          alt="popular-recipe"
        />
        <h2 className="image-title">Chiken Kare</h2>
      </div>
    </Link>
  );
}

export default IndexCard;
