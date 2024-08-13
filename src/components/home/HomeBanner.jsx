// src/components/HomeBanner.jsx
import React from 'react';

const HomeBanner = () => {
  return (
    <section
      style={{
        backgroundImage: 'url("/img/banner/home-banner.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "900px",
      }}
      className="bg-gray-100 pt-64"
    >
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="text-center">
            <p className="font-semibold text-xl text-secondary">
              BEST ONLINE EDUCATION SERVICE IN THE WORLD
            </p>
            <h2 className="text-5xl text-secondary font-semibold mt-6 mb-12">
              ONE STEP AHEAD THIS SEASON
            </h2>
            <div className="flex justify-center gap-4">
              <button className="bg-secondary border border-secondary text-primary text-xs font-semibold px-12 py-4 rounded-lg hover:bg-transparent hover:text-secondary">
                LEARN MORE
              </button>
              <button className="bg-primary border border-primary text-secondary text-xs font-semi  bold px-12 py-2 rounded-lg hover:bg-transparent hover:text-primary">
                SEE COURSE
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
