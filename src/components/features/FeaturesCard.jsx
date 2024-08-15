// src/components/FeatureCard.jsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { motion } from "framer-motion";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <motion.div
      className="bg-background py-10 px-9 max-w-xs"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3,delay:0.1}}
      viewport={{ once: false, amount: 0.1}}
      

    >
      <div className="mb-4">
        <span className="text-4xl text-secondary">
          <FontAwesomeIcon icon={icon} />
        </span>
      </div>
      <h4 className="text-xl text-secondary font-semibold mt-3 mb-2">
        {title}
      </h4>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;
