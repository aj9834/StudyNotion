import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }} 
      className="bg-richblack-750 py-12"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2 
          className="text-3xl font-bold text-center text-blue-400"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          About StudyNotion
        </motion.h2>
        <motion.p 
          className="text-center text-gray-200 mt-4 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          StudyNotion is your ultimate destination for learning Computer Science.
          We offer a wide range of courses designed for Computer Science students
          and enthusiasts who want to gain industry-level knowledge. Whether you
          are a beginner or an advanced learner, we have the right course for you.
        </motion.p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "Comprehensive Courses", 
            "Interactive Learning", 
            "Filtered Courses"
          ].map((title, index) => (
            <motion.div 
              key={index} 
              className="p-6 bg-sky-500/30 shadow-lg rounded-lg cursor-pointer"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.05, rotateX: 5, rotateY: 5, zIndex: 10 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-semibold text-blue-400">{title}</h3>
              <p className="text-gray-200 mt-2">
                {title === "Comprehensive Courses" && "Explore a vast selection of courses covering topics such as Data Structures, Algorithms, Web Development, Machine Learning, and more."}
                {title === "Interactive Learning" && "Engage in hands-on projects, quizzes, and coding exercises to solidify your understanding of complex concepts."}
                {title === "Filtered Courses" && "Use our advanced filters to find the perfect course based on your skill level, interests, and career goals."}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-semibold text-blue-400">Why Choose StudyNotion?</h3>
          <p className="text-gray-200 mt-4 max-w-3xl mx-auto">
            Our platform is designed to help Computer Science students and learners
            find the best courses tailored to their needs. With expert instructors,
            interactive content, and an easy-to-use interface, StudyNotion makes
            learning effective and enjoyable.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
