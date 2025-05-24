"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
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
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll
    ? projects
    : projects.filter((p) => p.featured);

  return (
    <div className="relative min-h-screen bg-gray-900">
      <div className="container mx-auto px-6 py-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
            My Projects
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Here are some of my featured projects. Each one represents unique
            challenges and creative solutions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-center gap-3 mb-12"
        >
          <FiStar className="text-yellow-400 text-2xl animate-pulse" />
          <h2 className="text-3xl font-bold text-white">
            {showAll ? "All Projects" : "Featured Projects"}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                delay: index * 0.15,
                duration: 0.7,
                ease: "backOut",
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
                boxShadow: "0 20px 25px -5px rgba(168, 85, 247, 0.2)",
              }}
              className="bg-gray-800/80 backdrop-blur-md rounded-xl overflow-hidden border border-gray-700 hover:border-purple-500 transition-all duration-300 relative"
            >
              <div className="h-48 overflow-hidden relative">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 rounded bg-gray-700 text-gray-300"
                    >
                      {tag}
                    </span>
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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex justify-center mt-16"
        >
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-500 hover:to-pink-500 transition-all"
          >
            {showAll ? (
              <>
                <FiChevronUp /> Show Featured
              </>
            ) : (
              <>
                <FiChevronDown /> See More Projects
              </>
            )}
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsPage;
