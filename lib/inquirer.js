// create a function to generate the logo


function generateSVG(answers){
    if(answers.shape === "triangle"){
        triangle.render()
        shape.color(color)
        shape.text()

    }
    else if(answers.shape === "circle"){
        circle.render()
        shape.color(color)
        shape.text(text)
    }
    else if(answers.shape === "square"){
        square.render()
        shape.color(color)
        shape.text(text)
    }
    else if(answers.shape === "rectangle"){
        rectangle.render()
        shape.color(color)
        shape.text(text)

    }
    else return "";
}

module.exports = { generateSVG }
  