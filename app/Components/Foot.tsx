"use client";
import React from "react";
import { FaEnvelope, FaPhone, FaGithub } from "react-icons/fa6";

const Foot = () => {
  return (
    <footer>
      <div className="foot">
        <div className="foot1">
          <p className="f1">
            <FaEnvelope />
            Mail: <a href="mailto:progya56@gmail.com">progya56@gmail.com</a>
          </p>
          <p className="f1">
            <FaPhone />
            Phone no: <a href="tel:7602067515">7602067515</a>
          </p>
          <p className="f1">
            <FaGithub />
            Github:{" "}
            <a
              href="https://github.com/ProgyaBhattachrjee"
              target="_blank"
              rel="noopener noreferrer"
            >
              visit
            </a>
          </p>
        </div>
        <p>&copy; 2024 Progya. All rights reserved.</p>
      </div>

      {/* Inline CSS */}
      <style jsx>{`
        footer {
          background: linear-gradient(90deg, #c1d3fe, white);
          padding: 20px 0;
          color: black;
          text-align: center;
        }

        .foot {
          max-width: 1000px;
          margin: 0 auto;
          padding: 20px;
        }

        .foot1 {
          margin-bottom: 20px;
        }

        .f1 {
          font-size: 16px;
          color: black;
          margin: 10px 0;
        }

        .f1 a {
          color: black;
          text-decoration: none;
          transition: color 0.3s;
        }

        .f1 a:hover {
          color: #f8b400;
        }

        p {
          font-size: 14px;
          margin-top: 10px;
        }

        @media (max-width: 768px) {
          .foot {
            padding: 20px 10px;
          }

          .f1 {
            font-size: 14px;
          }
        }
      `}</style>
    </footer>
  );
};

export default Foot;
