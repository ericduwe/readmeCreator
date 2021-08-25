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
        name: 'repo',
        message: "What's the github repo title?",
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
        name: 'screenshot',
        message: "What's the filename of your screenshot:",
        },
        {
        type: 'input',
        name: 'altText',
        message: "Alt text for screenshot:",
        },
        {
        type: 'input',
        name: 'license',
        message: "License type:",
        },
        {
        type: 'input',
        name: 'licenseBadge',
        message: "Paste license badge URL:",
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
        name: 'username',
        message: "Github username:",
        },
    ]);
};

const generateMd = (answers) => 
` 
# ${answers.title}

### Project Description: ${answers.description}
### Project URL: [https://${answers.username}.github.io/${answers.repo}](https://${answers.username}.github.io/${answers.repo})
### License Badge: [![License: ${answers.license}](${answers.licenseBadge})]
## Table of Contents
1. [Technologies Used](#technologies-used)
2. [Installation and Requirements](#installation-and-requirements)
    1. [Prerequisites](#prerequisites)
    2. [How to Install](#installation-instructions)
3. [Usage](#usage)
4. [Contributions](#contributions)
5. [License](#license)
6. [Questions and Contact](#questions-and-contact)

## Technologies Used
${answers.tech}

## Installation and Requirements
### Prerequisites
${answers.prereq}

### Installation Instructions
${answers.install}

## Usage
![${answers.altText}](./assets/${answers.screenshot})

## Contributions
This project is not open to outside contributions at this time.
${answers.contributing}

## Test Instructions
${answers.tests}

## License
Distributed under the ${answers.license} License. See top of page for more information.

## Questions and Contact
If you have questions regarding this project, contact ${answers.yourName} at ${answers.yourEmail}, or find me on [github](https://www.github.com/${answers.username}).
`;

const init = () => {
    promptUser()
        .then((answers) => writeFileAsync('readme.md', generateMd(answers)))
        .then(() => console.log("Success!"))
};

init();