import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const ProjectCard = ({
  imgSrc,
  price,
  tag,
  title,
  description,
  authorImg,
  authorName,
  students,
  likes,
}) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate("/project-details#banner");
  };

  return (
    <motion.div
      className="overflow-hidden text-center bg-background h-auto w-[326px] hover:shadow-2xl hover:shadow-gray-200 cursor-pointer"
      onClick={handleCardClick}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.5 }}
    >
      <div className="">
        <motion.img
          className="w-full h-64 object-cover"
          src={imgSrc}
          alt={title}
          whileHover={{ scale: 1.05 }}
        />
      </div>
      <div className="pt-6">
        <h4 className="mb-3 text-lg font-semibold w-full">
          <a
            href="#"
            className="text-secondaryGreen"
          >
            {title}
          </a>
        </h4>
        <p className="text-gray-700">{description}</p>
        <div className="flex justify-between items-center mt-4 px-6">
          <div className="flex items-center">
            <img
              className="w-8 h-8 rounded-full mr-2"
              src={authorImg}
              alt={authorName}
            />
            <span className="text-sm font-medium">{authorName}</span>
          </div>
          <div className="flex space-x-4">
            <span className="text-sm text-gray-600">
              <FontAwesomeIcon className="mr-2" icon={faUserGroup} />
              {students}
            </span>
            <span className="text-sm text-gray-600">
              <FontAwesomeIcon className="mr-2" icon={faHeart} />
              {likes}
            </span>
          </div>
        </div>
        <button className="text-background bg-primaryGreen hover:bg-secondaryBrown w-full py-1 mt-8">INVEST</button>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
