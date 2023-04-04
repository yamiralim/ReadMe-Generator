// !======================================|
// ! packages needed for this application |
// !======================================|

const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// !==============================|
// ! signifies program is running |
// !==============================|
console.log('Professional README Generator started...');

// !===================================|
// ! array of questions for user input |
// !===================================|

const questions = [
  {
    type: "input",
    name: "creator",
    message: "Creator's Name:"
  },
  {
    type: "input",
    name: "email",
    message: "Email Address:"
  },
  {
    type: "input",
    name: "linkedin",
    message: "Linkedin Username:"
  },
  {
    type: "input",
    name: "github",
    message: "GitHub Username:"
  },
  {
    type: "input",
    name: "repository",
    message: "Repository Name:"
  },
  {
    type: "input",
    name: "title",
    message: "Project Title:"
  },
  {
    type: "input",
    name: "description",
    message: "Project Description:"
  },
  {
    type: "input",
    name: "collaborators",
    message: "Collaborators (if any):",
  },
  {
    type: "input",
    name: "resources",
    message: "Resources (separate by comma):"
  },
  {
    type: "checkbox",
    name: "sections",
    message: "Select Section(s):",
    choices: [
      new inquirer.Separator(' = Pick Section(s) = '),
      {name: 'Installation'},
      {name: 'Screenshot'},
      {name: 'Toolset'},
      {name: 'License'},
    ]
  },
  {
    type: "input",
    name: "installation",
    message: "Installation Commands (separate by comma):",
    when: (data) => (data.sections.indexOf("Installation") >= 0)
  },
  {
    type: "input",
    name: "screenshot",
    message: "Screenshot Filename:",
    when: (data) => (data.sections.indexOf("Screenshot") >= 0)
  },
  {
    type: "input",
    name: "toolset",
    message: "Enter tools used (separate by comma):",
    // default: "",
    when: (data) => (data.sections.indexOf("Toolset") >= 0)
  },
  {
    type: "list",
    name: "license",
    message: "License Type:",
    choices: [
      {
        name: "none",
        value: 0
      },
      {
        name: "General Public License",
        value: 1
      },
      {
        name: "Apache License",
        value: 2
      },
      {
        name: "Microsoft Public License",
        value: 3
      },
      {
        name: "Berkeley Software Distribution",
        value: 4
      },
      {
        name: "Common Development & Distribution License",
        value: 5
      },
      {
        name: "Eclipse Public License",
        value: 6
      },
      {
        name: "MIT License",
        value: 7
      },
      {
        name: "Mozilla Public License",
        value: 8
      },
      {
        name: "Other",
        value: 9
      }
    ],
    when: (data) => (data.sections.indexOf("License") >= 0)
  },
  {
    type: "input",
    name: "tests",
    message: "Tests (if any):"
  },
];

// !===============================|
// ! function to write README file |
// !===============================|

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err => {
    err ? console.log(err) : console.log("Created readme successfully");
  });
}

// !============================|
// ! function to initialize app |
// !============================|

function init() {
  inquirer.prompt(questions).then(answers => {
    writeToFile("README.md", generateMarkdown(answers));
  });
}
// !=================================|
// ! function call to initialize app |
// !=================================|

init();
