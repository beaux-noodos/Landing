import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const HomeBanner = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
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
      className="overflow-hidden lg:h-screen h-[500px] flex items-center justify-center"
    >
      <div className="bg-black bg-opacity-40 w-full h-full flex flex-col items-center justify-center px-4 lg:px-0">
        <div className="text-center">
          <motion.p
            className="font-semibold lg:text-xl text-background"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.1 }}
          >
            Le meilleur choix pour investir dans un avenir durable
          </motion.p>
          <motion.h2
            className="lg:text-5xl text-xl text-background font-semibold mt-6 mb-12"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false, amount: 0.1 }}
          >
            INVESTISSEZ DANS UN DEMAIN MEILLEUR
          </motion.h2>
          <motion.div
            className="flex flex-col lg:flex-row gap-4 items-center justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: false, amount: 0.1 }}
          >
            <motion.button className="bg-primaryGreen border border-secondaryGreen text-background text-xs font-semibold w-full max-w-[200px] px-8 py-4 rounded-lg hover:bg-transparent">
              <a href="/about-us">EN SAVOIR PLUS</a>
            </motion.button>
            <motion.button className="bg-secondaryBrown border border-secondaryBrown text-background text-xs font-semibold w-full max-w-[200px] px-8 py-4 rounded-lg hover:bg-transparent hover:text-primary">
              <a href="/projects">VOIR LES PROJETS</a>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
