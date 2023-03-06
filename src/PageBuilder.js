const fs = require ('fs');
const inquirer = require("inquirer");
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require ("../lib/Intern");
const HtmlQuestions = require('./HtmlQuestions')

const PageBuilder = (managers, interns, engineers) => {

  
       let engineerHtml = "";
        engineers.forEach(engineer => {

            engineerHtml +=  `<div class="card" style="width: 18rem;">
        <div class="card-body">
        <h2>ENGINEER</h2>
          <h2 class="card-title">Name:${engineer.name}</h2>
          <p class="card-text"></p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Email:<a href='mailto:${engineer.email}'>${engineer.email}</a></li>
          <li class="list-group-item">ID:${engineer.id}</li>
          <li class="list-group-item">GitHub:<a href='https://github.com/${engineer.Github}'>${engineer.Github}</a></li>
        </ul>
      </div>`;
    })


    
    let internHtml = "";
        interns.forEach(intern => {

            internHtml += `<div class="card" style="width: 18rem;">
      
        <div class="card-body">
        <h2>INTERN</h2>
          <h2 class="card-title">Name:${intern.name}</h2>
          <p class="card-text"></p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Email:<a href='mailto:${intern.email}'>${intern.email}</a></li>
          <li class="list-group-item">ID:${intern.id}</li>
          <li class="list-group-item">School:${intern.school}</li>
        </ul>
      </div>`;
    })

    let managerHtml = "";
    managers.forEach(manager => {

        managerHtml += `<div class="card" style="width: 18rem;">
  
    <div class="card-body">
    <h2>MANAGER</h2>
      <h2 class="card-title">Name:${manager.name}</h2>
      <p class="card-text"></p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Email:<a href='mailto:${manager.email}'>${manager.email}</a></li>
      <li class="list-group-item">ID:${manager.id}</li>
      <li class="list-group-item">Ofiice Number:${manager.officeNumber}</li>
    </ul>
  </div>`;
})


html = 
` <!DOCTYPE html>
<html lang="en">
  <head>
    <title>MY TEAM</title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" 
    rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="style.css"/>
  </head>
<body>
<header>
   <div class="title">MY TEAM</div>
</header>

<main>
 
${managerHtml}
${engineerHtml}
${internHtml}
  
</main>
</body>
</html>`



fs.writeFileSync("./dist/index.html", html, "utf8");

console.log('\x1b[35mmPage Built');
 }
 
module.exports = PageBuilder;

