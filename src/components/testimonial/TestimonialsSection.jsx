import React from 'react';
import TestimonialCard from './TestimonialCard';
import { motion } from 'framer-motion';

const testimonials = [
  {
    image: 'img/testimonials/t1.jpg',
    name: 'Elite Martin',
    testimonial: 'Him, made can\'t called over won\'t there on divide there male fish beast own his day third seed sixth seas unto. Saw from',
  },
  {
    image: 'img/testimonials/t2.jpg',
    name: 'Davil Saden',
    testimonial: 'Him, made can\'t called over won\'t there on divide there male fish beast own his day third seed sixth seas unto. Saw from',
  },
  // Add more testimonials as needed
];

const TestimonialsSection = () => {
  return (
    <section className="py-32">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-3 text-secondary">Client say about me</h2>
          <p className="text-gray-600">
            Replenish man have thing gathering lights yielding shall you
          </p>
        </motion.div>
        <motion.div
          className="flex gap-14 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <TestimonialCard
                image={testimonial.image}
                name={testimonial.name}
                testimonial={testimonial.testimonial}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
