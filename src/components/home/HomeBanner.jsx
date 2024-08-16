// src/components/HomeBanner.jsx
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const HomeBanner = () => {
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
      id="banner"
      style={{
        backgroundImage: 'url("/images/banner.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        
      }}
      className="overflow-hidden lg:h-[900px] h-[500px]"
    >
      <div className="bg-black overflow-hidden bg-opacity-40 lg:min-h-[900px] min-h-[500px]">
      <div className="container lg:mx-auto lg:pt-64 pt-28">
        <div className="flex justify-center">
          <div className="text-center">
            <motion.p
              className="font-semibold lg:text-xl text-background"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false, amount: 0.1 }}
            >
              BEST ONLINE EDUCATION SERVICE IN THE WORLD
            </motion.p>
            <motion.h2
              className="lg:text-5xl text-xl text-background font-semibold mt-6 mb-12"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: false, amount: 0.1 }}
            >
              ONE STEP AHEAD THIS SEASON
            </motion.h2>
            <motion.div
              className="flex lg:flex-row justify-center flex-col overflow-hidden lg:ml-0 ml-24 gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: false, amount: 0.1 }}
            >
              <motion.button className="bg-primaryGreen border border-secondaryGreen text-background text-xs font-semibold w-44 px-12 py-4 rounded-lg hover:bg-transparent">
                LEARN MORE
              </motion.button>
              <motion.button className="bg-secondaryBrown border border-secondaryBrown text-background text-xs font-semibold w-44 lg:px-12 px-2 py-4 rounded-lg hover:bg-transparent hover:text-primary">
                SEE COURSE
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default HomeBanner;
