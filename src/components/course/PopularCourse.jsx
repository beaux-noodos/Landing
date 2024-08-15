// src/components/PopularCourses.jsx
import React from "react";
import CourseCard from "./CourseCard";
import { motion } from "framer-motion";

const courses = [
  {
    imgSrc: "img/courses/c1.jpg",
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
    imgSrc: "img/courses/c2.jpg",
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
    imgSrc: "img/courses/c3.jpg",
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
      <div className="container mx-auto pb-24">
        <div className="text-center mb-24">
          <motion.h2
            className="text-4xl text-secondary font-bold mb-3"
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
        <div className="flex gap-12 justify-center">
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
