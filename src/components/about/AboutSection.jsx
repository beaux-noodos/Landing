// src/components/AboutSection.jsx
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <motion.div
            className="lg:w-1/2 -mt-12"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.4 }}
          >
            <div className="relative w-full max-w-[540px] mx-auto lg:ml-24 mt-14">
              <img className="img-fluid w-full h-auto " src="images/about-us.jpg" alt="About" />
            </div>
          </motion.div>
          <motion.div
            className="border-[10px] border-background rounded-md py-12 px-8 w-full max-w-[700px] mx-auto lg:mx-0 lg:py-[75px] lg:px-[80px] "
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <div className="h_blog_text">
              <div className="text-left">
                <h4 className="text-3xl font-bold mb-4 text-primaryGreen">Welcome to our Institute</h4>
                <p className="mb-8 text-gray-600">
                  Subdue whales void god which living don't midst lesser yielding over lights whose.
                  Cattle greater brought sixth fly den dry good tree isn't seed stars were.
                </p>
                <p className="mb-8 text-gray-600">
                  Subdue whales void god which living don't midst lesser yielding over lights whose.
                  Cattle greater brought sixth fly den dry good tree isn't seed stars were the boring.
                </p>
                <a className="inline-flex items-center text-background bg-primaryGreen px-12 py-4 rounded-md hover:bg-secondaryBrown hover:text-background font-semibold text-xs" href="#">
                  LEARN MORE <FontAwesomeIcon className='ml-2' icon={faArrowRight} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
