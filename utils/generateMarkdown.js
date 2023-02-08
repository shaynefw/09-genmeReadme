// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    switch (license) {
        case 'MIT':
            return '[![MIT](https://img.shields.io/badge/license-MIT-blue.svg)]';
        case 'GNU':
            return '[![GNU](https://img.shields.io/badge/license-GNU-green.svg)]';
        case 'Apache':
            return '[![GPL](https://img.shields.io/badge/license-Apache-yellow.svg)]';
        default:
            return '';
    };
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    switch (license) {
        case 'MIT':
            return 'https://opensource.org/licenses/MIT';
        case 'GNU':
            return 'https://opensource.org/licenses/GPL-3.0';
        case 'Apache':
            return 'https://opensource.org/licenses/Apache-2.0';
        default:
            return '';
    };
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    const badge = renderLicenseBadge(license);
    const link = renderLicenseLink(license);

    // Check if either badge or link is missing, if missing return an empty string otherwise display following string.
    return !badge || !link ? '' : `## License 

This project is licensed under the ${license} license. You can find more information by clicking the following badge: ${badge}(${link}).`;
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.repoName}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Contact](#questions)

## Installation

- [Project repo](https://github.com/${data.githubUsername}/${data.repoName})
- [Project deployed link](https://${data.githubUsername}.github.io/${data.repoName}/)

Additional steps: ${data.installation}

## Usage

${data.usage}

![screenShot](assets/images/${data.usageImage})

## Credits

${data.credits}

${renderLicenseSection(data.license)}

## Badges

![HTML](https://img.shields.io/badge/HTML-${data.htmlPercent}%25-orange)
![CSS](https://img.shields.io/badge/CSS-${data.cssPercent}%25-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-${data.jsPercent}%25-yellow)

## Features

${data.features}

## How to Contribute

${data.contribute}

## Tests

${data.tests}

## Questions

If you have any questions you can reach me by email at ${data.email}.
`;
}
// export the generateMarkdown function as a module that can be used in the index.
module.exports = generateMarkdown;