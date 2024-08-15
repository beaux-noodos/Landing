import React from 'react';
import TrainerCard from './TrainerCard';
import { faFacebookF, faLinkedinIn, faPinterestP, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';

const trainers = [
  {
    image: 'img/trainer/t1.jpg',
    name: 'Mated Nithan',
    designation: 'Sr. web designer',
    description: 'If you are looking at blank cassettes on the web, you may be very confused at the.',
    socialLinks: [
      { href: '#', icon: faFacebookF },
      { href: '#', icon: faXTwitter },
      { href: '#', icon: faLinkedinIn },
      { href: '#', icon: faPinterestP },
    ],
  },
  {
    image: 'img/trainer/t2.jpg',
    name: 'David Cameron',
    designation: 'Sr. web designer',
    description: 'If you are looking at blank cassettes on the web, you may be very confused at the.',
    socialLinks: [
      { href: '#', icon: faFacebookF },
      { href: '#', icon: faXTwitter },
      { href: '#', icon: faLinkedinIn },
      { href: '#', icon: faPinterestP },
    ],
  },
  {
    image: 'img/trainer/t3.jpg',
    name: 'Jain Redmel',
    designation: 'Sr. Faculty Data Science',
    description: 'If you are looking at blank cassettes on the web, you may be very confused at the.',
    socialLinks: [
      { href: '#', icon: faFacebookF },
      { href: '#', icon: faXTwitter },
      { href: '#', icon: faLinkedinIn },
      { href: '#', icon: faPinterestP },
    ],
  },
  {
    image: 'img/trainer/t4.jpg',
    name: 'Nathan Macken',
    designation: 'Sr. web designer',
    description: 'If you are looking at blank cassettes on the web, you may be very confused at the.',
    socialLinks: [
      { href: '#', icon: faFacebookF },
      { href: '#', icon: faXTwitter },
      { href: '#', icon: faLinkedinIn },
      { href: '#', icon: faPinterestP },
    ],
  },
];

const TrainerArea = () => {
  return (
    <section className="py-32 text-secondary">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6,ease: "easeInOut" }}
        >
          <h2 className="text-4xl font-bold mb-4">Our Expert Trainers</h2>
          <p className="text-gray-600">
            Replenish man have thing gathering lights yielding shall you
          </p>
        </motion.div>
        <div className="flex flex-wrap justify-center gap-7">
          {trainers.map((trainer, index) => (
            <div
              key={index}
            >
              <TrainerCard {...trainer} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainerArea;
