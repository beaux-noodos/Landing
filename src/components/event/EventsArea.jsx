import React from "react";
import EventCard from "./EventCard";
import { motion } from "framer-motion";

const events = [
  {
    image: "img/event/e1.jpg",
    date: { day: "15", month: "Jun" },
    time: "12:00 AM - 12:30 AM",
    location: "Hilton Quebec",
    description:
      "One make creepeth man for so bearing their firmament won’t fowl meat over seas great",
    link: "#",
  },
  {
    image: "img/event/e2.jpg",
    date: { day: "15", month: "Jun" },
    time: "12:00 AM - 12:30 AM",
    location: "Hilton Quebec",
    description:
      "One make creepeth man for so bearing their firmament won’t fowl meat over seas great",
    link: "#",
  },
];

const EventsArea = () => {
  return (
    <section className="py-32 bg-secondary">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          viewport={{ once: false, amount: 0.1 }}
        >
          <h2 className="text-3xl font-bold mb-3 text-white ">
            Upcoming Events
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
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <EventCard {...event} />
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
            className="event-link flex items-center justify-center text-primary"
          >
            VIEW ALL EVENT{" "}
            <img className="ml-2" src="img/next.png" alt="Next" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default EventsArea;
