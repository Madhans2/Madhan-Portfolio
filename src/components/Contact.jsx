import { Link } from "react-router-dom";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import video from "../assets/contact-bg.mp4";

const Contact = () => {
  return (
    <section 
      id="contact" 
      className="relative min-h-screen flex flex-col md:flex-row items-center bg-black text-white px-6"
    >
      {/* Video Background (Larger on Web) */}
      <div className="absolute inset-0 md:relative md:w-1/2 h-full md:h-[90vh]">
        <video
          className="w-full h-full object-cover opacity-80 md:opacity-100"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={video} type="video/mp4" />
        </video>
      </div>

      {/* Contact Content - Centered Over Video on Mobile */}
      <motion.div 
        className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 bg-black/50 md:relative md:w-1/2 md:bg-transparent md:items-start md:text-left backdrop-blur-sm md:backdrop-blur-0"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Connect!</h2>
        <p className="text-lg mb-6 max-w-lg">
          Want to start a project? Or just say hi? Feel free to reach out!
        </p>

        {/* Email Link */}
        <a
          href="mailto:iammadhan28@gmail.com"
          className="text-xl font-semibold text-green-400 hover:text-green-300 transition duration-300"
        >
          iammadhan28@gmail.com
        </a>

        {/* Social Links */}
        <div className="flex space-x-6 mt-6">
          <a href="https://github.com/Madhans2" target="_blank" rel="noopener noreferrer">
            <FaGithub size={40} className="text-gray-300 hover:text-white transition duration-300" />
          </a>
          <a href="https://www.linkedin.com/in/madhan-s-b92131267/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={40} className="text-blue-400 hover:text-blue-300 transition duration-300" />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
