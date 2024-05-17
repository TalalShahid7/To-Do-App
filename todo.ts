import inquirer from "inquirer";
let exe = true
let userData = new Array()
do {
    let userChoice = await inquirer.prompt([
        {
            type: "list",
            name: "choices",
            message: "What do you want ",
            choices: ['Add Task', 'Remove Task', 'Show Task','Quit']
        }
    ])
    if (userChoice.choices === 'Add Task') {
        let userInput = await inquirer.prompt([
            {
                type: "input",
                name: "tasks",
                message: "What task do you want to add"
            }
        ])
        userData.push(userInput.tasks)
    }

    else if (userChoice.choices === 'Show Task')
        {
            userData.forEach((n,i)=>
            {
                console.log(i+1,n)
                
            })
        }
        else if (userChoice.choices === 'Remove Task') {
         console.log(" Your Task :")
            userData.forEach((n,i)=>
                {
                    console.log(i+1,n)
                })
                let rem =await inquirer.prompt([
                    {
                        type:"input",
                        name:"removed",
                        message:"Which task do you want to remove.Enter the number :-"
                    }
                ])
                if(rem.removed>userData.length){
                    console.log("Wrong input")
                }
                else {
                let c=rem.removed-1
            userData.splice(c,1)
                }
        }
        else if (userChoice.choices==='Quit') {
            exe=false
        }
} while (exe)