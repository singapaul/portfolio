import morseCode from "../../Assets/images/morseCode.png";
import brewdawg3 from "../../Assets/images/brewdawg3.png";
import jscalc from "../../Assets/images/JScalc.png";
import tetris from "../../Assets/images/tetris.png";
import tickets from "../../Assets/images/tickets.png";
import positivepup from "../../Assets/images/positivepup.png";
import pending from "../../Assets/images/pending2.png";

export const projectsData = [
  {
    id: 1,
    title: "Morse Code Translator",
    description:
      "A project built during a challenge during the _nology.io bootcamp to excercise understanding of objects and DOM manipulation. The Morse Code Translator was built in HTML5 and Javascript, it translates from English to morse code, and from morse code to English. The project was later expanded with unit testing implemented with Jest.",
    github: "https://github.com/singapaul/TDD-MorseCodeTranslator",
    site: "https://singapaul.github.io/TDD-MorseCodeTranslator/",
    image: morseCode,
    techStack: ["HTML5", "SASS", "Javascript", "Jest"],
  },

  {
    id: 2,
    title: "Brewdawg",
    description:
      "Brewdawg is a react based app which allows users to browse, search and filter beers produced by Brewdog. The project is powered with the Brewdog API. The functionality of the app was expanded using npm packages including ticker & MUI components.",
    github: "https://github.com/singapaul/brewdawg.",
    site: "https://singapaul.github.io/brewdawg/",
    image: brewdawg3,
    techStack: ["React", "SASS", "React Testing", "Figma", "APIs", "NPM"],
  },

  {
    id: 3,
    title: "Calculator",
    description:
      "A calculator built using HTML, SASS and Javascript. This project was my first introduction to implementing JS on a web app. E2E testing was added to the project and was facilitated with the use of Cypress.",
    github: "https://github.com/singapaul/javascript-calculatorm",
    site: "https://singapaul.github.io/javascript-calculator/",
    image: jscalc,
    techStack: ["HTML5", "SASS", "Javascript", "Cypress"],
  },

  {
    id: 4,
    title: "Tetris",
    description:
      "Javascript based version of Tetris, built in order to expand understanding of implementing JS based logic and advanced DOM manipulation techniques.",
    github: "https://github.com/singapaul/tetris-v2",
    site: "https://singapaul.github.io/tetris-v2/",
    image: tetris,
    techStack: ["HTML5", "SASS", "Javascript"],
  },

  {
    id: 5,
    title: "Ticket Tracker",
    description:
      "App developed to count tickets assigned to employees in a team. Filters and graphs were implemented to visualise data. Project required significant understanding of React based object rendering and state management. The design and layout was inspired by the title sequences of Saul Bass.",
    github: "https://github.com/singapaul/ticket-tracker",
    site: "https://singapaul.github.io/ticket-tracker/",
    image: tickets,
    techStack: ["React", "SASS", "Figma", "NPM"],
  },

  {
    id: 6,
    title: "The Positive Pup",
    description:
      "An ongoing client project I am working on as part of an 8 person team to develop and build a fully redesigned website for a Chippenham based dog training company. During this project I will gain experience in pair programming, agile methodology, writing user stories and product ownership.",
    github: "www.google.com",
    site: "www.google.com",
    image: positivepup,
    techStack: ["React", "SASS", "Agile"],
  },
  {
    id: 7,
    title: "Pending Java App",
    description: "TBC",
    github: "www.google.com",
    site: "www.google.com",
    image: pending,
    techStack: ["Java"],
  },
];
