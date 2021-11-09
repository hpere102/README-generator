const inquirer = require('inquirer');
const fs = require('fs');
//const { writeFile, copyFile } = require('./utils/generate-site.js');
//const generatePage = require('./src/page-template.js');



const promptReadme = readmeInfo => {

inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
      validate: projectTitleInput => {
        if (projectTitleInput) {
          return true;
        } else {
          console.log('Please enter your project title!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description of the project.',
      validate: descripInput => {
        if (descripInput) {
          return true;
        } else {
          console.log('Please enter project description!');
          return false;
        }
      }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How can this project be installed?',
        validate: installInput => {
          if (installInput) {
            return true;
          } else {
            console.log('Please enter an installation process!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Provide information on project usage.',
        validate: usageInput => {
          if (usageInput) {
            return true;
          } else {
            console.log('Please enter usage information!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Who contributed to this project?',
        validate: contributeInput => {
          if (contributeInput) {
            return true;
          } else {
            console.log('Please enter project contributors!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Provide information on tests.',
        validate: testsInput => {
          if (testsInput) {
            return true;
          } else {
            console.log('Please enter information on tests!');
            return false;
          }
        }
      },
    {
      type: 'checkbox',
      name: 'badge',
      message: 'What did you build this project with? (Check all that apply)',
      choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
    },
    {
      type: 'input',
      name: 'username',
      message: 'Enter your Github username.',
      validate: githubInput => {
        if (githubInput) {
          return true;
        } else {
          console.log('Please enter your github username!');
          return false;
        }
      }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address.',
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log('Please enter a valid email address!');
            return false;
          }
        }
      },
  ])

  .then(answers => {
    const {title, description, installation, usage, contributing, tests, badge, username, email} = answers;
    const template=`# ${title}
        
## Description
${description}.
        
### Installation
${installation}.

### Usage
${usage}

### Contributing
${contributing}

### Tests
${tests}.

### Badge
${badge}

### Contact
[Github](https://www.github.com/${username})
[${email}](mailto:${email})
        
        
        `
    
       
fs.writeFile("README.md", template, err =>
  err ? console.log(err) : console.log('All Set!')
);
  
  
})
};



promptReadme();