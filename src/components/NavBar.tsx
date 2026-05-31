import { Link } from "react-router";
import PAGES from "../pages";

type Props = {
  navRef: React.RefObject<HTMLElement | null>;
  onClose: () => void;
};

function NavBar({ navRef, onClose }: Props) {
  return (
    <nav className="sidebar" ref={navRef}>
      <h2>Joe’s Site</h2>
      <ul>
        {PAGES.map(({ name, path }) => (
          <li>
            <Link to={path} onClick={onClose}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default NavBar;
