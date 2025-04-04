import minesweeperImg from "./assets/img/minesweeperImg.gif";
import regulImg from "./assets/img/regulImg.jpg";
// import spaceTurtle from "./assets/img/spaceTurtle.gif";
//import eMercado from "./assets/img/eMercadoImg.png";
//import morseWebapp from "./assets/img/morseWebapp.jpeg";
// import pwdSaver from "./assets/img/passwordsaver.jpeg";
import trucoImg from "./assets/img/truco-main.png";
import trucoImg2 from "./assets/img/truco-rules.png";
import ColorBrainImg from "./assets/img/colorBrain.jpg";

import {
  faCss3,
  faHtml5,
  faJs,
  faPython,
  faReact,
  faSass,
} from "@fortawesome/free-brands-svg-icons";

const typescriptIcon: any = {
  prefix: "fac",
  iconName: "typescript",
  icon: [
    20,
    20,
    [],
    "",
    "M3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5c0-1.105-0.895-2-2-2H5C3.895,3,3,3.895,3,5z M13.666,12.451h-2.118	V19H9.841v-6.549H7.767V11h5.899V12.451z M13.998,18.626v-1.751c0,0,0.956,0.721,2.104,0.721c1.148,0,1.103-0.75,1.103-0.853	c0-1.089-3.251-1.089-3.251-3.501c0-3.281,4.737-1.986,4.737-1.986l-0.059,1.559c0,0-0.794-0.53-1.692-0.53	c-0.897,0-1.221,0.427-1.221,0.883c0,1.177,3.281,1.059,3.281,3.428C19,20.244,13.998,18.626,13.998,18.626z",
  ],
};

export const portfolioData = [
  {
    id: 1,
    name: "Cambio Regul S.A.",
    img: regulImg,
    description:
      "A sleek currency exchange website featuring a front page with an interactive contact form, an admin dashboard for seamless management, and Firebase-backed storage for reliable, real-time data synchronization.",
    deploy: "https://cambioregulsa.com",
    live: true,
    stack: [faJs, faSass, faReact],
  },
  {
    id: 0,
    name: "Truco Score",
    mobileImgs: [trucoImg, trucoImg2],
    description:
      "A mobile-friendly web app for tracking Truco scores, perfect for daily players as well as beginners and returning players. With localStorage-based functionality, it remembers your score between sessions, and includes helpful features like card rankings for quick reference.",
    deploy: "https://truco.ndehorta.com",
    repo: "https://github.com/NicolasDeHorta/truco-score",
    stack: [typescriptIcon, faReact],
  },
  {
    id: 6,
    name: "Color BrAIn",
    img: ColorBrainImg,
    description:
      "Powered by AI, LLaMa3 70b LLM along with LangChain, Color BrAIn is a specialized website that generates color palettes based on user-inputted concepts or ideas. It is perfect for designers and web developers, providing aesthetically pleasing and relevant color schemes tailored to your needs.",
    deploy: "https://color-brain.netlify.app",
    live: true,
    stack: [faJs, faSass, faReact],
  },
  {
    id: 0,
    name: "Minesweeper",
    img: minesweeperImg,
    description:
      "A cool Minesweeper game, created using Typescript, React and CSS, with the capability of changing the number of rows, columns or mines quantity",
    deploy: "https://nicolasdehorta.github.io/minesweeper/",
    repo: "https://github.com/NicolasDeHorta/minesweeper",
    stack: [typescriptIcon, faSass, faReact],
  },
  // {
  //   id: 2,
  //   name: "Space Turtle",
  //   img: spaceTurtle,
  //   description:
  //     "A game using Python-PyGame inspired in the good old Space-Invaders. Maybe not the hero we deserve... but the hero we have, a really, really slow one",
  //   repo: "https://github.com/NicolasDeHorta/turtle_invaders",
  //   stack: [faPython],
  // },
  //{
  //  id: 3,
  //  name: "eMercado",
  //  img: eMercado,
  //  description:
  //    "Mock eCommerce website created for JAP program using plain HTML, CSS, JS and jQuery. Fetching data from some endpoints given by the program, capability of uploading profile img and implementation of OAuth2.0",
  //  deploy: "https://nicolasdehorta.github.io/ecommerce-jap/index.html",
  //  repo: "https://github.com/NicolasDeHorta/ecommerce-jap",
  //  stack: [faJs, faHtml5, faCss3],
  //},
  //{
  //  id: 4,
  //  name: "Password Saver",
  //  img: pwdSaver,
  //  description:
  //    "Python and Tkinter offline password storage, with a simple UI you can store, query, edit (and random generate) your passwords really easy to use.",
  //  repo: "https://github.com/NicolasDeHorta/passwordsaver",
  //  stack: [faPython],
  //},
  //{
  //  id: 5,
  //  name: "Morse Webapp",
  //  img: morseWebapp,
  //  description:
  //    "Silly hacker themed, Python / Flask / Jinja2 based morse decoder, where you can translate text to morse or the other way around.",
  //  repo: "https://github.com/NicolasDeHorta/morse-webapp",
  //  stack: [faPython],
  //},
];
