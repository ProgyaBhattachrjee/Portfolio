"use client";
import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";

const Projects = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 8]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.08]);

  const skills = [
    {
      title: "Full-Stack Development",
      level: 95,
      color: "#6366F1",
      projects: ["E-commerce Platform", "Dashboard"],
      icon: "👨‍💻",
      shape: "cube",
    },
    {
      title: "Frontend Engineering",
      level: 90,
      color: "#EC4899",
      projects: ["Portfolio Website", "Admin Dashboard"],
      icon: "🎨",
      shape: "pyramid",
    },
    {
      title: "Backend Development",
      level: 85,
      color: "#10B981",
      projects: ["REST API Service"],
      icon: "⚙️",
      shape: "cylinder",
    },
    {
      title: "UI/UX Design",
      level: 80,
      color: "#F59E0B",
      projects: ["Mobile App Design", "Website Redesign"],
      icon: "✏️",
      shape: "sphere",
    },
  ];

  const ShapeBackground = ({ shape = "cube", color = "#000" }) => {
    const baseClass = "absolute -z-10 w-32 h-32 opacity-10";
    const shapes = {
      cube: "rounded-lg",
      cylinder: "rounded-[50%] h-1/2",
      sphere: "rounded-full",
      pyramid: "",
    };
    const clipPath =
      shape === "pyramid"
        ? { clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }
        : {};

    return (
      <motion.div
        className={`${baseClass}`}
        style={{ backgroundColor: color, ...clipPath }}
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.1 }}
        transition={{ duration: 1, delay: 0.3 }}
      />
    );
  };

  const particleCount =
    typeof window !== "undefined" && window.innerWidth < 768 ? 15 : 30;

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950"
    >
      {/* Floating Gradients */}
      <motion.div
        style={{
          y: yBg,
          rotate,
          x: useTransform(scrollYProgress, [0, 1], [0, 150]),
        }}
        className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-[100px] brightness-125"
      />
      <motion.div
        style={{
          y: useTransform(yBg, (y) => y * 0.7),
          rotate: useTransform(rotate, (r) => -r * 1.5),
          x: useTransform(scrollYProgress, [0, 1], [0, -100]),
        }}
        className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-[120px] brightness-110"
      />

      {/* Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: particleCount }).map((_, i) => {
          const size = Math.random() * 5 + 2;
          return (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/5"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, (Math.random() - 0.5) * 50],
                x: [0, (Math.random() - 0.5) * 50],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          );
        })}
      </div>

      {/* Content */}
      <motion.div
        style={{
          rotateX: useTransform(scrollYProgress, [0, 1], [0, 15]),
          rotateY: useTransform(scrollYProgress, [0, 1], [0, 10]),
          scale,
        }}
        className="container mx-auto px-6 py-32 relative z-10"
      >
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "backOut" }}
          className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-pink-400 to-pink-600 text-center mb-20"
        >
          My Technical Arsenal
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          <AnimatePresence>
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -80 : 80,
                  rotateY: 90,
                }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                transition={{
                  delay: index * 0.15 + 0.3,
                  type: "spring",
                  damping: 15,
                  stiffness: 100,
                }}
                whileHover={{
                  y: -15,
                  scale: 1.05,
                  boxShadow: `0 25px 50px -12px ${skill.color}60`,
                  borderColor: skill.color,
                }}
                className="bg-gray-800/60 backdrop-blur-lg p-8 rounded-2xl border-2 border-gray-700 transition-all duration-300 relative overflow-hidden group"
              >
                <ShapeBackground shape={skill.shape} color={skill.color} />

                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at center, ${skill.color}, transparent 70%)`,
                  }}
                />

                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <motion.span
                    className="text-3xl"
                    animate={{
                      rotateY: [0, 360],
                      scale: [1, 1.3, 1],
                    }}
                    transition={{
                      delay: index * 0.2,
                      repeat: Infinity,
                      repeatDelay: 5,
                      duration: 2,
                    }}
                  >
                    {skill.icon}
                  </motion.span>
                  <h3 className="text-2xl font-bold text-white">
                    {skill.title}
                  </h3>
                  <motion.span
                    className="ml-auto text-2xl font-bold"
                    style={{ color: skill.color }}
                    whileHover={{ scale: 1.2 }}
                  >
                    {skill.level}%
                  </motion.span>
                </div>

                <div className="h-3 bg-gray-700/80 rounded-full mb-6 overflow-hidden relative">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{
                      delay: index * 0.15 + 0.5,
                      duration: 1.5,
                      type: "spring",
                      damping: 15,
                    }}
                    className="h-full rounded-full relative"
                    style={{ background: skill.color }}
                  >
                    <div className="absolute inset-0 bg-white/30 animate-shine" />
                  </motion.div>
                </div>

                <div className="flex flex-wrap gap-3 mt-6">
                  {skill.projects.map((project, i) => (
                    <motion.span
                      key={i}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: i * 0.1 + 0.7 }}
                      whileHover={{
                        scale: 1.15,
                        backgroundColor: skill.color,
                        color: "white",
                      }}
                      className="text-sm px-4 py-2 rounded-full bg-gray-700/60 text-gray-200 cursor-pointer font-medium"
                    >
                      {project}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Global style for shine animation */}
      <style jsx global>{`
        @keyframes shine {
          0% {
            transform: translateX(-100%) rotate(15deg);
          }
          100% {
            transform: translateX(100%) rotate(15deg);
          }
        }
        .animate-shine {
          animation: shine 2s infinite linear;
        }
      `}</style>
    </div>
  );
};

export default Projects;
