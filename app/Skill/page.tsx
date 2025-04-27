"use client";
import React from "react";

const Projects = () => {
  const skills = [
    {
      percentage: 95,
      title: "Full-Stack Development",
      technologies: "React.js, Node.js, Express.js, MongoDB",
    },
    {
      percentage: 90,
      title: "Frontend Engineering",
      technologies: "TypeScript, Next.js, Tailwind CSS, HTML5/CSS",
    },
    {
      percentage: 85,
      title: "Backend Development",
      technologies: "Node.js, Express.js, REST APIs, MongoDB",
    },
    {
      percentage: 80,
      title: "Programming Languages",
      technologies: "JavaScript, Python, Java, SQL",
    },
    {
      percentage: 75,
      title: "Developer Tools",
      technologies: "Git/GitHub, VS Code, Postman, Figma",
    },
    {
      percentage: 70,
      title: "Soft Skills",
      technologies: "Team Leadership, Technical Communication, Problem Solving",
    },
  ];
  const codeSnippets = [
    "let a = 1;",
    "const b = 2;",
    "()=>{}",
    "<p>Hi</p>",
    "i++",
    "return x;",
    "console.log(x);",
    "if (ok){}",
    "map(x=>x*x);",
    "try{}catch(e){}",
    "import x from 'y';",
    "useState(0);",
    "SELECT 1;",
    "while(true){}",
    "x ? y : z;",
    "[...arr]",
    "const sum = a+b;",
    "`Hello ${x}`",
    "JSON.parse(data);",
    "fetch(url);",
  ];

  return (
    <div className="projects-page">
      <div className="code-background">
        {codeSnippets.map((snippet, index) => (
          <span
            key={index}
            className="code-snippet"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          >
            {snippet}
          </span>
        ))}
      </div>
      <div className="projects">
        <h4>Technical Expertise</h4>

        <div className="skills-container">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-header">
                <span className="percentage">{skill.percentage}%</span>
                <h5 className="skill-title">{skill.title}</h5>
              </div>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
              <p className="technologies">{skill.technologies}</p>
            </div>
          ))}
        </div>

        <div className="key-skills">
          <h5>Key Technical Proficiencies:</h5>
          <ul>
            <li>
              <strong>Frontend:</strong> React, Next.js, TypeScript, Responsive
              Design
            </li>
            <li>
              <strong>Backend:</strong> Node.js, API Development, Database
              Design
            </li>
            <li>
              <strong>DevOps:</strong> Version Control (Git)
            </li>
            <li>
              <strong>Problem Solving:</strong> Data Structures & Algorithms
            </li>
          </ul>
        </div>
      </div>

      {/* Inline CSS */}
      <style jsx>{`
        /* Floating Code Background */
        .code-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 0; /* behind everything */
          pointer-events: none; /* make sure background is not clickable */
        }

        .code-snippet {
          position: absolute;
          font-size: 34px;
          color: #a594f9;
          white-space: nowrap;
          animation: float 20s linear infinite;
        }

        @keyframes float {
          0% {
            transform: translateY(100vh) rotate(0deg);
          }
          100% {
            transform: translateY(-100vh) rotate(360deg);
          }
        }

        /* Main Page Styling */
        .projects-page {
          position: relative; /* IMPORTANT to contain absolute background */
          background: white;
          min-height: 100vh;
          padding: 50px 20px;
          color: black;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          overflow: hidden; /* prevent scrollbars from floating code */
        }

        /* Projects Card */
        .projects {
          max-width: 800px;
          width: 100%;
          background: white;
          padding: 40px;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          border: 1px solid #eaeaea;
          position: relative; /* ensures z-index works */
          z-index: 1; /* above background */
        }

        /* Headings */
        h4 {
          font-size: 36px;
          margin-bottom: 40px;
          font-weight: bold;
          text-align: center;
          color: #333;
        }

        /* Skills Section */
        .skills-container {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .skill-item {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .skill-header {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .percentage {
          font-size: 24px;
          font-weight: bold;
          color: #222;
          min-width: 60px;
        }

        .skill-title {
          font-size: 20px;
          font-weight: 600;
          color: #444;
          margin: 0;
        }

        /* Progress Bar */
        .progress-bar {
          height: 10px;
          background: #f0f0f0;
          border-radius: 5px;
          overflow: hidden;
          margin: 5px 0;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #4f6af7, #f5cb5c);
          border-radius: 5px;
        }

        .technologies {
          font-size: 16px;
          color: #666;
          margin: 0;
          padding-left: 75px;
        }

        /* Key Skills Section */
        .key-skills {
          margin-top: 40px;
          padding: 20px;
          background: #f9f9f9;
          border-radius: 8px;
        }

        .key-skills h5 {
          font-size: 20px;
          margin-bottom: 15px;
          color: #444;
        }

        .key-skills ul {
          padding-left: 20px;
        }

        .key-skills li {
          margin-bottom: 8px;
          line-height: 1.5;
          color: #555;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .projects {
            padding: 25px;
          }

          h4 {
            font-size: 28px;
            margin-bottom: 30px;
          }

          .percentage {
            font-size: 20px;
            min-width: 50px;
          }

          .skill-title {
            font-size: 18px;
          }

          .technologies {
            padding-left: 65px;
            font-size: 14px;
          }

          .key-skills {
            padding: 15px;
          }
        }
      `}</style>
    </div>
  );
};

export default Projects;
