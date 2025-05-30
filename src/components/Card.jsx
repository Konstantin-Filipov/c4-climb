import React from "react";

const Card = ({ name, grade, image, description }) => {
  return (
    <div className="card">
      {image && (
        <div className="card-image">
          <img className="image" src={image} alt={name} />
        </div>
      )}
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="card-grade">{grade}</p>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default Card;
