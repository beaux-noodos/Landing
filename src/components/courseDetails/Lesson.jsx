import React from 'react';

const Lesson = ({ title }) => {
  return (
    <li className="flex justify-between items-center py-2">
      <p className='text-gray-500 text-lg'>{title}</p>
      <a href="#" className="bg-background hover:bg-primary text-gray-500 hover:text-white text-xs font-semibold px-12 py-4">VIEW DETAILS</a>
    </li>
  );
};

export default Lesson;
