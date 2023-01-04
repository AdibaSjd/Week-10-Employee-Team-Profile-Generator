const Engineer = require ("../lib/Engineer")

test("can set a github argument for the constructor",()=>{
    const Github = "Adibasjd"
    const eng=new Engineer ("Adiba","adibasjd@gmail.com",12,Github)
    expect (eng.Github).toBe (Github)
})

test("can get github argument for the constructor",()=>{
    const Github = "Adibasjd"
    const eng=new Engineer ("Adiba","adibasjd@gmail.com",12,Github)
    expect (eng.getGithub()).toBe (Github)
})




