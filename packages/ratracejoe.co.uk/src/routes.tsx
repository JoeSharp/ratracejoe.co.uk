import type { RouteObject } from "react-router";
import Home from "./pages/Home";
import CodingProjects from "./pages/CodingProjects";
import Teaching from "./pages/Teaching";
import About from "./pages/About";
import AdventureEngine from "./pages/CodingProjects/AdventureEngine";
import CompSciMathsProject from "./pages/CodingProjects/CompSciMathsProject";
import OutreachLab from "./pages/CodingProjects/OutreachLab";
import SdqAnalysis from "./pages/CodingProjects/SdqAnalysis";
import GameOfLife from "./pages/CodingProjects/GameOfLife";
import SportsDay from "./pages/CodingProjects/SportsDay";
import App from "./App";
import GoBoard from "./pages/CodingProjects/GoGame";
import ExternalLinks from "./pages/ExternalLinks";
import DevDiary from "./pages/DevDiary";
import { WasmProvider } from "./context/WasmContext";

export type NAV_SECTION =
  | "Home"
  | "Blog"
  | "Coding Projects"
  | "Teaching"
  | "External Links"
  | "About";

export type NavHandle = {
  navSection: NAV_SECTION;
};

export const ROUTES: RouteObject[] = [
  {
    path: "/",
    element: (
      <WasmProvider>
        <App />
      </WasmProvider>
    ),
    children: [
      {
        index: true,
        element: <Home />,
        handle: { navSection: "Home" },
      },
      {
        path: "/dev-diary",
        element: <DevDiary />,
        handle: { navSection: "Dev Diary" },
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
            path: "game-of-life",
            element: <GameOfLife />,
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
        path: "/external-links",
        element: <ExternalLinks />,
        handle: { navSection: "External Links" },
      },
      {
        path: "/about",
        element: <About />,
        handle: { navSection: "About" },
      },
    ],
  },
];
