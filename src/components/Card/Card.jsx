import React from "react";
import "./Card.css";

function Card({ title, image, link }) {
  return (
    <a href={link} className="card">
      <h1>{title}</h1>
      <div className="hovercard">
        <img src={image} alt={title} />
      </div>
    </a>
  );
}

export default Card;
