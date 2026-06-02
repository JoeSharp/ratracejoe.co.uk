import Home from "./Home";
import Blog from "./Blog";
import CodingProjects from "./CodingProjects";
import AdventureEngine from "./AdventureEngine";
import Teaching from "./Teaching";
import About from "./About";

export type Page = {
  component: React.ReactNode;
  path: string;
  name: string;
};

const PAGES: Page[] = [
  {
    component: <Home />,
    path: "/",
    name: "Home",
  },
  {
    component: <Blog />,
    path: "/blog",
    name: "Blog",
  },
  {
    component: <CodingProjects />,
    path: "/coding-projects",
    name: "Coding Projects",
  },
  {
    component: <Teaching />,
    path: "/teaching",
    name: "Teaching",
  },
  {
    component: <AdventureEngine />,
    path: "/adventure-engine",
    name: "Adventure Engine",
  },
  {
    component: <About />,
    path: "/about",
    name: "About",
  },
];

export default PAGES;
