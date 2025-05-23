"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import my from "../public/images/My1.jpg";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { FiArrowRight, FiDownload } from "react-icons/fi";

const Page = () => {
  const [currentTitle, setCurrentTitle] = useState(0);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [particlePositions, setParticlePositions] = useState<
    { x: number; y: number; scale: number; size: number }[]
  >([]);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const titles = [
    { text: "WEB DEVELOPER", color: "#FF4D4D" },
    { text: "UI/UX DESIGNER", color: "#9B66E7" },
    { text: "AI ENTHUSIAST", color: "#4DFF4D" },
  ];
  const particles = Array(30).fill(0);

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    if (windowSize.width === 0) return;
    const positions = particles.map(() => ({
      x: Math.random() * windowSize.width,
      y: Math.random() * windowSize.height,
      scale: Math.random() * 0.5 + 0.5,
      size: Math.random() * 15 + 5,
    }));
    setParticlePositions(positions);
  }, [windowSize]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen overflow-hidden relative" ref={containerRef}>
      {windowSize.width > 0 &&
        particlePositions.map(({ x, y, scale, size }, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/10 backdrop-blur-sm"
            initial={{ x, y, scale }}
            animate={{
              x: Math.random() * windowSize.width,
              y: Math.random() * windowSize.height,
              transition: {
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "reverse",
              },
            }}
            style={{ width: size, height: size }}
          />
        ))}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-purple-600/20 blur-[100px] opacity-70" />

      <div className="container mx-auto px-6 py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            className="relative"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-500 rounded-3xl rotate-6 blur-md opacity-70" />
            <div className="relative border-8 border-white/10 rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={my}
                width={500}
                height={700}
                alt="My Photo"
                className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            </div>
          </motion.div>
          <motion.div style={{ y }} className="space-y-8">
            <AnimatePresence mode="wait">
              <motion.h1
                key={currentTitle}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                className="text-6xl md:text-7xl font-extrabold bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(45deg, ${titles[currentTitle].color}, ${titles[currentTitle].color}80)`,
                }}
              >
                {titles[currentTitle].text}
              </motion.h1>
            </AnimatePresence>

            <p className="text-xl text-gray-300 max-w-lg">
              Crafting immersive digital experiences that blend cutting-edge
              technology with artistic vision. Your brand deserves more than
              just a website—it deserves an experience.
            </p>

            <div className="flex gap-4">
              <motion.a
                href="https://drive.google.com/file/d/1RNl1oD_evvQXtkVtkLVafKpmLHAyi9Di/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full text-white font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                <FiDownload /> DOWNLOAD CV
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white font-semibold hover:bg-white/20 transition-all"
              >
                SEE MY WORK <FiArrowRight />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-4">
        {["React", "Express", "Node.js", "Mongodb", "SQL", "JAVA"].map(
          (tech) => (
            <motion.div
              key={tech}
              className="px-4 py-2 bg-black/50 backdrop-blur-md rounded-full text-sm text-white border border-white/10"
              whileHover={{ y: -5 }}
            >
              {tech}
            </motion.div>
          )
        )}
      </div>
    </div>
  );
};

export default Page;
