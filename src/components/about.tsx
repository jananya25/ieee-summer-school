import React from "react";
import { FaUsers, FaGraduationCap } from "react-icons/fa";
import { Container } from "./container";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-16 bg-gradient-to-br from-blue-900/60 via-purple-900/40 to-pink-900/30 overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[120vw] h-[60vh] bg-gradient-to-tr from-blue-700/20 via-purple-500/10 to-pink-400/10 blur-3xl opacity-60 animate-pulse-slow" />
      </div>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg">
          About
        </h2>
      <Container>
        <div className="flex flex-col gap-8 items-stretch text-left">
          {/* IEEE CS Chapter Card */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-8 flex flex-col items-center justify-center h-full hover:scale-[1.02] transition-transform border border-white/20">
            <FaUsers className="text-4xl text-blue-400 mb-4 drop-shadow" />
            <h3 className="font-bold text-xl mb-2 text-blue-200">
              IEEE Computer Society Chapter
            </h3>
            <p className="text-base text-gray-200">
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
          </div>
          {/* Summer School Card */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-8 flex flex-col items-center justify-center h-full hover:scale-[1.02] transition-transform border border-white/20">
            <FaGraduationCap className="text-4xl text-pink-400 mb-4 drop-shadow" />
            <h3 className="font-bold text-xl mb-2 text-pink-200">
              About the Summer School
            </h3>
            <p className="text-base text-gray-200">
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
          </div>
        </div>
      </Container>
    </section>
  );
};

export { About };
