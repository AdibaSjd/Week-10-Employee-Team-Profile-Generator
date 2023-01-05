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
        <img class="card-img-top" src="..." alt="Card image cap">
        <div class="card-body">
          <h2 class="card-title">${engineer.name}</h2>
          <p class="card-text"></p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${engineer.email}</li>
          <li class="list-group-item">${engineer.id}</li>
          <li class="list-group-item">${engineer.Github}</li>
        </ul>
      </div>`;
    })


    
    let internHtml = "";
        interns.forEach(intern => {

            internHtml += `<div class="card" style="width: 18rem;">
        <img class="card-img-top" src="..." alt="Card image cap">
        <div class="card-body">
          <h2 class="card-title">${intern.name}</h2>
          <p class="card-text"></p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${intern.email}</li>
          <li class="list-group-item">${intern.id}</li>
          <li class="list-group-item">${intern.school}</li>
        </ul>
      </div>`;
    })

    let managerHtml = "";
    managers.forEach(manager => {

        managerHtml += `<div class="card" style="width: 18rem;">
    <img class="card-img-top" src="..." alt="Card image cap">
    <div class="card-body">
      <h2 class="card-title">${manager.name}</h2>
      <p class="card-text"></p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${manager.email}</li>
      <li class="list-group-item">${manager.id}</li>
      <li class="list-group-item">${manager.officeNumber}</li>
    </ul>
  </div>`;
})


html = 
` <!DOCTYPE html>
<html lang="en">
  <head>
    <title>Employee track</title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" 
    rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="style.css"/>
  </head>
<body>
<header>
   <div class="title"> Employee Track</div>
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

