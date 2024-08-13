import React from 'react';

const Banner = ({ title, link }) => {
  return (
    <section
      style={{
        backgroundImage: 'url("/img/banner/banner.jpg")',
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className='bg-[#002347] bg-opacity-80 h-[317px] text-center pt-28'>
        <h1 className='text-white text-5xl font-semibold'>{title}</h1>
        <div className="mt-4">
          <a href="index.html" className="text-white hover:text-gray-300">Home</a>
          <span className="text-white mx-2">/</span>
          <a href="about-us.html" className="text-white hover:text-gray-300">{link}</a>
        </div>
      </div>
    </section>
  );
};

export default Banner;
