"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiFigma, FiExternalLink, FiLayers } from "react-icons/fi";
import Image from "next/image";
import i1 from "../../public/images/f1.png";
import i2 from "../../public/images/f2.png";
import i3 from "../../public/images/f3.png";
import i4 from "../../public/images/f4.png";

const figmaProjects = [
  {
    id: 1,
    title: "AgroBrain App Design",
    description: "Farm-to-vendor marketplace UI with multilingual support",
    designUrl: "https://www.figma.com/design/HM3QFA7pKTLks6zgJJ7CXJ/Agrobrain",
    features: ["Crop marketplace", "Vendor portal", "Multilingual UI"],
    category: "Web App",
    image: i4,
    accentColor: "#10B981",
  },
  {
    id: 2,
    title: "Deloitte Hackathon Portal",
    description: "Urban mobility idea submission platform for smart cities",
    designUrl:
      "https://www.figma.com/design/u5hN95PbqVL2OV1fEMis5m/Urban--Mobility",
    features: ["Idea workflow", "Voting system", "Route optimization"],
    category: "Web Dashboard",
    image: i3,
    accentColor: "#3B82F6",
  },
  {
    id: 3,
    title: "CPC Society Website",
    description: "Competitive programming community portal design",
    designUrl:
      "https://www.figma.com/design/2NkNEwTmRRzO1WYW5yb62K/CPC-KIIT-CHP",
    features: ["Event listings", "Team profiles", "Learning resources"],
    category: "Institutional Website",
    image: i2,
    accentColor: "#8B5CF6",
  },
  {
    id: 4,
    title: "Movie Booking App",
    description: "Seamless cinema ticket booking experience",
    designUrl:
      "https://www.figma.com/design/lDPseS03ERNuDnoBYFvVDh/Movie-Tickets",
    features: ["Seat selection", "Dark/light mode", "Booking history"],
    category: "Mobile App",
    image: i1,
    accentColor: "#EC4899",
  },
];

const ProjectsPage = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <motion.div
      ref={containerRef}
      style={{ y: yBg }}
      className="relative min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 px-6 py-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-white rounded-full shadow-lg"
        >
          <FiFigma className="text-2xl text-[#A259FF]" />
          <span className="text-lg font-medium">UI/UX Design Portfolio</span>
        </motion.div>
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
          Design Systems
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Professional UI/UX designs, prototypes, and design systems created in
          Figma
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {figmaProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -8, scale: 1.01 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <div className="relative h-60 overflow-hidden group">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div
                className="absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium text-white"
                style={{ backgroundColor: project.accentColor }}
              >
                {project.category}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-500 mb-2 flex items-center gap-1">
                  <FiLayers size={14} /> KEY FEATURES
                </h4>
                <ul className="space-y-1">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-emerald-500 mr-2">•</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={project.designUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-lg font-medium transition-colors text-white hover:opacity-90"
                style={{ backgroundColor: project.accentColor }}
              >
                <FiFigma /> View in Figma
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-28 text-center"
      >
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Like what you see?
        </h3>
        <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
          I'm available for UI/UX design projects and would love to discuss your
          ideas.
        </p>
        <a
          href="mailto:progya56@gmail.com"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white rounded-full text-lg font-medium transition-colors"
        >
          Let's Design Something Amazing
          <FiExternalLink />
        </a>
      </motion.div>
    </motion.div>
  );
};

export default ProjectsPage;
