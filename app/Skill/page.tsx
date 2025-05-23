"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiGithub, FiExternalLink, FiCode } from "react-icons/fi";

const Projects = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

  const skills = [
    {
      title: "Full-Stack Development",
      level: 95,
      color: "#6366F1",
      projects: ["E-commerce Platform", "Dashboard"],
      icon: "👨‍💻",
    },
    {
      title: "Frontend Engineering",
      level: 90,
      color: "#EC4899",
      projects: ["Portfolio Website", "Admin Dashboard"],
      icon: "🎨",
    },
    {
      title: "Backend Development",
      level: 85,
      color: "#10B981",
      projects: ["REST API Service"],
      icon: "⚙️",
    },
    {
      title: "UI/UX Design",
      level: 80,
      color: "#F59E0B",
      projects: ["Mobile App Design", "Website Redesign"],
      icon: "✏️",
    },
  ];

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 to-gray-950"
    >
      <motion.div
        style={{ y: yBg }}
        className="absolute top-0 left-0 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-[100px]"
      />
      <motion.div
        style={{ y: yBg }}
        className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-[80px]"
      />
      <motion.div
        style={{ opacity }}
        className="container mx-auto px-6 py-32 relative z-10"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 text-center mb-20"
        >
          My Technical Arsenal
        </motion.h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
              className="bg-gray-800/50 backdrop-blur-md p-6 rounded-xl border border-gray-700"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-2xl">{skill.icon}</span>
                <h3 className="text-2xl font-bold text-white">{skill.title}</h3>
                <span
                  className="ml-auto text-xl font-bold"
                  style={{ color: skill.color }}
                >
                  {skill.level}%
                </span>
              </div>

              <div className="h-2 bg-gray-700 rounded-full mb-4 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ delay: index * 0.1 + 0.5, duration: 1 }}
                  className="h-full rounded-full"
                  style={{ background: skill.color }}
                />
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {skill.projects.map((project, i) => (
                  <span
                    key={i}
                    className="text-sm px-3 py-1 rounded-full bg-gray-700/50 text-gray-300"
                  >
                    {project}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
