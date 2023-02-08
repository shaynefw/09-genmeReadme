const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

inquirer.prompt([
    {
        name: 'key',
        type: 'press-to-continue',
        message: 'Press any key to continue...'
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
.then((response) => {
    const markdown = generateMarkdown(response)
    fs.writeFile('README.md', markdown, (err) => {
        err ? console.error(err) : console.log('README.md created successfully!');
    });
});



// console.log(pressToContinue);
// console.log(questions)