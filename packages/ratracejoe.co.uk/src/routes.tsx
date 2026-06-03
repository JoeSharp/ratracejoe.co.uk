import type { RouteObject } from "react-router";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import CodingProjects from "./pages/CodingProjects";
import Teaching from "./pages/Teaching";
import About from "./pages/About";
import AdventureEngine from "./pages/CodingProjects/AdventureEngine";
import CompSciMathsProject from "./pages/CodingProjects/CompSciMathsProject";
import OutreachLab from "./pages/CodingProjects/OutreachLab";
import SdqAnalysis from "./pages/CodingProjects/SdqAnalysis";
import SportsDay from "./pages/CodingProjects/SportsDay";
import App from "./App";
import GoBoard from "./pages/CodingProjects/GoBoard";

export type NavHandle = {
  navSection: string;
};

export const ROUTES: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
        handle: { navSection: "Home" },
      },
      {
        path: "/blog",
        element: <Blog />,
        handle: { navSection: "Blog" },
      },
      {
        path: "/coding-projects",
        handle: { navSection: "Coding Projects" },
        children: [
          {
            index: true,
            element: <CodingProjects />,
          },
          {
            path: "sdq",
            element: <SdqAnalysis />,
          },
          {
            path: "comp-sci-maths",
            element: <CompSciMathsProject />,
          },
          {
            path: "outreach-lab",
            element: <OutreachLab />,
          },
          {
            path: "sports-day",
            element: <SportsDay />,
          },
          {
            path: "adventure-engine",
            element: <AdventureEngine />,
          },
          {
            path: "go-board",
            element: <GoBoard />,
          },
        ],
      },
      {
        path: "/teaching",
        element: <Teaching />,
        handle: { navSection: "Teaching" },
      },
      {
        path: "/about",
        element: <About />,
        handle: { navSection: "About" },
      },
    ],
  },
];
