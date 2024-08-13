// src/components/RegistrationArea.jsx
import React from 'react';
import Countdown from './Countdown';
import RegistrationForm from './RegistrationForm';


const RegistrationArea = () => {
  return (
    <section className="bg-secondary text-white py-32 px-24">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        <div className="lg:w-7/12">
          <div className="text-center lg:text-left mb-12 lg:mb-0">
            <h1 className="text-4xl font-bold mb-4">Register Now</h1>
            <p>
              There is a moment in the life of any aspiring astronomer that it is time to buy that first telescope. It’s exciting to think about setting up your own viewing station.
            </p>
            <Countdown />
          </div>
        </div>
        <div className="lg:w-5/12 lg:ml-16 mt-12 lg:mt-0">
          <RegistrationForm />
        </div>
      </div>
    </section>
  );
};

export default RegistrationArea;
