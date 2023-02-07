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
    }
])
.then((response) => {
    fs.writeFile('log.txt', JSON.stringify(response), (err) => {
        err ? console.error(err) : console.log('File created!');
    });
});



// console.log(pressToContinue);
// console.log(questions)