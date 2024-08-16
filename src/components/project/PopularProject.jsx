import React from "react";
import EventCard from "./ProjectCard";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    image: "images/event.jpg",
    date: { day: "15", month: "Jun" },
    time: "12:00 AM - 12:30 AM",
    location: "Hilton Quebec",
    description:
      "One make creepeth man for so bearing their firmament won’t fowl meat over seas great",
    link: "/project-details",
  },
  {
    image: "images/event2.jpg",
    date: { day: "15", month: "Jun" },
    time: "12:00 AM - 12:30 AM",
    location: "Hilton Quebec",
    description:
      "One make creepeth man for so bearing their firmament won’t fowl meat over seas great",
    link: "/project-details",
  },
  {
    image: "images/ble.jpg",
    date: { day: "15", month: "Jun" },
    time: "12:00 AM - 12:30 AM",
    location: "Hilton Quebec",
    description:
      "One make creepeth man for so bearing their firmament won’t fowl meat over seas great",
    link: "/project-details",
  },
  {
    image: "images/citron.jpg",
    date: { day: "15", month: "Jun" },
    time: "12:00 AM - 12:30 AM",
    location: "Hilton Quebec",
    description:
      "One make creepeth man for so bearing their firmament won’t fowl meat over seas great",
    link: "/project-details",
  },
];

const PopularProject = () => {
  return (
    <section className="overflow-hidden lg:py-24 py-10 bg-primaryGreen">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          viewport={{ once: false, amount: 0.1 }}
        >
          <h2 className="text-3xl font-bold mb-3 text-background ">
            Popular Projects
          </h2>
          <p className="text-gray-400">
            Replenish man have thing gathering lights yielding shall you
          </p>
        </motion.div>
        <motion.div
          className="flex flex-wrap justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {projects.map((event, index) => (
            <motion.div
              key={index}
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectCard {...event} />
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className="text-center pt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a
            href="#"
            className="event-link flex items-center justify-center text-primary hover:scale-105"
          >
            VIEW MORE PROJECTS{" "}
            <FontAwesomeIcon className="ml-2" icon={faArrowRight} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PopularProject;
