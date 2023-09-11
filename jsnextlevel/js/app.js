function Shape(width,height,color) {
    this.width = width+'px'
    this.height = height+'px'
    this.background = color
    
}
const square1 = new Shape(100,100,'aqua')
console.log(square1)
function Car(name) {
    this.name = name
}
const bmw = new Car('BMW')
console.log(bmw)