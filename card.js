// src/components/Card.js
import React from 'react';

const Card = ({ title, description }) => (
  <div className="bg-white shadow-lg p-6 rounded-md">
    <h2 className="text-xl font-bold mb-2">{title}</h2>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default Card;
