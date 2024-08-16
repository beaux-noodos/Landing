// src/components/TestimonialCard.jsx
import React from 'react';

const TestimonialCard = ({ image, name, testimonial }) => {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:w-[510px] w-[350px] py-16 lg:px-14 px-5 shadow-xl shadow-gray-100 hover:shadow-2xl hover:shadow-gray-200">
      <img src={image} alt={name} className="lg:w-auto w-28 px-4 rounded-md" />
      <div className="px-4 lg:mt-0 mt-1">
        <h4 className="text-lg font-semibold text-primaryGreen">{name}</h4>
        <p className="mt-2 text-gray-500">{testimonial}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
