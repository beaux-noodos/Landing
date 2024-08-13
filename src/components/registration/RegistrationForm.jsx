// src/components/RegistrationForm.jsx
import React from 'react';

const RegistrationForm = () => {
  return (
    <div className="bg-white text-secondary text-center w-96 p-10">
      <h3 className="text-2xl font-semibold">Courses for Free</h3>
      <p className="text-gray-600 mb-6">It is high time for learning</p>
      <form className="space-y-4" action="mail.html" method="post">
        <div className="space-y-3 mb-5">
          <input
            name="name"
            placeholder="Your Name"
            required
            type="text"
            className="w-72 p-3 border-b outline-none"
          />
          <input
            name="phone"
            placeholder="Your Phone Number"
            required
            type="tel"
            className="w-72 p-3 border-b outline-none"
          />
          <input
            name="email"
            placeholder="Your Email Address"
            pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
            required
            type="email"
            className="w-72 p-3 border-b outline-none"
          />
        </div>
        <button type="submit" className="w-72 px-12 py-3 font-bold text-sm bg-primary text-secondary hover:bg-secondary hover:text-primary">
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
