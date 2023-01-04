const Manager = require ("../lib/Manager")

test("can set a officeNumber argument for the constructor",()=>{
    const officeNumber = 6
    const man=new Manager ("Adiba", "adibasjd@gmail.com",12,officeNumber)
    expect (man.officeNumber).toBe (officeNumber)
})

test("can get officeNumber argument for the constructor",()=>{
    const officeNumber = 6
    const man=new Manager ("Adiba", "adibasjd@gmail.com",12,officeNumber)
    expect (man.getOfficeNumber()).toBe (officeNumber)
})
