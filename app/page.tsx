"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import my from "../public/images/My1.jpg";

const Page = () => {
  const [currentTitle, setCurrentTitle] = useState("Web Developer");
  const titles = ["Web Developer", "UI/UX Designer", "Tech Lover"];

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setCurrentTitle(titles[index]);
      index = (index + 1) % titles.length;
    }, 2000);

    return () => clearInterval(interval);
  }, [titles]);

  return (
    <div className="home">
      <div className="left-section"></div>
      <div className="center-image">
        <div className="image-background">
          <Image
            src={my}
            width={300}
            height={450}
            alt="My Photo"
            className="profile-image"
          />
        </div>
      </div>
      <div className="right-section">
        <div className="text-content">
          <h2 className="sub-heading">I am a</h2>
          <h1 className="main-heading">{currentTitle}</h1>
          <p className="description">
            Passionate about building beautiful and functional websites.
          </p>

          <div className="buttons">
            <a
              href="https://drive.google.com/file/d/1RNl1oD_evvQXtkVtkLVafKpmLHAyi9Di/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="resume-btn">Resume</button>
            </a>
          </div>
        </div>
      </div>
      <style jsx>{`
        .home {
          display: flex;
          height: 100vh;
          position: relative;
          font-family: "Poppins", sans-serif;
          flex-wrap: wrap;
        }

        .left-section {
          flex: 1;
          background: black;
          min-height: 100vh;
        }

        .right-section {
          flex: 1;
          background: #f9f9fc;
          padding: 60px 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .center-image {
          position: absolute;
          top: 50%;
          left: 40%;
          transform: translate(-50%, -50%);
          z-index: 10;
        }

        .image-background {
          background: linear-gradient(135deg, #6a49f2, black);
          padding: 12px;
          border-radius: 12px;
          box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.4);
        }

        .profile-image {
          border-radius: 8px;
          object-fit: cover;
          width: 100%;
          height: auto;
        }

        .text-content {
          text-align: left;
          max-width: 500px;
        }

        .sub-heading {
          font-size: 50px;
          color: #d3d3d3;
          margin-bottom: 10px;
        }

        .description {
          font-size: 16px;
          color: #777;
          margin-bottom: 40px;
        }

        .buttons {
          margin-top: 20px;
        }

        .resume-btn {
          padding: 12px 30px;
          background: #6a49f2;
          color: white;
          border: none;
          border-radius: 30px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: 0.3s;
        }

        .resume-btn:hover {
          background: #9b66e7;
        }

        /* -------- Mobile Responsive Fix --------- */
        @media (max-width: 768px) {
          .home {
            flex-direction: column;
            height: auto;
            padding: 0;
          }

          .left-section,
          .right-section {
            width: 100%;
            flex: none;
          }

          .left-section {
            min-height: 0;
          }

          .right-section {
            padding: 40px 20px;
            height: auto;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
          }

          .center-image {
            position: relative;
            top: 100px;
            left: auto;
            transform: none;
            margin-top: -60px;
          }

          .text-content {
            text-align: center;
          }

          .sub-heading {
            font-size: 36px;
          }

          .main-heading {
            font-size: 42px;
          }

          .resume-btn {
            width: 100%;
          }
        }

        .main-heading {
          font-size: 60px;
          color: #111;
          margin-bottom: 20px;
          opacity: 0;
          transform: translateY(50px);
          animation: slideIn 1.5s ease-out forwards;
        }

        @keyframes slideIn {
          0% {
            opacity: 0;
            transform: translateY(50px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Page;
