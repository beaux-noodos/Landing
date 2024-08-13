// src/components/Features.jsx
import React from 'react';
import FeatureCard from './FeaturesCard';
import { faBookOpen, faEarth, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

const features = [
  {
    icon: faGraduationCap,
    title: 'Scholarship Facility',
    description: 'One make creepeth, man bearing theira firmament won\'t great heaven',
  },
  {
    icon: faBookOpen,
    title: 'Sell Online Course',
    description: 'One make creepeth, man bearing theira firmament won\'t great heaven',
  },
  {
    icon: faEarth,
    title: 'Global Certification',
    description: 'One make creepeth, man bearing theira firmament won\'t great heaven',
  },
];

const Features = ({ bg, titleColor }) => {
  return (
    <section className={`pt-32 pb-24 ${bg}`}>
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <div className="max-w-2xl mx-auto">
            <h2 className={`text-4xl ${titleColor} font-bold mb-3`}>Awesome Feature</h2>
            <p className="text-gray-600">
              Replenish man have thing gathering lights yielding shall you
            </p>
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
