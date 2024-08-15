// src/components/HomeBanner.jsx
import React from "react";
import { motion } from "framer-motion";

const HomeBanner = () => {
  return (
    <section
      style={{
        backgroundImage: 'url("/img/banner/home-banner.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        minHeight: "900px",
        
      }}
      className="bg-gray-100 pt-64"
    >
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="text-center">
            <motion.p
              className="font-semibold text-xl text-secondary"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false, amount: 0.1 }}
            >
              BEST ONLINE EDUCATION SERVICE IN THE WORLD
            </motion.p>
            <motion.h2
              className="text-5xl text-secondary font-semibold mt-6 mb-12"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: false, amount: 0.1 }}
            >
              ONE STEP AHEAD THIS SEASON
            </motion.h2>
            <motion.div
              className="flex justify-center gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: false, amount: 0.1 }}
            >
              <motion.button className="bg-secondary border border-secondary text-primary text-xs font-semibold px-12 py-4 rounded-lg hover:bg-transparent hover:text-secondary">
                LEARN MORE
              </motion.button>
              <motion.button className="bg-primary border border-primary text-secondary text-xs font-semi  bold px-12 py-2 rounded-lg hover:bg-transparent hover:text-primary">
                SEE COURSE
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
