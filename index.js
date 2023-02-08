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
        name: 'Title',
        type: 'input',
        message: 'What is the title of your repo?'
    },
    {
        name: 'Description',
        type: 'input',
        message: 'Provide a short description.'
    },
    {
        name: 'Installation',
        type: 'input',
        message: 'What are the steps required to install your project?'
    },
    {
        name: 'Usage',
        type: 'input',
        message: 'Provide instructions and examples for use.'
    },
    {
        name: 'Credits',
        type: 'input',
        message: 'List collaborators, third-party, tutorials'
    }
])
.then((response) => {
    const markdown = generateMarkdown(response)
    fs.writeFile('README.md', markdown, (err) => {
        err ? console.error(err) : console.log('README.md created successfully!');
    });
});



// console.log(pressToContinue);
// console.log(questions)