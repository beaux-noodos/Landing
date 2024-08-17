// src/components/Features.jsx
import React from "react";
import FeatureCard from "./FeaturesCard";
import {
  faEarth,
  faHandHoldingDollar,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const features = [
  {
    icon: faHandHoldingDollar,
    title: "Recommandations Personnalisées",
    description:
      "Recevez des suggestions de projets adaptées à vos intérêts, basées sur vos investissements passés et vos préférences.",
  },
  {
    icon: faEarth,
    title: "Suivi des Projets en Temps Réel",
    description:
      "Suivez la progression de vos projets d'investissement en un coup d'œil : progression, nombre de likes, date d'achèvement, et bien plus encore.",
  },
  {
    icon: faMessage,
    title: "Assistant IA Intégré",
    description:
      "Un chat intelligent qui répond à toutes vos questions sur l'application et vous aide à trouver rapidement les projets qui vous intéressent.",
  },
];

const Features = ({ bg, titleColor }) => {
  return (
    <section className={`lg:pt-32 pt-10 px-3 pb-24 overflow-hidden ${bg}`}>
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
              Fonctionnalités Clés
            </motion.h2>
            <motion.p
              className="text-gray-400"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
              viewport={{ once: false, amount: 0.1 }}
            >
              Tout ce dont vous avez besoin pour financer facilement et efficacement
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
