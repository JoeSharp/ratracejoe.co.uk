import { type ZookimonType } from "./types";

const cards: ZookimonType[] = [
  {
    name: "Hermit Crab",
    foregroundImage: "./zookimon/animals/hermit-crab.png",
    backgroundImage: "./zookimon/backgrounds/sandy-beach.png",
    attacks: [
      {
        name: "Nip",
        power: 3,
      },
    ],
  },
  {
    name: "Greater Flamingo",
    foregroundImage: "./zookimon/animals/greater-flamingo.png",
    backgroundImage: "./zookimon/backgrounds/wetlands.png",
    attacks: [
      {
        name: "Flying Peck",
        power: 10,
      },
    ],
  },
  {
    name: "Linnes Two-Toed Sloth",
    foregroundImage: "./zookimon/animals/linnes-two-toed-sloth.png",
    backgroundImage: "./zookimon/backgrounds/jungle.jpeg",
    attacks: [
      {
        name: "Agressive Scratch",
        power: 8,
      },
    ],
  },
];

export default cards;
