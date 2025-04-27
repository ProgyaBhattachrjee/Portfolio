"use client";
import React from "react";

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="background-animation"></div>
      <div className="about">
        <h4>About Me</h4>
        <p>
          I am Progya Bhattacharjee, a dedicated Computer Science Engineering
          student at KIIT University, currently maintaining a CGPA of 9.15. I
          have a strong technical foundation in programming languages like Java,
          JavaScript, Python, C and SQL. My development skills span both
          frontend and backend technologies including React.js, Next.js,
          Node.js, Express.js, MongoDB, Tailwind CSS, and Bootstrap. I am deeply
          passionate about building intuitive, scalable, and performance-driven
          web applications, with a keen focus on delivering seamless user
          experiences through clean code and thoughtful UI/UX design. I am also
          proficient in using tools like Git, GitHub, Postman, Figma, and have
          experience working with APIs and modern frameworks.
        </p>

        <p>
          I am someone who combines technical expertise with creativity,
          effective communication, and a strong work ethic. I am always eager to
          learn, adapt quickly to new challenges, and collaborate within diverse
          teams to drive impactful results. I take pride in writing clean,
          maintainable code and designing interfaces that truly meet user needs.
          If you are looking for a motivated, detail-oriented, and growth-driven
          individual who can contribute both technically and creatively, I would
          be an excellent fit for your team. I am committed to continuous
          improvement and excited to take on opportunities that allow me to make
          a meaningful difference.
        </p>
      </div>

      {/* Inline CSS */}
      <style jsx>{`
        .about-page {
          background: white;
          min-height: 100vh;
          padding: 50px 20px;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .about {
          max-width: 800px;
          background: white;
          padding: 40px;
          border-radius: 16px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
          backdrop-filter: blur(10px);
        }

        h4 {
          font-size: 36px;
          margin-bottom: 20px;
          font-weight: bold;
          color: black;
        }

        p {
          font-size: 18px;
          line-height: 1.7;
          margin-bottom: 20px;
          color: black;
        }
        .background-animation {
          position: absolute;
          width: 500px;
          height: 500px;
          background: linear-gradient(45deg, #cdc1ff, #c1d3fe);
          border-radius: 50%;
          filter: blur(100px);
          animation: move 3s ease-in-out infinite alternate;
          z-index: 0;
        }

        @keyframes move {
          0% {
            transform: translate(-50%, -50%) scale(1);
          }
          100% {
            transform: translate(50%, 50%) scale(1.2);
          }
        }

        @media (max-width: 768px) {
          .about {
            padding: 20px;
          }

          h4 {
            font-size: 28px;
          }

          p {
            font-size: 16px;
          }
        }
      `}</style>
    </div>
  );
};

export default AboutPage;
