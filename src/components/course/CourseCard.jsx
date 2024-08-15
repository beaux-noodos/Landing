import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const CourseCard = ({ imgSrc, price, tag, title, description, authorImg, authorName, students, likes }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate('/course-details');
  };

  return (
    <div
      className="overflow-hidden bg-background h-[557px] w-[326px] hover:shadow-2xl hover:shadow-gray-200 cursor-pointer"
      onClick={handleCardClick}
    >
      <div className=''>
        <img className="w-full h-64 object-cover" src={imgSrc} alt={title} />
      </div>
      <div className="p-6">
        <span className="text-xl font-bold text-center text-secondary hover:text-primary bg-primary hover:bg-secondary px-3.5 py-5 rounded-full ml-56">${price}</span>
        <span className="mb-4 block text-xs text-white bg-secondary w-20 text-center py-1">{tag}</span>
        <h4 className="mb-3 text-lg font-semibold">
          <a href="course-details.html" className="text-secondary hover:text-primary">{title}</a>
        </h4>
        <p className="text-gray-700">{description}</p>
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center">
            <img className="w-8 h-8 rounded-full mr-2" src={authorImg} alt={authorName} />
            <span className="text-sm font-medium">{authorName}</span>
          </div>
          <div className="flex space-x-4">
            <span className="text-sm text-gray-600">
              <FontAwesomeIcon className='mr-2' icon={ faUserGroup } />{students}
            </span>
            <span className="text-sm text-gray-600">
              <FontAwesomeIcon className='mr-2' icon={ faHeart } />{likes}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
