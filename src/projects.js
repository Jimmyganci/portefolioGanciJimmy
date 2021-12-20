import project1 from "./assets/project1.png";
import project2 from "./assets/project2.png";
import project3 from "./assets/project3.png";
import project4 from "./assets/project4.png";
import project5 from "./assets/project5.png";

const projects = [
  {
    id: 1,
    title: "aganci",
    date: "Mars 2021",
    status: "Terminé",
    mastered: `Maitrise de l'informatique...`,
    difficulty: `Aucune maitrise des languages de programmation`,
    text: `Premier projet réalisé en html et css. Simple site vitrine
	 d'une architecte d'intérieur. Actuellement en refonte total..`,
    image: project1,
    techno: [
      { id: 1, language: "HTML", skill: 80 },
      { id: 2, language: "CSS", skill: 80 },
      { id: 3, language: "PHP", skill: 5 },
      { id: 4, language: "JS Vanilla", skill: 20 },
    ],
    link: "https://www.amandineganci.com/",
  },
  {
    id: 2,
    title: "ArchiMétal",
    date: "Mai 2021",
    status: "Terminé",
    mastered: `Notion en HTML, CSS et Javascript`,
    difficulty: `Maitriser animation scroll Javascript`,
    text: `Deuxième projet qui m'a permis de confirmer mes connaissances en html et css.
	 J'ai également pu en apprendre davantage sur Javascript Vanilla`,
    image: project2,
    techno: [
      { language: "HTML", skill: 80 },
      { language: "CSS", skill: 80 },
      { language: "PHP", skill: 5 },
      { language: "JS Vanilla", skill: 30 },
    ],
    link: "https://www.archi-metal.com/",
  },
  {
    id: 3,
    title: "The WILD Restaurant",
    date: "Sept 2021",
    status: "Terminé",
    mastered: `Maitrise du HTML, CSS et du javascript Vanilla`,
    difficulty: `Prendre en main le SCSS et le BEM`,
    text: `Premier projet à la Wild, site vitrine d'un restaurant. 
	Première utilisation de SASS et BEM, utilisation plus intensve de javascript vanilla`,
    image: project3,
    techno: [
      { language: "HTML", skill: 70 },
      { language: "SCSS", skill: 80 },
      { language: "JS Vanilla", skill: 40 },
    ],
    link: "https://louya64.github.io/The-Wild-restau/",
  },
  {
    id: 4,
    title: "World Wild Quiz",
    date: "Nov 2021",
    status: "A terminer",
    mastered: `Maitrise du HTML, CSS, javascript vanilla`,
    difficulty: `Prise en main REACT.js, NODE.js(session)`,
    text: `Deuxième projet à la Wild et premier projet en React.js et Node.js.
	Utilisation des sessions en avec express et de Redis Store`,
    image: project4,
    techno: [
      { language: "HTML", skill: 5 },
      { language: "CSS", skill: 30 },
      { language: "REACT.js", skill: 80 },
      { language: "NODE.js", skill: 40 },
    ],
    link: "https://jimmyganci.github.io/WorldWildQuiz/#/",
  },
  {
    id: 5,
    title: "Live Up",
    date: "Nov 2021",
    status: "A terminer",
    mastered: `Maitrise du HTML, CSS, javascript vanilla, React.js, NODE.js`,
    difficulty: `Projet réalisé pour un hackaton`,
    text: `Porjet réalisé lors d"un hackaton de 31h autour du thème de la musique.
	Certaines fonctionnalités sont à terminer ou modifier concernant l'authentification et la création de compte.`,
    image: project5,
    techno: [
      { language: "HTML", skill: 5 },
      { language: "CSS", skill: 30 },
      { language: "REACT.js", skill: 71 },
      { language: "NODE.js", skill: 45 },
    ],
    link: "https://aurelienbrethes.github.io/Liveup/#/",
  },
];
export default projects;
