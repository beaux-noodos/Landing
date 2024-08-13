// src/components/TestimonialCard.jsx
import React from 'react';

const TestimonialCard = ({ image, name, testimonial }) => {
  return (
    <div className="flex flex-row items-center w-[510px] py-12 px-14 shadow-xl shadow-gray-100 hover:shadow-2xl hover:shadow-gray-200">
      <img src={image} alt={name} className="w-auto px-4 rounded-md" />
      <div className="px-4">
        <h4 className="text-lg font-semibold text-secondary">{name}</h4>
        <p className="mt-2 text-gray-500">{testimonial}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
