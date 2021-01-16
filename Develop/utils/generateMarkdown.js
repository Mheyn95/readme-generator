// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (answers) => {
  if (!answers.license) {
    renderLicenseLink(answers);
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = (answers) => {
  if (!answers.license) {
    renderLicenseSection(answers);
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = (answers) => {
  if (!answers.license) {
    return "";
  }
  return `
  ## License

  [![License: ${answers.license}](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
  # ${answers.title}

  ## Description
  
  ${answers.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Test](#test)
  * [Questions](#questions)
  * [License](#license)
  * [Credits](#credits)

  ## Installation

  ${answers.installationInstructions}

  ## Usage

  ${answers.usage}

  ## Test

  ${answers.test}
  
  ## Questions

  * GitHub - [${answers.githubLink}](${answers.githubLink})
  * Email - [${answers.name}](mailto:${answers.email})

  ${renderLicenseSection}

  
  ### Credits
  
  ${answers.name}
  
`;
}

module.exports = generateMarkdown;
