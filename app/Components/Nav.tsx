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
          background: linear-gradient(135deg, #c1d3fe, white);
          padding: 20px;
          color: black;
          z-index: 1000;
          position: relative;
        }

        .logo {
          font-size: 32px;
          font-weight: 700;
        }

        .nav-links {
          display: flex;
          gap: 20px;
        }

        /* Stronger selector for nav links */
        .nav-links :global(a.link) {
          color: #111;
          font-size: 18px;
          text-decoration: none;
          position: relative;
          display: inline-block;
          transition: all 0.4s ease;
          font-weight: 500;
        }

        .nav-links :global(a.link)::after {
          content: "";
          display: block;
          width: 0;
          height: 2px;
          background: #6a49f2;
          transition: width 0.3s;
          position: absolute;
          bottom: -5px;
          left: 0;
        }

        .nav-links :global(a.link:hover) {
          font-size: 20px;
          color: #6a49f2;
          transform: translateY(-3px);
        }

        .nav-links :global(a.link:hover)::after {
          width: 100%;
        }

        .profile-image-container {
          display: none;
        }

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
