const fs = require ('fs');
const inquirer = require("inquirer");
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require ("../lib/Intern");
const HtmlQuestions = require('./HtmlQuestions')

const PageBuilder = (managers, interns, engineers) => {

    let html = fs.readFileSync("./template/index.html", "utf-8");
    if (html)
    {
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

html = html.replace('<!--MANAGER-->', managerHtml);
html = html.replace('<!--ENGINEER-->', engineerHtml);
html = html.replace('<!--INTERN-->', interHtml);

fs.readFileSync("./dist/index.html", html, "utf8");

console.log('\x1b[35mmPage Built');
 }
}
module.exports = PageBuilder;

