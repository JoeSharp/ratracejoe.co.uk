import React from "react";
import { Outlet } from "react-router";
import PageFooter from "./components/PageFooter";
import NavBar from "./components/NavBar";
import init, { greet } from "@joe/wasm-hello";

function App() {
  const navRef = React.useRef<HTMLDivElement>(null);
  const onClickNavToggle = () => {
    const sidebar = navRef.current;
    if (sidebar) {
      sidebar.classList.toggle("open");
    }
  };
  React.useEffect(() => {
    init().then(() => {
      console.log(greet("Joe"));
    });
  }, []);
  return (
    <div className="page">
      <button className="nav-toggle" onClick={onClickNavToggle}>
        ☰ Menu
      </button>
      <div className="layout">
        <NavBar navRef={navRef} onClose={onClickNavToggle} />
        <main className="content">
          <Outlet />
        </main>
      </div>
      <PageFooter />
    </div>
  );
}

export default App;
