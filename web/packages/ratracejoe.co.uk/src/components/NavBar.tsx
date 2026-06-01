import { Link } from "react-router";
import { type Page } from "../pages";

type Props = {
  pages: Page[];
  navRef: React.RefObject<HTMLElement | null>;
  onClose: () => void;
};

function NavBar({ navRef, onClose, pages }: Props) {
  return (
    <nav className="sidebar" ref={navRef}>
      <h2>Joe&apos;s Site</h2>
      <ul>
        {pages.map(({ name, path }) => (
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
