import React, { useEffect } from 'react';
import { motion } from "framer-motion";
import { useLocation } from 'react-router-dom';

const Banner = ({ title, link }) => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <section
      id='banner'
      style={{
        backgroundImage: 'url("/img/banner/banner.jpg")',
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className='bg-[#002347] bg-opacity-80 h-[317px] text-center pt-28'>
        <motion.h1
          className='text-white text-5xl font-semibold'
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.1 }}
        >
          {title}
        </motion.h1>

        <motion.div
          className="mt-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false, amount: 0.1 }}
        >
          <a href="index.html" className="text-white hover:text-gray-300">Home</a>
          <span className="text-white mx-2">/</span>
          <a href="about-us.html" className="text-white hover:text-gray-300">{link}</a>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
