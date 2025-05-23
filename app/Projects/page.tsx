"use client";
import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  FiGithub,
  FiExternalLink,
  FiStar,
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";

import i1 from "../../public/images/homestore.png";
import i2 from "../../public/images/github.png";
import i3 from "../../public/images/agro.png";
import i4 from "../../public/images/smart.png";
import i5 from "../../public/images/wd.png";
import i6 from "../../public/images/t.png";
import i7 from "../../public/images/sm.png";

const projects = [
  {
    id: 8,
    title: "HomeStore",
    description:
      "E-commerce app with React, Redux, Node.js/Express and MongoDB.",
    websiteUrl: "https://cerulean-rugelach-2a9670.netlify.app/",
    imageUrl: i1,
    githubUrl: "https://github.com/ProgyaBhattachrjee/HomeStore",
    tags: ["React", "Redux", "Node.js", "MongoDB"],
    featured: true,
  },
  {
    id: 4,
    title: "Agrobrain",
    imageUrl: i3,
    description:
      "Smart agriculture platform with data analytics and crop planning support.",
    githubUrl: "https://github.com/ProgyaBhattachrjee/Agrobrain",
    websiteUrl: "https://agro-brain-27up.vercel.app/",
    tags: ["Next.js", "Data Analytics", "AI"],
    featured: true,
  },
  {
    id: 1,
    title: "SmartHire",
    imageUrl: i4,
    description: "Python/Flask & SQL-Powered Hiring Optimization Tool",
    githubUrl: "https://github.com/ProgyaBhattachrjee/SmartHire",
    tags: ["Python", "Flask", "SQL"],
    featured: false,
  },
  {
    id: 2,
    title: "Stock-Market-Prediction",
    description:
      "Stock Market Predictor using machine learning models in Python.",
    imageUrl: i7,
    githubUrl: "https://github.com/ProgyaBhattachrjee/Stock-Market-prediction",
    tags: ["Python", "Machine Learning", "Pandas"],
    featured: false,
  },
  {
    id: 3,
    title: "Weather-Dashboard",
    description: "React.js Weather Dashboard App using OpenWeatherMap API.",
    websiteUrl: "https://lucky-gecko-32c141.netlify.app/",
    imageUrl: i5,
    githubUrl: "https://github.com/ProgyaBhattachrjee/Weather-Dashboard",
    tags: ["React", "API", "Tailwind"],
    featured: true,
  },
  {
    id: 6,
    title: "Tweet Sentiment Analysis",
    description:
      "Streamlit web app that performs sentiment analysis on tweets using TextBlob.",
    imageUrl: i6,
    githubUrl: "https://github.com/ProgyaBhattachrjee/tweet-sentiment-analysis",
    tags: ["Python", "NLP", "Streamlit"],
    featured: false,
  },
  {
    id: 7,
    title: "GitHub User Search",
    imageUrl: i2,
    websiteUrl:
      "https://6664130a254c8ba0eac042bf--precious-queijadas-699149.netlify.app/dashboard",
    description:
      "React.js App to search GitHub users with language and star charts.",
    githubUrl: "https://github.com/ProgyaBhattachrjee/github-users-search",
    tags: ["React", "GitHub API", "Charts"],
    featured: true,
  },
];

const ProjectsPage = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll
    ? projects
    : projects.filter((p) => p.featured);

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
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 text-center mb-6"
        >
          My Projects
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-16"
        >
          Here are some of my featured projects. Each one represents unique
          challenges and creative solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-8"
          >
            <FiStar className="text-yellow-400 text-2xl animate-pulse" />
            <h2 className="text-3xl font-bold text-white">
              {showAll ? "All Projects" : "Featured Projects"}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.7,
                  ease: "easeOut",
                }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-gray-800/50 backdrop-blur-md rounded-xl overflow-hidden border border-gray-700 hover:border-purple-500 shadow-xl hover:shadow-purple-500/30 transition-all duration-300"
              >
                <motion.div
                  className="h-48 flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-500/10 to-pink-500/10"
                  whileHover={{ scale: 1.03 }}
                >
                  <img
                    src={project.imageUrl.src}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500"
                  />
                </motion.div>
                <div className="p-5">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <motion.span
                        key={i}
                        whileHover={{ scale: 1.1 }}
                        className="text-xs px-2 py-1 rounded bg-gray-700 text-gray-300"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                        title="View Code"
                      >
                        <FiGithub size={20} />
                      </a>
                    )}
                    {project.websiteUrl && (
                      <a
                        href={project.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                        title="Live Demo"
                      >
                        <FiExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="flex justify-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAll((prev) => !prev)}
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-500 hover:to-pink-500 transition-colors"
            >
              {showAll ? "Show Featured" : "See More Projects"}
              {showAll ? <FiChevronUp /> : <FiChevronDown />}
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProjectsPage;
