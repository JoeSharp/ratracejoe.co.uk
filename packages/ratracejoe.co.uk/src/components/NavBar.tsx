import React from "react";
import { Link, useMatches } from "react-router";
import type { NavHandle } from "../routes";

type Props = {
  navRef: React.RefObject<HTMLElement | null>;
  onClose: () => void;
};

function NavBar({ navRef, onClose }: Props) {
  const matches = useMatches() as Array<{ handle?: NavHandle }>;
  const activeSections = matches
    .map((m) => m.handle?.navSection)
    .filter(Boolean);

  return (
    <nav className="sidebar" ref={navRef}>
      <h2>Joe&apos;s Site</h2>
      <ul>
        <li>
          <Link to="/" onClick={onClose}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/dev-diary" onClick={onClose}>
            Dev Diary
          </Link>
        </li>
        <li>
          <Link to="/coding-projects" onClick={onClose}>
            Coding Projects
          </Link>
          <ul
            className={`subnav ${!activeSections.includes("Coding Projects") && "collapsed"}`}
          >
            <li>
              <Link to="/coding-projects/sdq" onClick={onClose}>
                SDQ
              </Link>
            </li>
            <li>
              <Link to="/coding-projects/outreach-lab" onClick={onClose}>
                Outreach Lab
              </Link>
            </li>
            <li>
              <Link to="/coding-projects/comp-sci-maths" onClick={onClose}>
                Comp Sci Maths
              </Link>
            </li>
            <li>
              <Link to="/coding-projects/adventure-engine" onClick={onClose}>
                Adventure Engine
              </Link>
            </li>
            <li>
              <Link to="/coding-projects/go-board" onClick={onClose}>
                Go Board Game
              </Link>
            </li>
            <li>
              <Link to="/coding-projects/sports-day" onClick={onClose}>
                Sports Day
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/teaching" onClick={onClose}>
            Teaching
          </Link>
        </li>
        <li>
          <Link to="/external-links" onClick={onClose}>
            External Links
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={onClose}>
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}
export default NavBar;
