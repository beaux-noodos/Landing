import React from 'react';

const CourseText = ({ title, content }) => {
  return (
    <div className="mb-8">
      <h4 className="text-2xl font-semibold pb-2 mb-5 mt-10 text-secondary border-b">{title}</h4>
      <div className="text-gray-500">
        {content.split('\n').map((paragraph, index) => (
          <p key={index} className="mb-4">{paragraph}</p>
        ))}
      </div>
    </div>
  );
};

export default CourseText;
