//constructor functions
function person (name, lastName) {
    this.name = name
    this.lastName = lastName
    // this.isMyFamily = function() {
    //     return `this is my last name ${lastName}`
    // }
    this.isMyFamily = () => `this is my last name ${lastName}`
}
let myAunt = new person('Martha', 'de la O')
console.log(myAunt.name)
let granpa = new person('Angel', 'de la O')
console.log(granpa, 'este es el segundo objeto con sus propiedades')
granpa.getSon = () => `this is my daughter ${myAunt}` //-->
// granpa.getSon = function(){ return `this is my daughter ${myAunt}`}

let divAunt = document.getElementsByClassName('aunt')
console.log(typeof divAunt,divAunt)
divAunt[0].innerHTML = myAunt.name

divAunt[0].style.backgroundColor = 'red'
divAunt[0].style.width = 'max-content'
// aconstructor function lets you creat or initialize objects using the same structure
// --> is use to create instances of an object



// creating objects with object literal notation:
let obj = {
    name: 'Oscar',
    lastName: 'de la O'
}
console.log(obj)
let div1 = document.createElement('div')
div1.className = 'objName'
let theObjNameDiv = document.getElementsByClassName('objName')
theObjNameDiv.innerHTML = obj.name
let holaDiv = document.getElementsByClassName('hola')
holaDiv[0].innerHTML = 'hola'

//create a method 'calculatePrice' for the constructure 'Item'
function item (name, price ){
    this.name = name
    this.price = price
    this.calculatePrice = function(){
        let helper 
        if(this.name == 'fruit'){
            this.price= this.price - this.price*0.15
            console.log(helper)
            return `this is the real price ${this.price}`
        }else{
            return `this is the real price ${this.price}`
        }
    }
}
// item.prototype.calculatePrice = function(){
//     let helper
//     if(this.name == 'fruit'){
//         helper =this.price - this.price*0.15
//         return `this is the real price ${helper}`
//     }else{
//         return `this is the real price ${this.price}`
//     }
// }

let ball = new item('ball', 15)
let apple = new item('fruit', 10)

// --> What is inheritance ?
// --> inheritance in an object is an object that gains  properties or behavoir of anotherobject
function Animal (name, owner, sound){
    this.name = name
    this.owner = owner
    this.sound = sound
}
// function dog (name, owner){
//     this.name = name
//     this.owner = owner
//     this.sound = 'guau guau'
//     this.humanRelation = 'love'
// } 
//--> there's a better way to inheritate properties from an object
function dog (name, owner) {
    Animal.call(this, name, owner)
    this.sound = 'guau guau'
    this.humanRelation = 'love'
}
dog.prototype = Object.create(Animal.prototype)
let myAnimal = new Animal('ayra', 'josephine', '--')
let myDog = new Animal('Skipper', 'Oscar', 'guau')

console.log(dog.name)