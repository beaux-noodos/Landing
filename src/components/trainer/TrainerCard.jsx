// src/components/TrainerCard.jsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { motion } from "framer-motion";

const TrainerCard = ({
  image,
  name,
  designation,
  description,
  socialLinks,
}) => {
  return (
    <motion.div
      className="bg-white overflow-hidden shadow-xl shadow-gray-100 hover:shadow-2xl hover:shadow-gray-200 w-64"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
      viewport={{ once: false, amount: 0.1 }}
    >
      <div className="thumb d-flex justify-content-sm-center">
        <motion.img
          className="w-full h-48 object-cover"
          src={image}
          alt={name}
        />
      </div>
      <div className="meta-text text-center p-6">
        <h4 className="text-xl font-semibold mb-2">{name}</h4>
        <p className="text-gray-600 mb-4">{designation}</p>
        <p className="text-gray-400 mb-6">{description}</p>
        <div className="flex justify-center space-x-4">
          {socialLinks.map(({ href, icon }, index) => (
            <a
              key={index}
              href={href}
              className="text-gray-300 hover:text-primary"
            >
              <FontAwesomeIcon icon={icon} />
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default TrainerCard;
