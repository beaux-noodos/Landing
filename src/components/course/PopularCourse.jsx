// src/components/PopularCourses.jsx
import React from "react";
import CourseCard from "./CourseCard";
import { motion } from "framer-motion";

const courses = [
  {
    imgSrc: "images/citron.jpg",
    price: 25,
    tag: "DESIGN",
    title: "Custom Product Design",
    description:
      "One make creepeth man bearing their one firmament won’t fowl meat over sea",
    authorImg: "img/courses/author1.png",
    authorName: "Cameron",
    students: 25,
    likes: 35,
  },
  {
    imgSrc: "images/carotte.jpg",
    price: 25,
    tag: "DESIGN",
    title: "Social Media Network",
    description:
      "One make creepeth man bearing their one firmament won’t fowl meat over sea",
    authorImg: "img/courses/author2.png",
    authorName: "Cameron",
    students: 25,
    likes: 35,
  },
  {
    imgSrc: "images/ble.jpg",
    price: 25,
    tag: "DESIGN",
    title: "Computer Engineering",
    description:
      "One make creepeth man bearing their one firmament won’t fowl meat over sea",
    authorImg: "img/courses/author3.png",
    authorName: "Cameron",
    students: 25,
    likes: 35,
  },
];

const PopularCourses = () => {
  return (
    <section>
      <div className="container overflow-hidden mx-auto mt-16 pb-24">
        <div className="text-center lg:mb-24 mb-10">
          <motion.h2
            className="text-4xl text-secondaryGreen font-bold mb-3"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            viewport={{ once: false, amount: 0.1 }}
          >
            Our Popular Courses
          </motion.h2>
          <motion.p
            className="text-gray-600"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            viewport={{ once: false, amount: 0.1 }}
          >
            Replenish man have thing gathering lights yielding shall you
          </motion.p>
        </div>
        <div className="flex flex-wrap gap-12 justify-center">
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              imgSrc={course.imgSrc}
              price={course.price}
              tag={course.tag}
              title={course.title}
              description={course.description}
              authorImg={course.authorImg}
              authorName={course.authorName}
              students={course.students}
              likes={course.likes}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;
