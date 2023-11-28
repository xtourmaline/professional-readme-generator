// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input
const questions = [
    {
        name: "title",
        type: "input",
        message: "Enter title of project:"
    },
    {
        name: "description",
        type: "input",
        message: "Enter description of project:"
    },
    {
        name: "installation",
        type: "input",
        message: "Enter installation instructions:"
    },
    {
        name: "usage",
        type: "input",
        message: "Enter usage information:"
    },
    {
        name: "contribution",
        type: "input",
        message: "Enter contribution guidelines:"
    },
    {
        name: "test",
        type: "input",
        message: "Enter test instructions:"
    },
    {
        name: "license",
        type: "list",
        message: "Enter your project license:",
        choices: ["MIT", "GNU GPLv3", "MPL2.0", "None"]
    },
    {
        name: "username",
        type: "input",
        message: "Enter your GitHub username:"
    },
    {
        name: "email",
        type: "input",
        message: "Enter your email:"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => err ? console.log(err) : console.log('Success!'));
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(data => generateMarkdown("newREADME.md", data));
}

// Function call to initialize app
init();
    