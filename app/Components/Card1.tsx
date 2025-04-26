import React from "react";
import { FaFigma, FaExternalLinkAlt } from "react-icons/fa";

interface Card1Props {
  id: number;
  title: string;
  description: string;
  designUrl: string;
  features?: string[];
  category?: string;
}

const Card1: React.FC<Card1Props> = ({
  title,
  description,
  designUrl,
  features = [],
  category = "UI/UX Design",
}) => {
  return (
    <div className="w-full h-full bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col group">
      {/* Header with category label */}
      <div className="px-5 pt-5 pb-2">
        <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-50 text-blue-600 rounded-full mb-2">
          {category}
        </span>
        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
      </div>

      {/* Description */}
      <div className="px-5 pb-4 flex-grow">
        <p className="text-gray-600 mb-4">{description}</p>

        {features.length > 0 && (
          <div className="features">
            <h4 className="text-sm font-semibold text-gray-700 mb-2">
              Key Features:
            </h4>
            <ul className="space-y-1">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-sm text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Footer with Figma link */}
      <div className="px-5 pb-5 pt-2 border-t border-gray-100">
        <a
          href={designUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors"
          aria-label={`View ${title} Figma design`}
        >
          <FaFigma className="mr-2" />
          View in Figma
          <FaExternalLinkAlt className="ml-1.5 text-xs" />
        </a>
      </div>
    </div>
  );
};

export default Card1;
