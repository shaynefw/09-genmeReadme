// Import the 'fs' module for reading and writing to the file system
const fs = require('fs');
// Import the 'inquirer' module for creating command line prompts
const inquirer = require('inquirer');
// Import the generateMarkdown function from the generateMarkdown.js file
const generateMarkdown = require('./utils/generateMarkdown');

// Prompt the user for the various elements needed to generate the README
inquirer.prompt([
    {
        // name of the key to be stored in the response object
        name: 'key',
        // type of input to be prompted for (press-to-continue)
        type: 'press-to-continue',
        // message to be displayed for the prompt
        message: 'Welcome to genMEreadMe Press any key to continue...'
    },
    {
        name: 'repoName',
        type: 'input',
        message: 'What is the exact name of your repo?'
    },
    {
        name: 'description',
        type: 'input',
        message: 'Provide a short description:'
    },
    {
        name: 'githubUsername',
        type: 'input',
        message: 'What is your case sensitive github username? (not email):'
    },
    {
        name: 'installation',
        type: 'input',
        message: 'What are the steps required to install your project?'
    },
    {
        name: 'usage',
        type: 'input',
        message: 'Provide instructions and examples for use:'
    },
    {
        name: 'usageImage',
        type: 'input',
        message: 'What is the full file name of the screenshot in images folder? (i.e image-01.png)'
    },
    {
        name: 'credits',
        type: 'input',
        message: 'List collaborators, third-party, tutorials:'
    },
    {
        name: 'license',
        type: 'list',
        message: 'Please choose a license...',
        choices: [
            'MIT',
            'Apache',
            'GPL',
        ]
    },
    {
        name: 'htmlPercent',
        type: 'input',
        message: '% of html? (if none enter 0):'
    },
    {
        name: 'cssPercent',
        type: 'input',
        message: '% of CSS? (if none enter 0):'
    },
    {
        name: 'jsPercent',
        type: 'input',
        message: '% of JavaScript? (if none enter 0):'
    },
    {
        name: 'features',
        type: 'input',
        message: 'What features does your project have?'
    },
    {
        name: 'contribute',
        type: 'input',
        message: 'Explain how other devs can contribute. (if no contribution needed leave blank):'
    },
    {
        name: 'tests',
        type: 'input',
        message: 'Explain how users can run tests. (if none leave blank):'
    },
    {
        name: 'email',
        type: 'input',
        message: 'What is your email address for people to contact you?'
    },
])
// Handle the response from inquirer prompts
.then((response) => {
    // Create markdown using the generateMarkdown function
    const markdown = generateMarkdown(response)
    // Write the markdown to a file named README.md
    fs.writeFile('README.md', markdown, (err) => {
        // If there is an error, log the error message
        err ? console.error(err) : console.log('README.md created successfully!');
    });
});
