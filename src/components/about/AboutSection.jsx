// src/components/AboutSection.jsx
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center mr-32">
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.4 }}
          >
            <div className="relative w-[540px] ml-28 mt-14">
              <img className="img-fluid w-full" src="img/about.png" alt="About" />
            </div>
          </motion.div>
          <motion.div
            className="mt-8 border-[10px] border-background rounded-md py-[75px] px-[80px] w-[700px]"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <div className="h_blog_text">
              <div className="text-left">
                <h4 className="text-3xl font-bold mb-4 text-secondary">Welcome to our Institute</h4>
                <p className="mb-8 text-gray-600">
                  Subdue whales void god which living don't midst lesser yielding over lights whose.
                  Cattle greater brought sixth fly den dry good tree isn't seed stars were.
                </p>
                <p className="mb-8 text-gray-600">
                  Subdue whales void god which living don't midst lesser yieldi over lights whose.
                  Cattle greater brought sixth fly den dry good tree isn't seed stars were the boring.
                </p>
                <a className="inline-flex items-center text-secondary bg-primary px-12 py-4 rounded-md hover:bg-secondary hover:text-primary font-semibold text-xs" href="#">
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
