import React from 'react';
import { motion } from 'framer-motion';

const ProjectText = ({ title, content }) => {
  return (
    <motion.div
      className="mb-8"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <h4 className="text-2xl font-semibold pb-2 mb-5 mt-10 text-secondary border-b">{title}</h4>
      <div className="text-gray-500">
        {content.split('\n').map((paragraph, index) => (
          <p key={index} className="mb-4">{paragraph}</p>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectText;
