import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import ProjectCard from "./ProjectCard";
import axios from "axios";

const PopularProject = ({ bg, textColor }) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("http://bnbs-hackathon-api-alb-dev-1521698521.eu-west-3.elb.amazonaws.com/projects");
        setProjects(response.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section className={`overflow-hidden lg:py-24 py-10 ${bg}`}>
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          viewport={{ once: false, amount: 0.1 }}
        >
          <h2 className={`text-3xl font-bold mb-3 ${textColor}`}>
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
          {projects.slice(0, 4).map((project, index) => (
            <motion.div
              key={index}
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectCard {...project} />
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
            className={`event-link flex items-center justify-center ${textColor} hover:scale-105`}
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
