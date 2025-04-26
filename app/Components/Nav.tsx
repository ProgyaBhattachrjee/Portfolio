"use client";
import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="nav">
      <h1 className="logo">Progya.</h1>
      <p className="nav-links">
        <Link className="link" href="/">
          Home
        </Link>
        <Link className="link" href="/About">
          About Me
        </Link>
        <Link className="link" href="/Skill">
          Skill
        </Link>
        <Link className="link" href="/Projects">
          Projects
        </Link>
        <Link className="link" href="/Designs">
          Designs
        </Link>
      </p>

      {/* Inline CSS */}
      <style jsx>{`
        .nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: linear-gradient(135deg, #faf0e6, white);
          padding: 20px;
          color: black;
        }

        .logo {
          font-size: 32px;
          font-weight: 700;
        }

        .nav-links {
          display: flex;
          gap: 20px;
        }

        .link {
          color: white; /* Set the default color to white */
          font-size: 18px;
          text-decoration: none;
          transition: 0.3s;
        }

        .link:hover {
          color: #6a49f2; /* Hover color */
        }

        .profile-image-container {
          display: none;
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .nav {
            flex-direction: column;
            align-items: flex-start;
          }

          .profile-image-container {
            display: block;
            margin-top: 20px;
          }

          .profile-image {
            border-radius: 8px;
            object-fit: cover;
            width: 100%;
            height: auto;
          }
        }
      `}</style>
    </nav>
  );
};

export default Nav;
