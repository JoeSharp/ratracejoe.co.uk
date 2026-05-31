import React from "react";
import { Route, Routes } from "react-router";
import PageFooter from "./components/PageFooter";
import NavBar from "./components/NavBar";
import PAGES from "./pages";

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
        <main className="content">
          <Routes>
            {PAGES.map(({ path, component }) => (
              <Route path={path} element={component} />
            ))}
          </Routes>
        </main>
      </div>
      <PageFooter />
    </div>
  );
}

export default App;
