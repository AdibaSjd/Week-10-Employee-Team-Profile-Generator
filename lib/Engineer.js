const Employee = require ("./Employee")
class Engineer extends Employee {
    constructor (name,email,id,Github) {
        super (name,email,id)
        this.Github=Github
    }
    getGithub(){
        return this.officeNumber
    }
    getRole (){
        return "Manager"
    }
}
