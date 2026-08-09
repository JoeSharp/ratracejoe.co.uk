import { Link } from "react-router";
import { type SubNavProps } from "./types";

const NO_OP = () => {};

function CodingProjectsNav({
  onClose = NO_OP,
  collapsed = false,
}: SubNavProps) {
  return (
    <nav>
      <ul className={`subnav ${collapsed && "collapsed"}`}>
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
          <Link to="/coding-projects/game-of-life" onClick={onClose}>
            Game of Life
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
        <li>
          <Link to="/coding-projects/lego-top-trumps" onClick={onClose}>
            Lego Top Trumps
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default CodingProjectsNav;
