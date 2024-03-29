#! /usr/bin/env node
import inquirer from "inquirer";
let validationFunc = (input) => !isNaN(parseFloat(input));
let answers = await inquirer.prompt([
    {
        name: 'firstNumber',
        message: 'Enter first number',
        type: 'number',
        validate: async (input) => validationFunc(input), //!isNaN(parseFloat(input))
    }, {
        name: 'secondNumber',
        message: 'Enter second number',
        type: 'number',
        validate: async (input) => validationFunc(input), //!isNaN(parseFloat(input))
    }, {
        name: 'operator',
        message: 'select operator',
        type: 'list',
        choices: ['Add', 'Subtract', 'Multiply', 'Divide']
    }
]);
console.log(answers);
let result;
if (answers.operator === 'Add') {
    //Addition
    result = answers.firstNumber + answers.secondNumber;
}
else if (answers.operator === 'Subtract') {
    //subtraction 
    result = answers.firstNumber - answers.secondNumber;
}
else if (answers.operator === 'Multiply') {
    //multiplication
    result = answers.firstNumber * answers.secondNumber;
}
else {
    //division
    result = answers.firstNumber / answers.secondNumber;
}
//if (isNaN(answers.firstNumber) || isNaN(answers.secondNumber)){
//    console.log('Your entered values are not numbers. Try again.')
//} else {
console.log(`Result is ${result}`);
//}
