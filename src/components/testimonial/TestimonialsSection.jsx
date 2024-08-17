import React from 'react';
import TestimonialCard from './TestimonialCard';
import { motion } from 'framer-motion';

const testimonials = [
  {
    image: 'img/testimonials/t1.jpg',
    name: 'Judicael Randriamanjato',
    testimonial: 'An exceptional experience! The projects are innovative and far exceeded my expectations. I highly recommend it!',
  },
  {
    image: 'images/Nathanael.jpg',
    name: 'Nathanaël Fanomezana',
    testimonial: 'The solutions offered really made the difference for me. Their personalized approach and support are second to none.',
  },
  // Add more testimonials as needed
];

const TestimonialsSection = () => {
  return (
    <section className="lg:py-32 py-10 overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-3 text-primaryGreen">Client say about us</h2>
          <p className="text-gray-600">
            See how our projects have transformed their experience and why they keep applauding us
          </p>
        </motion.div>
        <motion.div
          className="flex flex-wrap gap-14 justify-center"
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
