// src/components/TestimonialsSection.jsx
import React from 'react';
import TestimonialCard from './TestimonialCard';

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
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3 text-secondary">Client say about me</h2>
          <p className='text-gray-600'>
            Replenish man have thing gathering lights yielding shall you
          </p>
        </div>
        <div className="flex gap-14 justify-center">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              image={testimonial.image}
              name={testimonial.name}
              testimonial={testimonial.testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
