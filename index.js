const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util')
const writeFileAsync = util.promisify(fs.writeFile)



const promptUser = () => {
    return inquirer.prompt([

        {
        type: 'input',
        name: 'title',
        message: "What's the name of your app?",
        },
        {
        type: 'input',
        name: 'description',
        message: "Enter a description of your app",
        },
        {
        type: 'input',
        name: 'url',
        message: "What's the app URL?",
        },
        {
        type: 'input',
        name: 'tech',
        message: "What technologies did you use to build your app?",
        },
        {
        type: 'input',
        name: 'install',
        message: "List installation instructions",
        },
        {
        type: 'input',
        name: 'usage',
        message: "Usage information:",
        },
        {
        type: 'input',
        name: 'license',
        message: "License type:",
        },
        {
        type: 'input',
        name: 'contributing',
        message: "List contribution guidelines:",
        },
        {
        type: 'input',
        name: 'tests',
        message: "List test instructions:",
        },
        {
        type: 'input',
        name: 'yourName',
        message: "Your name:",
        },
        {
        type: 'input',
        name: 'yourEmail',
        message: "Email address:",
        },
        {
        type: 'input',
        name: 'yourEmail',
        message: "Email address:",
        },
        {
        type: 'input',
        name: 'github',
        message: "Github username:",
        },
    ]);
};

const generateMd = (answers) => 
` 
# ${answers.title}

### Project Description: ${answers.description}

## Table of Contents
1. [Technologies Used](#technologies-used)
2. [Installation and Requirements](#installation-and-requirements)
 - [Prerequisites](#prerequisites)
 - [How to Install](#installation-instructions)
3. [Usage](#usage)
4. [Contributions](#contributions)
5. [Test Instructions](#test-instructions)
6. [License](#license)
7. [Questions and Contact](#questions-and-contact)

## Technologies Used
${answers.tech}

## Installation and Requirements
### Prerequisites
${answers.prereq}

### Installation Instructions
${answers.install}

## Usage
${answers.usage}

## Contributions
This project is not open to outside contributions at this time.
${answers.contributing}

## Test Instructions
${answers.tests}

## License
Distributed under the ${answers.license} License. See top of page for more information.

## Questions and Contact
If you have questions regarding this project, contact ${answers.yourName} at ${answers.yourEmail}, or find me on [github](https://www.github.com/${answers.github}).
`;

const init = () => {
    promptUser()
        .then((answers) => writeFileAsync('readme.md', generateMd(answers)))
        .then(() => console.log("Success!"))
};

init();