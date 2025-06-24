'use client'
import React from "react";
import { FaUsers, FaGraduationCap } from "react-icons/fa";
import { Container } from "./container";
import { motion } from "motion/react";
import { easeOut } from "framer-motion";

const cardTransition = { duration: 0.7, ease: easeOut };

const About = () => {
  return (
    <section
      id="about"
      className="relative py-16 overflow-hidden bg-gradient-to-br from-pink-100 via-purple-200 to-pink-200">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[120vw] h-[60vh] bg-gradient-to-tr from-blue-700/20 via-purple-500/10 to-pink-400/10 blur-3xl opacity-60 animate-pulse-slow" />
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 bg-[url('/public/globe.svg')] bg-repeat opacity-5" aria-hidden="true" />
      </div>
      <h2 className="text-3xl md:text-5xl font-extrabold mb-10 text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg tracking-tight">
        About
      </h2>
      <Container>
        <div className="flex flex-col gap-8 md:gap-12 items-stretch text-left relative">
          {/* IEEE CS Chapter Card */}
          <motion.article
            className="flex-1 bg-gradient-to-br from-blue-900/60 via-blue-800/40 to-purple-900/20 backdrop-blur-lg rounded-2xl shadow-2xl p-6 sm:p-8 flex flex-col items-center justify-center h-full border-2 border-blue-300/30 dark:border-white/20 hover:shadow-blue-400/30 hover:scale-[1.04] hover:border-blue-400/60 transition-all duration-300 group focus-within:ring-2 focus-within:ring-blue-400 outline-none"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ ...cardTransition, delay: 0 }}
            tabIndex={0}
            aria-label="IEEE Computer Society Chapter Card"
          >
            <FaUsers className="text-4xl sm:text-5xl text-blue-400 mb-4 drop-shadow group-hover:text-blue-300 transition-colors duration-200" aria-label="Users Icon" />
            <div className="relative flex items-center mb-2">
              <h3 className="font-bold text-lg sm:text-xl text-blue-200 group-hover:text-blue-100 transition-colors duration-200">
                IEEE Computer Society Chapter
              </h3>
              {/* Animated accent */}
              <span className="ml-2 w-2 h-2 rounded-full bg-blue-400 animate-pulse shadow-lg" />
            </div>
            <p className="text-sm sm:text-base text-gray-800 dark:text-gray-200 leading-relaxed">
              The IEEE Computer Society (CS) Chapter serves as a dynamic
              platform for advancing knowledge and fostering innovation in the
              fields of Computer Science and Information Technology. By bringing
              together students, educators, and industry professionals, the
              chapter facilitates an environment where members can engage with
              the latest technological developments and research trends.
              <br />
              <br />
              The IEEE CS Chapter regularly organizes expert lectures, technical
              workshops, hands-on sessions, and collaborative projects, all
              aimed at nurturing professional growth and encouraging lifelong
              learning. Through its wide network, the chapter also provides
              valuable opportunities for mentorship, industry interactions, and
              collaborative research, empowering participants to stay ahead in
              the rapidly evolving digital landscape.
            </p>
          </motion.article>
          {/* Summer School Card */}
          <motion.article
            className="flex-1 bg-gradient-to-br from-pink-900/40 via-purple-900/30 to-blue-900/10 backdrop-blur-lg rounded-2xl shadow-2xl p-6 sm:p-8 flex flex-col items-center justify-center h-full border-2 border-pink-300/30 dark:border-white/20 hover:shadow-pink-400/30 hover:scale-[1.04] hover:border-pink-400/60 transition-all duration-300 group focus-within:ring-2 focus-within:ring-pink-400 outline-none"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ ...cardTransition, delay: 0.15 }}
            tabIndex={0}
            aria-label="About the Summer School Card"
          >
            <FaGraduationCap className="text-4xl sm:text-5xl text-pink-400 mb-4 drop-shadow group-hover:text-pink-300 transition-colors duration-200" aria-label="Graduation Cap Icon" />
            <div className="relative flex items-center mb-2">
              <h3 className="font-bold text-lg sm:text-xl text-pink-200 group-hover:text-pink-100 transition-colors duration-200">
                About the Summer School
              </h3>
              {/* Animated accent */}
              <span className="ml-2 w-2 h-2 rounded-full bg-pink-400 animate-pulse shadow-lg" />
            </div>
            <p className="text-sm sm:text-base text-gray-800 dark:text-gray-200 leading-relaxed">
              The 2025 IEEE Computer Society Region 10 Summer School on
              &ldquo;Data Science for Decision-Making: Methodologies and
              Applications&rdquo; is a prestigious five-day program hosted by
              Bharati Vidyapeeth&rsquo;s Institute of Computer Applications and
              Management (BVICAM), New Delhi.
              <br />
              <br />
              This summer school is designed to immerse participants in the core
              concepts, advanced methodologies, and latest research trends in
              Data Science, with a special focus on its applications in
              effective decision-making. The program features a balanced blend
              of expert lectures&mdash;including sessions by Distinguished
              Visiting Professors (DVPs)&mdash;interactive discussions, hands-on
              exercises, and collaborative group activities.
              <br />
              <br />
              Participants will explore a diverse range of topics, such as
              Introduction to Data Science for Decision-Making, Machine Learning
              for Predictive Analytics, Data Visualization for Storytelling,
              Time Series Analysis and Forecasting, Deep Learning for
              Classification and Regression, and Natural Language Processing for
              Text Analysis. The summer school aims to create a vibrant and
              collaborative environment where students, researchers, and
              industry professionals can deepen their understanding, share
              innovative ideas, and build professional networks that foster
              ongoing research and development in the dynamic field of data
              science.
            </p>
          </motion.article>
        </div>
      </Container>
    </section>
  );
};

export { About };
