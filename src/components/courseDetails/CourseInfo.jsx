import React from 'react';

const CourseInfo = ({ trainerName, courseFee, availableSeats, schedule }) => {
  return (
    <ul className="flex flex-col gap-3 mb-8 text-gray-500">
      <li className="flex justify-between py-3 px-6 w-80 bg-background">
        <p>Trainer’s Name</p>
        <span className='text-secondary font-medium'>{trainerName}</span>
      </li>
      <li className="flex justify-between py-3 px-6 w-80 bg-background">
        <p>Course Fee</p>
        <span>${courseFee}</span>
      </li>
      <li className="flex justify-between py-3 px-6 w-80 bg-background">
        <p>Available Seats</p>
        <span>{availableSeats}</span>
      </li>
      <li className="flex justify-between py-3 px-6 w-80 bg-background">
        <p>Schedule</p>
        <span>{schedule}</span>
      </li>
    </ul>
  );
};

export default CourseInfo;
