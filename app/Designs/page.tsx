"use client";
import React from "react";
import Card1 from "../Components/Card1";
import Image from "next/image";
import i1 from "../../public/images/f1.png";
import i2 from "../../public/images/f2.png";
import i3 from "../../public/images/f3.png";
import i4 from "../../public/images/f4.png";

const figmaProjects = [
  {
    id: 1,
    title: "AgroBarin App Design",
    description:
      "An intuitive web app to assist farmers in selling crops and purchasing agricultural products directly from vendors.",
    designUrl:
      "https://www.figma.com/design/HM3QFA7pKTLks6zgJJ7CXJ/Agrobrain?t=DTgKQYERSlwn4q83-0",
    features: [
      "Crop listing and marketplace",
      "Direct vendor purchasing",
      "Multilingual support",
      "User-friendly onboarding",
    ],
    category: "Web UI",
    image: i4,
  },
  {
    id: 2,
    title: "Idea Submission Portal - Deloitte Urban Mobility Hackathon",
    description:
      "A web platform for submitting, tracking, and optimizing ideas around urban mobility and route planning for smart cities.",
    designUrl:
      "https://www.figma.com/design/u5hN95PbqVL2OV1fEMis5m/Urban--Mobility-and-Route-Optimization?node-id=0-1&p=f&t=DTgKQYERSlwn4q83-0",
    features: [
      "Idea submission workflow",
      "Voting and feedback system",
      "Interactive route optimization",
      "Clean, professional dashboard UI",
    ],
    category: "Web UI",
    image: i3,
  },
  {
    id: 3,
    title: "CPC Society Website Design (Team Project)",
    description:
      "Official website design for the Competitive Programming Community, built collaboratively with a focus on events, contests, and learning resources.",
    designUrl:
      "https://www.figma.com/design/2NkNEwTmRRzO1WYW5yb62K/CPC-KIIT-CHP?t=GK64b0QSmwqWp4dd-0",
    features: [
      "Events and contests listing",
      "Team introductions",
      "Responsive multi-page layout",
      "Minimalist and clean aesthetics",
    ],
    category: "Web UI",
    image: i2,
  },
  {
    id: 4,
    title: "Movie Booking App Design",
    description:
      "A seamless mobile app experience for browsing, selecting, and booking movie tickets with seat selection.",
    designUrl:
      "https://www.figma.com/design/lDPseS03ERNuDnoBYFvVDh/Movie-Tickets?t=6hHeiO8K1jDg9DkD-0",
    features: [
      "Movie browsing and search",
      "Interactive seat selection",
      "Booking history tracking",
      "Dark and light theme support",
    ],
    category: "Mobile UI",
    image: i1,
  },
];

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            My Figma Designs
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Professional UI/UX designs and prototypes
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {figmaProjects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col rounded-lg shadow-lg overflow-hidden"
            >
              {/* Image Preview */}
              <div className="relative h-48 bg-gray-100">
                {project.image && (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                )}
              </div>

              {/* Card Content */}
              <Card1
                id={project.id}
                title={project.title}
                description={project.description}
                designUrl={project.designUrl}
                features={project.features}
                category={project.category}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
