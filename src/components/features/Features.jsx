// src/components/Features.jsx
import React from "react";
import FeatureCard from "./FeaturesCard";
import {
  faBookOpen,
  faEarth,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const features = [
  {
    icon: faGraduationCap,
    title: "Scholarship Facility",
    description:
      "One make creepeth, man bearing theira firmament won't great heaven",
  },
  {
    icon: faBookOpen,
    title: "Sell Online Course",
    description:
      "One make creepeth, man bearing theira firmament won't great heaven",
  },
  {
    icon: faEarth,
    title: "Global Certification",
    description:
      "One make creepeth, man bearing theira firmament won't great heaven",
  },
];

const Features = ({ bg, titleColor }) => {
  return (
    <section className={`pt-32 pb-24 ${bg}`}>
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <div className="max-w-2xl mx-auto">
            <motion.h2
              className={`text-4xl ${titleColor} font-bold mb-3`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              viewport={{ once: false, amount: 0.1 }}
            >
              Awesome Feature
            </motion.h2>
            <motion.p
              className="text-gray-600"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" ,delay:0.2}}
              viewport={{ once: false, amount: 0.1 }}
            >
              Replenish man have thing gathering lights yielding shall you
            </motion.p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
