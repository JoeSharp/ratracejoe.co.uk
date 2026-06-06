import React from "react";
import { Link, useMatches } from "react-router";
import type { NAV_SECTION, NavHandle } from "../../routes";
import CodingProjectsNav from "./CodingProjectsNav";

type Props = {
  navRef: React.RefObject<HTMLElement | null>;
  onClose: () => void;
};

function NavBar({ navRef, onClose }: Props) {
  const matches = useMatches() as Array<{ handle?: NavHandle }>;
  const activeSections: NAV_SECTION[] = matches
    .map((m) => m.handle?.navSection as NAV_SECTION)
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
          <CodingProjectsNav
            onClose={onClose}
            collapsed={!activeSections.includes("Coding Projects")}
          />
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
