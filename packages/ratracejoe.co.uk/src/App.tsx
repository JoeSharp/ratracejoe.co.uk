import React from "react";
import { Outlet } from "react-router";
import PageFooter from "./components/PageFooter";
import NavBar from "./components/NavBar";
import RatsNest from "./components/RatNest";

function App() {
  const navRef = React.useRef<HTMLDivElement>(null);
  const onClickNavToggle = () => {
    const sidebar = navRef.current;
    if (sidebar) {
      sidebar.classList.toggle("open");
    }
  };
  return (
    <div className="page">
      <button className="nav-toggle" onClick={onClickNavToggle}>
        ☰ Menu
      </button>
      <div className="layout">
        <NavBar navRef={navRef} onClose={onClickNavToggle} />
        <div className="content-wrapper">
          <RatsNest />
          <main className="content">
            <Outlet />
          </main>
        </div>
      </div>
      <PageFooter />
    </div>
  );
}

export default App;
