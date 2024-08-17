import React from 'react';

const ProjectInfo = ({ user, price, creation_datetime, end_datetime, start_datetime }) => {

  const getDateFromDatetime = (datetime) => {
    if (!datetime) return '';
    return datetime.slice(0, 10);
  };

  return (
    <ul className="flex flex-col gap-3 mb-8 text-gray-500">
      <li className="flex justify-between py-3 px-6 w-80 bg-background">
        <p>User</p>
        <span className='text-secondary font-medium'>{user.first_name} {user.last_name}</span>
      </li>
      <li className="flex justify-between py-3 px-6 w-80 bg-background">
        <p>Price</p>
        <span>${price}</span>
      </li>
      <li className="flex justify-between py-3 px-6 w-80 bg-background">
        <p>Creation Date</p>
        <span>{getDateFromDatetime(creation_datetime)}</span>
      </li>
      <li className="flex justify-between py-3 px-6 w-80 bg-background">
        <p>Starting Date </p>
        <span>{getDateFromDatetime(start_datetime)}</span>
      </li>
      <li className="flex justify-between py-3 px-6 w-80 bg-background">
        <p>Ending Date </p>
        <span>{getDateFromDatetime(end_datetime)}</span>
      </li>
    </ul>
  );
};

export default ProjectInfo;
