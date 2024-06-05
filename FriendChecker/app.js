import inquirer from "inquirer";
let isFriend = await inquirer.prompt([{
        name: "name",
        type: "string",
        message: "Enter your Friend Name"
    }]);
// console.log(isFriend.name);
if (isFriend.name === "asghar" || isFriend.name === "bilal") {
    console.log(`${isFriend.name} your friend`);
}
else {
    console.log(`${isFriend.name} not your friend`);
}
