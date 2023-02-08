// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    switch (license) {
        case 'MIT':
            return '[![MIT](https://img.shields.io/badge/license-MIT-blue.svg)]'
        case 'GNU':
            return '[![GNU](https://img.shields.io/badge/license-GNU-green.svg)]'
        case 'Apache':
            return '[![GPL](https://img.shields.io/badge/license-Apache-yellow.svg)]'
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
            return 'https://opensource.org/licenses/Apache-2.0'
    };
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    const badge = renderLicenseBadge(license);
    const link = renderLicenseLink(license);

    return !badge || !link ? '' : `## License 

This project is licensed under the ${license} license. You can find more information by clicking the following badge: [${badge}](${link}).`;
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.Title}

## Description

${data.Description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${data.Installation}

## Usage

${data.Usage}

## Credits

${data.Credits}

${renderLicenseSection()}
`;
}

module.exports = generateMarkdown;