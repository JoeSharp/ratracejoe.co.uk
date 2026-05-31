import { Link } from "react-router";
import PAGES from "../pages";

type Props = {
  navRef: React.RefObject<HTMLElement | null>;
};

function NavBar({ navRef }: Props) {
  return (
    <nav className="sidebar" ref={navRef}>
      <h2>Joe’s Site</h2>
      <ul>
        {PAGES.map(({ name, path }) => (
          <li>
            <Link to={path}>{name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default NavBar;
