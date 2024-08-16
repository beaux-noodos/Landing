// src/components/EventCard.jsx
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const EventCard = ({ image, date, time, location, description, link }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }}
      className="relative lg:w-[555px] lg:h-[400px]"
    >
      <div className='bg-black bg-opacity-20 backdrop-blur-sm px-6 py-8 text-white w-72 ml-auto'>
        <div className='flex mb-6'>
          <div className='flex flex-col border-r-2 pr-3'>
            <span className='text-primary font-bold text-3xl'>{date.day}</span> {date.month}
          </div>
          <div className='flex flex-col pl-3 gap-2'>
            <p><FontAwesomeIcon icon={faClock} className='mr-2 text-sm'/>{time}</p>
            <p><FontAwesomeIcon icon={faLocationDot} className='mr-2 text-sm'/>{location}</p>
          </div>
        </div>
        <p className='mb-4'>{description}</p>
        <a href={link} className='mt-4'>
          <button className='bg-primaryGreen hover:bg-secondaryBrown text-background text-xs font-semibold px-12 py-4 '>
            VIEW DETAILS
          </button>
        </a>
      </div>


    </div>
  );
};

export default EventCard;
