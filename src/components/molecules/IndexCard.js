import React from "react";
import { Link } from "react-router-dom";

function IndexCard(props) {
  const { image, name, url } = props;
  return (
    <Link to={`/detail/${url}`}>
      <div className="clickable-image mb-4 shadow-lg">
        <img
          src={image || "./images/home/chicken-kare.jpg"}
          height="100%"
          width="100%"
          alt="popular-recipe"
        />
        <h2 className="image-title" style={{ color: "#ffffff" }}>
          {name || "Unknown"}
        </h2>
      </div>
    </Link>
  );
}

export default IndexCard;
