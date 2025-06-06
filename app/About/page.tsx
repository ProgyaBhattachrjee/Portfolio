"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const AboutPage = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const skills = [
    { name: "React.js", level: 90, color: "#61DAFB" },
    { name: "Next.js", level: 85, color: "#000000" },
    { name: "Node.js", level: 80, color: "#68A063" },
    { name: "Express", level: 75, color: "#000000" },
    { name: "UI/UX Design", level: 85, color: "#FF4081" },
    { name: "Java", level: 85, color: "#007396" },
    { name: "Python", level: 75, color: "#3776AB" },
    { name: "SQL", level: 85, color: "#F29111" },
    { name: "MongoDB", level: 70, color: "#47A248" },
  ];

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-gray-50"
    >
      <motion.div
        style={{ y: yBg }}
        className="absolute top-0 left-0 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-blue-50 to-purple-50 blur-[100px]"
      />
      <motion.div
        style={{ y: yBg }}
        className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-green-50 to-cyan-50 blur-[80px]"
      />
      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.8,
                ease: "backOut",
              }}
              className="relative rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src="/images/My1.jpg"
                alt="Progya Bhattacharjee"
                width={600}
                height={800}
                className="object-cover w-full h-auto"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </motion.div>
          </div>
          <div className="space-y-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-gray-900"
            >
              About Me
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="space-y-6 text-gray-700"
            >
              <p>
                I&apos;m{" "}
                <span className="font-semibold text-gray-900">
                  Progya Bhattacharjee
                </span>
                , a Computer Science Engineering student at KIIT University with
                a<span className="font-semibold text-gray-900"> 9.19 CGPA</span>
                .
              </p>

              <p>
                I specialize in building modern web applications with
                cutting-edge technologies, focusing on creating intuitive,
                scalable solutions with excellent user experiences.
              </p>

              <p>
                My expertise spans full-stack development including frontend,
                backend, and database design, with additional skills in UI/UX
                design.
              </p>
            </motion.div>

            {/* Skills section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-gray-900">Skills</h3>
              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{
                          delay: 1,
                          duration: 1.5,
                          type: "spring",
                        }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: skill.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
