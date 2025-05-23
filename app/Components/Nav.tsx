"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

interface NavLink {
  name: string;
  path: string;
}

const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links: NavLink[] = [
    { name: "Home", path: "/" },
    { name: "About Me", path: "/About" },
    { name: "Skills", path: "/Skill" },
    { name: "Projects", path: "/Projects" },
    { name: "Designs", path: "/Designs" },
  ];

  const socialLinks = [
    {
      icon: <FiGithub size={20} />,
      url: "https://github.com/ProgyaBhattachrjee",
      label: "GitHub",
    },
    {
      icon: <FiLinkedin size={20} />,
      url: "https://www.linkedin.com/in/progya-bhattacharjee-427149298",
      label: "LinkedIn",
    },
    {
      icon: <FiMail size={20} />,
      url: "mailto:progya56@gmail.com",
      label: "Email",
    },
  ];

  const mobileSocialLinks = [
    {
      icon: <FiGithub size={24} />,
      url: "https://github.com/ProgyaBhattachrjee",
      label: "GitHub",
    },
    {
      icon: <FiLinkedin size={24} />,
      url: "https://www.linkedin.com/in/progya-bhattacharjee-427149298",
      label: "LinkedIn",
    },
  ];

  return (
    <>
      <motion.nav
        className={`fixed w-full z-50 transition-colors duration-300 ${
          scrolled ? "bg-black/80 backdrop-blur" : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/" className="flex items-center">
                <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                  Progya<span className="text-white">.</span>
                </span>
              </Link>
            </motion.div>
            <div className="hidden md:flex items-center gap-8">
              {links.map((link, index) => (
                <motion.div
                  key={link.path}
                  onHoverStart={() => setHoveredLink(index)}
                  onHoverEnd={() => setHoveredLink(null)}
                  className="relative cursor-pointer"
                >
                  <Link
                    href={link.path}
                    className={`relative z-10 px-2 py-1 text-lg font-medium transition-colors ${
                      hoveredLink === index ? "text-white" : "text-gray-300"
                    }`}
                  >
                    {link.name}
                  </Link>
                  <AnimatePresence>
                    {hoveredLink === index && (
                      <motion.span
                        layoutId="navHover"
                        className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-lg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      />
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
              <div className="flex gap-4 ml-6">
                {socialLinks.map(({ icon, url, label }, idx) => (
                  <motion.a
                    key={idx}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-gray-300 hover:text-white"
                  >
                    {icon}
                  </motion.a>
                ))}
              </div>
            </div>
            <motion.button
              className="md:hidden text-white z-50"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 pt-24 px-6 bg-black/60 backdrop-blur-md"
          >
            <div className="flex flex-col items-center gap-8">
              {links.map((link) => (
                <motion.div
                  key={link.path}
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -30, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <Link
                    href={link.path}
                    className="text-3xl font-medium text-white hover:text-purple-400 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <div className="flex gap-6 mt-12">
                {mobileSocialLinks.map(({ icon, url, label }, index) => (
                  <motion.a
                    key={index}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    transition={{ delay: 0.1 * index, type: "spring" }}
                    className="text-white hover:text-purple-400"
                  >
                    {icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;
