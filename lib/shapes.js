//  create a obj shape
class shape{
// add color function
setColor(color){
    this.color = color;
    }

}

class triangle extends shape{

   render (){
    `<svg width="200" height="250" version="1.1" fill="${setColor}" xmlns="http://www.w3.org/2000/svg"></svg>`
   }
}

class circle extends shape{
    render (){
        <svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg"></svg>
       }
}

class square extends shape{
    render (){
        <svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg"></svg>
       }
}

class rectangle extends shape{

}

class text {
    setColor(color){
        this.color = color;
        }
    setText(text){
        this.text = text;
    }
}

module.exports(circle, square, triangle, rectangle, text) 
