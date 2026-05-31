import React from "react";
import { Route, Routes } from "react-router";
import PageHeader from "./components/PageHeader";
import PageFooter from "./components/PageFooter";
import NavBar from "./components/NavBar";
import CodingProjects from "./pages/CodingProjects";
import AdventureEngine from "./pages/AdventureEngine";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import About from "./pages/About";

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
        <NavBar navRef={navRef} />
        <main className="content">
          <PageHeader />
          <Routes>
            <Route path="/coding-projects" element={<CodingProjects />} />
            <Route path="/adventure-engine" element={<AdventureEngine />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </div>
      <PageFooter />
    </div>
  );
}

export default App;
