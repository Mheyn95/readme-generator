// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (answers) => {
  if (!answers.license) {
    renderLicenseLink(answers);
  }
  answers.licenseBadge = `![License: ${answers.license}](https://img.shields.io/badge/License-${answers.license}-yellow.svg)`;
  return answers.licenseBadge;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = (answers) => {
  if (!answers.license) {
    renderLicenseSection(answers);
  }
  switch (answers.license) {
    case "GPL":
      answers.licenseLink = "https://www.gnu.org/licenses/gpl-3.0";
      break;
    case "Apache":
      answers.licenseLink = "https://opensource.org/licenses/Apache-2.0";
      break;
    case "MsPL":
      answers.licenseLink = "https://opensource.org/licenses/MS-PL";
      break;
    case "BSD":
      answers.licenseLink = "https://opensource.org/licenses/BSD-3-Clause";
      break;
    case "CDDL":
      answers.licenseLink = "https://opensource.org/licenses/cddl1.txt";
      break;
    case "EPL":
      answers.licenseLink = "https://opensource.org/licenses/EPL-1.0";
      break;
    case "MIT":
      answers.licenseLink = "https://opensource.org/licenses/MIT";
      break;
  }
  return `
  [${renderLicenseBadge(answers)}](${answers.licenseLink})`;
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = (answers) => {
  if (!answers.license) {
    return "";
  }
  return ` ## License
   
  Please click the license at the top of the file to see a description and the terms and conditions of the license this application is using.
  `;
};

const renderLicenseContent = (answers) => {
  if (!answers.license) {
    return "";
  }
  return `
  * [License](#License)`;
};

// TODO: Create a function to generate markdown for README
const generateMarkdown = (answers) => {
  return `
  # ${answers.title}

  ${renderLicenseLink(answers)}

  ## Description
  
  ${answers.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Test](#test)
  * [Questions](#questions)
  ${renderLicenseContent(answers)}
  * [Contributing](#Contributing)

  ## Installation

  ${answers.installationInstructions}

  ## Usage

  ${answers.usage}

  ## Test

  ${answers.test}
  
  ## Questions

  * GitHub - [${answers.githubLink}](${answers.githubLink})
  * Email Me - [${answers.email}](mailto:${answers.email})  
  


  ${renderLicenseSection(answers)}

  ## Contributing
  
  ${answers.name}


  
`;
};

module.exports = generateMarkdown;
