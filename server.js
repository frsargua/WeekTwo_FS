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
    repoUrl: "https://frsargua.github.io/week10-HW/",
    imageUrl: "./Images/stayHaven.png",
    title: "StayHaven",
    description: "A booking, listing and search site for short stays.",
  },
  {
    repoUrl: "https://ramielsayed.github.io/film-go/",
    imageUrl: "./Images/film-Go.png",
    title: "Film-Go App",
    description: {
      description: "Films",
    },
  },
];
let smallProjects = [
  {
    repoUrl: "https://frsargua.github.io/week10-HW/",
    imageUrl: "./Images/teamprofile.png",
    title: "Team Profile Generator",
  },
  {
    repoUrl: "https://frsargua.github.io/WeekSix_FS/",
    imageUrl: "./Images/wheather-app.png",
    title: "Wheather App",
  },
  {
    repoUrl: "https://frsargua.github.io/WeekSix_FS/",
    imageUrl: "./Images/quizz-app.png",
    title: "Quizz App",
  },
  {
    repoUrl: "https://frsargua.github.io/WeekFive_FS/",
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
