// src/components/EventCard.jsx
import React from 'react';

const EventCard = ({ image, date, time, location, description, link }) => {
  return (
    <div className="bg-white overflow-hidden w-[555px] h-[400px]">
      <div className="">
        <img className="w-full h-48 object-cover" src={image} alt="Event" />
      </div>
      <div className="p-6">
        <div className="flex mb-4">
          <div className="date bg-gray-800 text-white px-3 py-1 rounded-full text-xl">
            <span>{date.day}</span> {date.month}
          </div>
          <div className="time-location ml-4">
            <p className="text-gray-600">
              <span className="ti-time mr-2"></span> {time}
            </p>
            <p className="text-gray-600">
              <span className="ti-location-pin mr-2"></span> {location}
            </p>
          </div>
        </div>
        <p className="text-gray-800 mb-4">{description}</p>
        <a href={link} className="primary-btn rounded-0 mt-3 inline-block">
          View Details
        </a>
      </div>
    </div>
  );
};

export default EventCard;
