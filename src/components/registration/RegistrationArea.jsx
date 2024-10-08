import React from 'react';
import Countdown from './Countdown';
import RegistrationForm from './RegistrationForm';
import { motion } from 'framer-motion';

const RegistrationArea = () => {
  return (
    <section className="bg-secondary text-white py-32 px-24">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        <motion.div
          className="lg:w-7/12"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <div className="text-center lg:text-left mb-12 lg:mb-0">
            <h1 className="text-4xl font-bold mb-4">Inscrivez-vous maintenant</h1>
            <p>
              Il arrive un moment dans la vie de tout astronome en herbe où il est temps d'acheter ce premier télescope. C’est excitant de penser à mettre en place votre propre station d'observation.
            </p>
            <Countdown />
          </div>
        </motion.div>
        <motion.div
          className="lg:w-5/12 lg:ml-16 mt-12 lg:mt-0"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
        >
          <RegistrationForm />
        </motion.div>
      </div>
    </section>
  );
};

export default RegistrationArea;
