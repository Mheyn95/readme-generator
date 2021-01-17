// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "name",
    message: "What is your full name? (Required)",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter your name!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address? (Required)",
    validate: (emailInput) => {
      if (emailInput) {
        return true;
      } else {
        console.log("Please enter your email!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "githubLink",
    message: "Provide a link to your GitHub page (Required)",
    validate: (githubLinkInput) => {
      if (githubLinkInput) {
        return true;
      } else {
        console.log("Please enter your github link!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "title",
    message: "What is your project title? (Required)",
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log("Please enter your project title!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "description",
    message: "Enter a description of your project (Required)",
    validate: (descriptionInput) => {
      if (descriptionInput) {
        return true;
      } else {
        console.log("Please enter a description!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "installationInstructions",
    message: "Enter installation instructions (Required)",
    validate: (installationInstructionsInput) => {
      if (installationInstructionsInput) {
        return true;
      } else {
        console.log("Please enter installation instructions!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "usage",
    message: "Enter usage instructions (Required)",
    validate: (usageInput) => {
      if (usageInput) {
        return true;
      } else {
        console.log("Please enter usage instructions!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "test",
    message: "Enter test instructions (Required)",
    validate: (testInput) => {
      if (testInput) {
        return true;
      } else {
        console.log("Please enter test instructions!");
        return false;
      }
    },
  },
  {
    type: "confirm",
    name: "confirmLicense",
    message: "Would you like to enter a license for your project?",
    default: true,
  },
  {
    type: "list",
    name: "license",
    message: "Please enter a license",
    choices: ["GPL", "The Apache License", "MsPL", "BSD", "CDDL", "EPL", "MIT"],
    when: ({ confirmLicense }) => confirmLicense,
  },
];

// TODO: Create a function to write README file
function writeToFile(answers) {
  return new Promise((resolve, reject) => {
    fs.writeFile(`./README.md`, generateMarkdown(answers), (err) => {
      // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
      if (err) {
        reject(err);
        // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
        return;
      }

      // if everything went well, resolve the Promise and send the successful data to the `.then()` method
      resolve({
        ok: true,
        message: "File created!",
      });
    });
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      return writeToFile(answers);
    })
    .then((writeToFileResponse) => {
      console.log(writeToFileResponse.message);
    })
    .catch((err) => {
      console.log(err);
    });
}

// Function call to initialize app
init();
