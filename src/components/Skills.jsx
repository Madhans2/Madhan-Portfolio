import React from "react";
import { motion } from "framer-motion";
import vsimage from "../assets/visual-studio.svg";
import tailwind from "../assets/tailwindcss-icon.png";
import Mongodb from "../assets/Mongodb.jpg";
import { FaReact, FaVuejs, FaNodeJs, FaWordpress, FaPhp, FaSass, FaCss3Alt, FaBootstrap, FaHtml5, FaGitAlt, FaJs } from "react-icons/fa";

const skills = [
  { icon: <FaJs size={40} />, name: "JavaScript" },
  { icon: <FaReact size={40} />, name: "React" },
  { icon: <FaVuejs size={40} />, name: "Vue" },
  { icon: <FaNodeJs size={40} />, name: "Node" },
  { icon: <FaPhp size={40} />, name: "PHP" },
  { icon: <FaCss3Alt size={40} />, name: "CSS3" },
  { icon: <FaBootstrap size={40} />, name: "Bootstrap" },
  { icon: <FaHtml5 size={40} />, name: "HTML5" },
  { icon: <FaGitAlt size={40} />, name: "Git" },
];

const Skills = () => {
  return (
    <section id="skills" className="h-auto md:h-screen bg-black text-white flex flex-col justify-center items-center px-6 md:px-10 py-12 md:py-0">
      
      {/* Title */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-4 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Skills & Experience
      </motion.h2>  

      <motion.p
        className="text-gray-400 text-center max-w-2xl mb-6 text-sm md:text-base"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        The main area of expertise is front-end development (client-side of the web). <br />
        HTML, CSS, JS, building small and medium web applications with Vue or React, custom plugins, features, animations, and coding interactive layouts.
        I have full-stack experience with WordPress.
      </motion.p>

      {/* Skills Grid */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 md:gap-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center space-y-2"
            whileHover={{ scale: 1.1 }}
          >
            <div className="text-white">{skill.icon}</div>
            <span className="text-xs md:text-sm text-gray-300">{skill.name}</span>
          </motion.div>
        ))}

        {/* Additional Skills */}
        {[{ img: vsimage, name: "Visual Studio" }, { img: tailwind, name: "TailWindCss" }, { img: Mongodb, name: "Mongodb" }].map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center space-y-2"
            whileHover={{ scale: 1.1 }}
          >
            <img className="h-10 md:h-12" src={skill.img} alt={skill.name} />
            <p className="text-xs md:text-sm text-gray-300">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
      
    </section>
  );
}

export default Skills;
