const fs = require('fs');
const inquirer = require('inquirer');
const SVG = require('./lib/inquirer')

questions = [

    {
        type: 'input',
        name: 'text',
        message: 'Plese input text for the logo (maximum 3 chars)'
    },

    {
        type: 'checkbox',
        name: 'textColor',
        message: 'Please select the color for the text:',
        choices: ['red', 'blue', 'green'],
    },

    {
        type: 'checkbox',
        name: 'shape',
        message: 'Please select a shape: ',
        choices: ['circle', 'rectangle', 'square',]

    }, 

    {
        type: 'checkbox',
        name: 'shapeColor',
        message: 'Please select a color for the shape',
        choices: ['red', 'blue', 'green'],
    },

]


function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, error => {
        if (error) {
          return console.log('There was an error writing the readMe file: ' + error);
        }
        else{
            console.log('Your Readme file has been generated')
        }
    })
}

init = () => {
    inquirer.prompt(questions)
    .then((answers)=>{
    const svg = SVG.generateSVG(answers)
    writeToFile("icon.svg", svg)
    })
    
}

init()