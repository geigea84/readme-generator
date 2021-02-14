//enable use of file system module and inquirer package
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");

//require connection to generateMarkdown file
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "github",
        message: "Enter your GitHub username"
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email address"
    },
    {
        type: "input",
        name: "title",
        message: "What is the name of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Describe your project"
    },
    {
        type: "list",
        name: "license",
        message: "Which license should your project have?",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
        default: "None"
    },
    {
        type: "input",
        name: "installation",
        message: "What command should be run to install dependencies?",
        default: "npm i"
    },
    {
        type: "input",
        name: "test",
        message: "What command should be run to run tests?",
        default: "npm test"
    },
    {
        type: "input",
        name: "usage",
        message: "What does the user need to know about using the repo?"
    },
    {
        type: "input",
        name: "contributing",
        message: "What does the user need to know about contributing to the repo?"
    }
];

// function to write README file
function writeToFile(fileName, data) {
    //fs.writeFileSync() creates a new file if the specified file does not exist
    //path.join() method joins the specified path segments into one path
    //process.cwd() returns the current working directory
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
    //run inquirer and insert const questions array
    inquirer.prompt(questions)
    //asynchronous callback to return promise(pass in new parameter)
    .then((inquirerResponses) => {
        console.log("Generating README...");
        //call writeToFile function, insert arguments
        /* ... = rest operator, allows for an indefinite number of arguments, 
        also called functions of variable arity or variadic functions */
        writeToFile("README.md", generateMarkdown({...inquirerResponses}));
    });
}

// function call to initialize program
init();
