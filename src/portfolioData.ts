import regulImg from "./assets/img/regulImg.jpg";
import pokeflowImg from "./assets/img/pokeflow.jpg";
import trucoImg from "./assets/img/truco-main.png";
import colorBrainImg from "./assets/img/colorBrain.jpg";

export interface Project {
  name: string;
  kind: string;
  href: string;
  cta: string;
  img: string;
  description: string;
  tags: string[];
  live?: boolean;
}

export const projects: Project[] = [
  {
    name: "Cambio Regul S.A.",
    kind: "Client work",
    href: "https://cambioregulsa.com",
    cta: "Visit",
    img: regulImg,
    description:
      "A currency-exchange site with an interactive contact form, an admin dashboard and Firebase-backed real-time data for reliable, up-to-the-minute rates.",
    tags: ["React", "Firebase", "SASS"],
    live: true,
  },
  {
    name: "PokeFlow",
    kind: "Game",
    href: "https://playpokeflow.com/",
    cta: "Play",
    img: pokeflowImg,
    description:
      "A free Pokémon type-chart puzzle game: arrange your team so every Pokémon is super effective against its neighbor. Daily puzzles, training modes and a global leaderboard.",
    tags: ["Puzzle game", "Daily puzzle", "Leaderboard"],
    live: true,
  },
  {
    name: "Truco Score",
    kind: "Side project",
    href: "https://truco.ndehorta.com",
    cta: "Visit",
    img: trucoImg,
    description:
      "A mobile-friendly Truco score tracker that remembers your game between sessions and keeps the card rankings a tap away — for daily players and beginners alike.",
    tags: ["TypeScript", "React", "PWA"],
    live: true,
  },
  {
    name: "Color BrAIn",
    kind: "AI product",
    href: "https://color-brain.netlify.app",
    cta: "Visit",
    img: colorBrainImg,
    description:
      "An AI palette generator: an LLM + LangChain turn any concept or mood into a coherent, ready-to-use color scheme for designers and developers.",
    tags: ["LLM", "LangChain", "React"],
    live: true,
  },
];
