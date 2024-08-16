// src/components/EventCard.jsx
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProjectCard = ({ id, image_url, creation_datetime, start_datetime, end_datetime, localisation, title }) => {

  const navigate = useNavigate();

  const getDayFromDatetime = (datetime) => {
    if (!datetime) return '';

    const day = datetime.split('-')[2].slice(0, 2);
    return day;
  };

  const getMonthFromDatetime = (datetime) => {
    if (!datetime) return '';
    const monthNumber = datetime.split('-')[1];

    const monthNames = [
      "Jan", "Feb", "Mar", "Apr", "May", "June",
      "July", "Aug", "Sept", "Oct", "Nov", "Dec"
    ];

    const monthIndex = parseInt(monthNumber, 10) - 1;
    return monthNames[monthIndex];
  };

  const getDateFromDatetime = (datetime) => {
    if (!datetime) return '';
    return datetime.slice(0, 10);
  };

  const handleViewDetails = () => {
    navigate(`/projects/${id}`);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${image_url})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }}
      className="relative lg:w-[555px] lg:h-[400px]"
    >
      <div className='bg-black bg-opacity-20 backdrop-blur-sm px-6 py-8 text-white w-80 ml-auto'>
        <div className='flex mb-6'>
          <div className='flex flex-col border-r-2 pr-3'>
            <span className='text-primary font-bold text-3xl'>{getDayFromDatetime(creation_datetime)}</span> {getMonthFromDatetime(creation_datetime)}
          </div>
          <div className='flex flex-col pl-3 gap-2'>
            <p><FontAwesomeIcon icon={faClock} className='mr-2 text-sm' />{getDateFromDatetime(start_datetime)} to {getDateFromDatetime(end_datetime)} </p>
            <p><FontAwesomeIcon icon={faLocationDot} className='mr-2 text-sm' />{localisation.name}</p>
          </div>
        </div>
        <p className='mb-4'>{title}</p>
        <button onClick={handleViewDetails} className='bg-primaryGreen hover:bg-secondaryBrown text-background text-xs font-semibold px-12 py-4 '>
          VIEW DETAILS
        </button>
      </div>


    </div>
  );
};

export default ProjectCard;
