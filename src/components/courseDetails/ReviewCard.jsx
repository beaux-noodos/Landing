import React from 'react';

const ReviewCard = ({ imgSrc, reviewerName, reviewText, stars }) => {
  return (
    <div className="flex flex-row mb-4">
      <img className="h-[60px] w-[60px]" src={imgSrc} alt={reviewerName} />
      <div className='ml-4'>
        <h5 className="text-lg font-semibold text-secondary">{reviewerName}</h5>
        <div className="flex mb-2">
          {Array.from({ length: 5 }, (_, index) => (
            <span key={index} className={`ti-star ${index < stars ? 'text-yellow-500' : 'text-gray-300'}`}></span>
          ))}
        </div>
        <p className="text-gray-700">{reviewText}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
