const navItems = [
  {
    id: 1,
    range: "01.",
    item: "About",
    link: "#about",
  },
  {
    id: 2,
    range: "02.",
    item: "Experience",
    link: "#experience",
  },
  {
    id: 3,
    range: "03.",
    item: "Work",
    link: "#work",
  },
  {
    id: 4,
    range: "04.",
    item: "Contact",
    link: "#contact",
  },
];

const ExperienceListe = [
  {
    id: 1,
    Enterprise: "SOGEL AFRIK",
    position: "Dévellopeur FullStack",
    date: "AVRIL 2023 - maintenant",
    works: [
      {
        id: 1,
        description:
          "Concevoir des interfaces de qualité pour les applications avec Next.js",
      },
      {
        id: 2,
        description:
          "Concevoir des API pour le backend des applications avec Node.js / Express",
      },
      {
        id: 3,
        description:
          "Concevoir les bases de données comme MySQL pour les applications",
      },
    ],
    link: "#",
  },
];

const FlagshipProject = [
  {
    id: 1,
    imageLink: "./projectPreview/1.jpg",
    type: "Projet Vedette",
    name: "Pierre Papier Ciseaux",
    description:
      "Le mythique jeu de pierre-papier-ciseaux reconstitué dans une expérience hors du commun. Affrontez l'ordinateur et faites votre meilleur score.",
    language: ["HTML5", "CSS3", "JAVASCRIPTE"],
    liveLink: "https://henoceli3.github.io/rock-paper-scissors-master/",
    reposisterieLink: "https://github.com/henoceli3/rock-paper-scissors-master",
  },
  {
    id: 2,
    imageLink: "./projectPreview/2.jpg",
    type: "Projet Vedette",
    name: "Countries Rest App",
    description:
      "Un site web qui référence tous les pays ainsi que diverses informations sur ces derniers. Les données sont fournies par l'API Rest Countries. Je vous invite à jeter un coup d'œil pour réviser la géographie.",
    language: ["HTML5", "CSS3", "JAVASCRIPTE", "React", "Rest Countrie Api"],
    liveLink: "https://henoceli3.github.io/rest-countries-api/",
    reposisterieLink: "https://github.com/henoceli3/rest-countries-api",
  },
  {
    id: 3,
    imageLink: "./projectPreview/3.jpg",
    type: "Projet Vedette",
    name: "Sneakers",
    description:
      "Une copie de ce qui pourrait être une page Produit d'un site e-commerce.",
    language: ["HTML5", "CSS3", "JAVASCRIPTE"],
    liveLink: "https://henoceli3.github.io/ecommerce-product-page-main/",
    reposisterieLink:
      "https://github.com/henoceli3/ecommerce-product-page-main",
  },
];

const OtherWorksList = [
  {
    id: 1,
    externalLink: "https://henoceli3.github.io/results-summary-component-main/",
    githubLink: "https://github.com/henoceli3/results-summary-component-main",
    title: "Summary Components Main",
    description: "Une petite carte qui présente des statistiques.",
    langagues: ["REACT", "HTML5", "CSS3"],
  },
  {
    id: 2,
    externalLink:
      "https://henoceli3.github.io/ok-intro-section-with-dropdown-navigation-main/",
    githubLink:
      "https://github.com/henoceli3/ok-intro-section-with-dropdown-navigation-main",
    title: "Main Page",
    description: "Une page principale avec un design sobre et futuriste.",
    langagues: ["HTML5", "CSS3", "JAVASCRIPTE"],
  },
  {
    id: 3,
    externalLink: "",
    githubLink: "https://github.com/henoceli3/node-4kBoutik",
    title: "4Kboutique",
    description: "API d'une boutique en ligne.",
    langagues: ["NODE.JS", "EXPRESSE", "JAVASCRIPTE"],
  },
  {
    id: 4,
    externalLink: "",
    githubLink: "https://github.com/henoceli3/node-pokemon-api",
    title: "Pokemon Api",
    description: "API sur le thème des Pokémon.",
    langagues: ["NODE.JS", "EXPRESSE", "JAVASCRIPTE"],
  },
];
let OtheProjectLength = OtherWorksList.length;

export { navItems, ExperienceListe, FlagshipProject, OtherWorksList, OtheProjectLength };
