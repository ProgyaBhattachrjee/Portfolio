"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const AboutPage = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  }, []);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

  const skills = [
    { name: "React", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "Express", level: 75 },
    { name: "UI/UX", level: 85 },
    { name: "Java", level: 85 },
    { name: "Python", level: 75 },
    { name: "SQL", level: 85 },
    { name: "MongoDB", level: 70 },
  ];

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 to-gray-950"
    >
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/5 backdrop-blur-sm"
            initial={{
              x: Math.random() * windowSize.width,
              y: Math.random() * windowSize.height,
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              x: Math.random() * windowSize.width,
              y: Math.random() * windowSize.height,
              transition: {
                duration: Math.random() * 15 + 10,
                repeat: Infinity,
                repeatType: "reverse",
              },
            }}
            style={{
              width: Math.random() * 15 + 5,
              height: Math.random() * 15 + 5,
            }}
          />
        ))}
      </div>
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-500 rounded-3xl rotate-6 blur-md opacity-70" />
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{
                duration: 1,
                ease: "backOut",
              }}
              className="relative border-8 border-white/10 rounded-3xl overflow-hidden shadow-2xl"
            >
              <img
                src="/images/My1.jpg"
                alt="Progya Bhattacharjee"
                className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            </motion.div>
          </div>
          <div className="space-y-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
            >
              About Me
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-300 leading-relaxed"
            >
              I'm{" "}
              <span className="text-white font-medium">
                Progya Bhattacharjee
              </span>
              , a passionate Computer Science Engineering student at KIIT
              University with a{" "}
              <span className="text-white font-medium">9.15 CGPA</span>. I
              specialize in building modern web applications with cutting-edge
              technologies.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-gray-300 leading-relaxed"
            >
              My expertise spans across{" "}
              <span className="text-white font-medium">
                full-stack development
              </span>{" "}
              with React.js, Next.js, Node.js, and MongoDB. I create intuitive,
              scalable applications with a strong focus on{" "}
              <span className="text-white font-medium">performance</span> and{" "}
              <span className="text-white font-medium">user experience</span>.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-white">My Skills</h3>
              <div className="space-y-3">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm text-gray-300 mb-1">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ delay: 1, duration: 1.5, type: "spring" }}
                        className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutPage;
