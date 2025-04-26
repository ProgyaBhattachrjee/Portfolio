import React from "react";
import { FaGithub, FaLink } from "react-icons/fa";
import Image from "next/image";

interface CardProps {
  id: number;
  imageUrl: string | any;
  title: string;
  description: string;
  technologies?: string[]; // Added technologies array
  githubUrl?: string;
  websiteUrl?: string;
}

const Card: React.FC<CardProps> = ({
  id,
  imageUrl,
  title,
  description,
  technologies = [],
  githubUrl,
  websiteUrl,
}) => {
  return (
    <div
      key={id}
      className="card group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 w-full sm:w-[500px] md:w-[350px] lg:w-[350px]"
    >
      <div className="card-image-container relative h-48 overflow-hidden">
        <Image
          src={imageUrl}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          alt={title}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={id < 3} // Only prioritize first few images
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="card-content p-6 bg-white">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>

        {technologies.length > 0 && (
          <div className="technologies mb-4 flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        <div className="project-links flex gap-4">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${title} on GitHub`}
              className="flex items-center gap-2 text-gray-700 hover:text-black transition-colors"
            >
              <FaGithub className="icon text-lg" />
              <span className="text-sm font-medium">Code</span>
            </a>
          )}
          {websiteUrl && (
            <a
              href={websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${title} website`}
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <FaLink className="icon text-lg" />
              <span className="text-sm font-medium">Live Demo</span>
            </a>
          )}
        </div>
      </div>

      {/* Optional: Add hover effect that shows more details */}
      <div className="absolute inset-0 bg-black/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6">
        <div className="text-white text-center">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="mb-4">{description}</p>
          <div className="flex justify-center gap-4">
            {githubUrl && (
              <a
                href={githubUrl}
                className="btn btn-ghost text-white hover:bg-white/20"
              >
                View Code
              </a>
            )}
            {websiteUrl && (
              <a
                href={websiteUrl}
                className="btn btn-primary bg-blue-600 hover:bg-blue-700 text-white"
              >
                Visit Site
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
