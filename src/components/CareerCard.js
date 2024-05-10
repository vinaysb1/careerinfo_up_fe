import React from "react";
import "./CareerCard.css";

const CareerCard = ({ career }) => {
    return (
        <div className="career-card">
            <h3>{career.title}</h3>
            <p>{career.description}</p>
        </div>
    );
};

export default CareerCard;