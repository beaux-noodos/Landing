// src/components/FeatureCard.jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-background py-10 px-9 max-w-xs">
      <div className="mb-4">
        <span className="text-4xl text-secondary">
        <FontAwesomeIcon icon={icon} />
        </span>
      </div>
      <h4 className="text-xl text-secondary font-semibold mt-3 mb-2">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
