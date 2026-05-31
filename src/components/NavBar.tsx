type Props = {
  navRef: React.RefObject<HTMLElement | null>;
};

function NavBar({ navRef }: Props) {
  return (
    <nav className="sidebar" ref={navRef}>
      <h2>Joe’s Site</h2>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/blog">Blog</a>
        </li>
        <li>
          <a href="/coding-projects">Coding Projects</a>
        </li>
        <li>
          <a href="/adventure-engine">Adventure Engine</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>
    </nav>
  );
}
export default NavBar;
