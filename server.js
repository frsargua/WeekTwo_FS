const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");
const helpers = require("./utils/helpers");

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({ helpers });

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

let largeProjects = [
  {
    repoUrl: "https://github.com/frsargua/STAYHAVEN-APP",
    deployed: "https://radiant-bayou-46133.herokuapp.com",
    imageUrl: "./Images/stayHaven.png",
    title: "StayHaven",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "BootStrap",
      "Express.js",
      "RESTFUL-APIs",
    ],
    description:
      "A booking, listing and search site for short stays which requires the user to sign in/up to access the functionalities.",
  },
  {
    repoUrl: "https://github.com/RamiElsayed/film-go",
    deployed: "https://ramielsayed.github.io/film-go/",
    imageUrl: "./Images/film-Go.png",
    title: "Film-Go App",
    description:
      "A movie search website to bookmark, search by genre and name, any movies supported by IMDB-API library",
  },
];
let smallProjects = [
  {
    repoUrl: "https://frsargua.github.io/week10-HW/",
    imageUrl: "./Images/teamprofile.png",
    title: "Team Profile Generator",
    description:
      "A terminal app to create a html page containing the members of a team and their positions ",
  },
  {
    repoUrl: "https://github.com/frsargua/WeekSix_FS",
    deployed: "https://frsargua.github.io/WeekSix_FS/",
    imageUrl: "./Images/wheather-app.png",
    title: "Weather App",
    description:
      "The app allows the user to search for the weather forecast for a given location and saves it to the local storage.",
  },
  {
    repoUrl: "https://github.com/frsargua/WeekFourHW_FS",
    deployed: "https://frsargua.github.io/WeekFourHW_FS/",
    imageUrl: "./Images/quizz-app.png",
    title: "Quiz App",
    description: "A short quiz app",
  },
  {
    repoUrl: "https://github.com/frsargua/WeekFive_FS",
    deployed: "https://frsargua.github.io/WeekFive_FS/",
    imageUrl: "./Images/Scheduler-app.png",
    title: "Scheduler App",
  },
];
app.use("/", (req, res) => {
  res.render("all", { smallProjects, largeProjects });
});

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
