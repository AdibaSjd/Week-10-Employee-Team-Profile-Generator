
const inquirer = require("inquirer");
const fs = require ("fs");
const PageBuilder = require ('./PageBuilder');
const { default: Choice } = require("inquirer/lib/objects/choice");
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");




const mainMenuQuestions = [{
    
      type: 'list',
      name: 'mainMenu',
      message: 'what would you like to do?',
      choices: ['Add a Manager', 'Add a Intern', 'Add a Engineer', 'create Team']
    }];


function divert(mainMenu) {
  if (mainMenu === 'Add a Manager') {
    return doManagerQuestions
  }
  if (mainMenu === 'Add a Intern') {
    return doInternQuestions
  }
  if (mainMenu === 'Add a Engineer') {
    return doEngineerQuestions
  }
  else (mainMenu === 'create Team')
  return 'create Team'
}
divert();



const doInternQuestions = [{
   type: 'input',
   name: 'name',
   message: 'What is your name?',
},{
  type: 'input',
  name: 'email',
  message: 'What is your email?'
},{
  type: 'input',
  name: 'id',
  message:'What is your id?'
},{
  type: 'input',
  name: 'school',
  message:'What is your school?'
}];

const doManagerQuestions = [{
  type: 'input',
  name: 'name',
  message: 'What is your name?',
},{
 type: 'input',
 name: 'email',
 message: 'What is your email?'
},{
 type: 'input',
 name: 'id',
 message:'What is your id?'
},{
 type: 'input',
 name: 'officeNumber',
 message:'What is your officeNumber?'
}];

const doEngineerQuestions = [{
  type: 'input',
  name: 'name',
  message: 'What is your name?',
},{
 type: 'input',
 name: 'email',
 message: 'What is your email?'
},{
 type: 'input',
 name: 'id',
 message:'What is your id?'
},{
 type: 'input',
 name: 'Github',
 message:'What is your Github?'
}];



function writeToFile(fileName, data) {
    fs.writeFile(fileName, PageBuilder (data), err => console.log(err))
  }
  
  function init() {
   inquirer.prompt (mainMenuQuestions).then(answer => {
      console.log(answer)
      writeToFile ("index.html", answer)
    })
  }
//init();

module.exports = {doEngineerQuestions,doInternQuestions,doManagerQuestions,mainMenuQuestions}