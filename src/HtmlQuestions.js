const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const questions = require("./questions")
const inquirer = require ("inquirer");
const  buildTeam = require ("../src/PageBuilder");


// array to store answers
const managers = [];
const interns = [];
const engineers = [];


//intern questions
const doInternQuestions = () => {
    inquirer 
    .prompt (questions.doInternQuestions)
    .then((response) =>{

        const intern = new Intern(response.name, response.email, response.id, response.school)

        interns.push(intern);

        ListQuestions();
    })
}

//engineer questions
const doEngineerQuestions = () => {
    inquirer 
    .prompt (questions.doEngineerQuestions)
    .then((response) =>{

        const engineer = new Engineer(response.name, response.email, response.id, response.Github)

        engineers.push(engineer);

        ListQuestions();
    })
}

//manager questions
const doManagerQuestions = () => {
    inquirer
    .prompt (questions.doManagerQuestions)
    .then((response) =>{

        const manager = new Manager(response.name, response.email, response.id, response.officeNumber)

        managers.push(manager);

        ListQuestions();
    })
};






// questions asked before questions are given for each imdiviual selection 

const ListQuestions = () => {


    inquirer
    .prompt (questions.mainMenuQuestions)

    
    .then((response) =>{ 
        console.log(response)
        switch (response.mainMenu) {

        case "Add a Manager":
        doManagerQuestions ()
        break;

        case "Add a Engineer":
        doEngineerQuestions()
        break;

        case "Add a Intern":
        doInternQuestions()
        break;

        case "create Team":
        buildTeam (managers, interns, engineers);
        break;

        default:
        console.log("defult")
        break;
    } 

    })
};
module.exports={ListQuestions}