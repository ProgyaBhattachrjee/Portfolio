"use client";
import React from "react";
import Card from "../Components/Card";
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
  },
  {
    id: 4,
    title: "Agrobrain",
    imageUrl: i3,
    description:
      "Smart agriculture platform with data analytics and crop planning support.",
    githubUrl: "https://github.com/ProgyaBhattachrjee/Agrobrain",
  },
  {
    id: 1,
    title: "SmartHire",
    imageUrl: i4,
    description: "Python/Flask & SQL-Powered Hiring Optimization Tool",
    githubUrl: "https://github.com/ProgyaBhattachrjee/SmartHire",
  },
  {
    id: 2,
    title: "Stock-Market-Prediction",
    description:
      "Stock Market Predictor using machine learning models in Python.",
    imageUrl: i7,
    githubUrl: "https://github.com/ProgyaBhattachrjee/Stock-Market-prediction",
  },
  {
    id: 3,
    title: "Weather-Dashboard",
    description: "React.js Weather Dashboard App using OpenWeatherMap API.",
    websiteUrl: "https://lucky-gecko-32c141.netlify.app/",
    imageUrl: i5,
    githubUrl: "https://github.com/ProgyaBhattachrjee/Weather-Dashboard",
  },
  {
    id: 6,
    title: "tweet-sentiment-analysis",
    description:
      "This is a simple and interactive Streamlit web application that performs sentiment analysis on tweets using TextBlob.",
    imageUrl: i6,
    githubUrl: "https://github.com/ProgyaBhattachrjee/tweet-sentiment-analysis",
  },
  {
    id: 7,
    title: "github-users-search",
    imageUrl: i2,
    websiteUrl:
      "https://6664130a254c8ba0eac042bf--precious-queijadas-699149.netlify.app/dashboard",
    description:
      "React.js App to search GitHub users with language and star charts.",
    githubUrl: "https://github.com/ProgyaBhattachrjee/github-users-search",
  },
];

const ProjectsPage = () => {
  return (
    <div className="projects-container px-6 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">My Projects</h1>
      <div className="grid grid-cols-1 ml-30 md:grid-cols-3 gap-6 ml-10">
        {projects.map((project, index) => (
          <Card key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
