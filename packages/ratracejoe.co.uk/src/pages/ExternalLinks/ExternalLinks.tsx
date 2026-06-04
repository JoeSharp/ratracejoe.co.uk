import { type Props as ExternalLinkProps } from "./ExternalLinkCard";
import ExternalLinkContainer from "./ExternalLinksContainer";

const EXTERNAL_LINKS: ExternalLinkProps[] = [
  {
    name: "p5.js",
    url: "https://p5js.org/",
    description:
      "A lovely graphics library for the web, there is an online editor.",
  },
  {
    name: "Web3IsGoingGreat",
    url: "https://www.web3isgoinggreat.com/",
    description:
      "Molly White is a very articulate critic of Crypto, so...points for that.",
  },
];

const YOUTUBE_CHANNELS: ExternalLinkProps[] = [
  {
    name: "WebDevSimplified",
    url: "https://www.youtube.com/@WebDevSimplified",
    description: "Kyle does fantastic tutorials for all things web dev",
  },
  {
    name: "Modern Software Engineering",
    url: "https://www.youtube.com/@ModernSoftwareEngineeringYT",
    description:
      "Dave Farley has built a real team around practical developer advice.",
  },
  {
    name: "Mr Sunday Movies",
    url: "https://www.youtube.com/@mrsundaymovies",
    description:
      "A couple of sarcastic aussies review films, what's not to like",
  },
];

function ExternalLinks() {
  return (
    <div>
      <h1>External Links</h1>
      <p>
        Just a few of my favourite creators, or just really cool things I've
        found online.
      </p>
      <ExternalLinkContainer title="Websites" links={EXTERNAL_LINKS} />
      <ExternalLinkContainer
        title="YouTube Channels"
        links={YOUTUBE_CHANNELS}
      />
    </div>
  );
}

export default ExternalLinks;
