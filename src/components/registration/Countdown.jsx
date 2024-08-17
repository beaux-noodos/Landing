import React, { useState, useEffect } from 'react';

const Countdown = () => {
  const calculateTimeLeft = () => {
    const eventDate = new Date('2024-12-31T23:59:59'); // Date de l'événement
    const now = new Date();
    const difference = eventDate - now;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex space-x-4 text-center mt-16">
      <div className="py-9 px-5 border bg-white bg-opacity-20 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold w-28">
          {timeLeft.days}
          <span className="text-sm ml-2">Jours</span>
        </h1>
      </div>
      <div className="py-9 px-5 border bg-white bg-opacity-20 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold w-28">
          {timeLeft.hours}
          <span className="text-sm ml-2">Heures</span>
        </h1>
      </div>
      <div className="py-9 px-5 border bg-white bg-opacity-20 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold w-28">
          {timeLeft.minutes}
          <span className="text-sm ml-2">Minutes</span>
        </h1>
      </div>
      <div className="py-9 px-5 border bg-white bg-opacity-20 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold w-28">
          {timeLeft.seconds}
          <span className="text-sm ml-2">Secondes</span>
        </h1>
      </div>
    </div>
  );
};

export default Countdown;
