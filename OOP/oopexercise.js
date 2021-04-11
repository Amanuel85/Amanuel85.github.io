'use strict'
/*
let animal = {eates:true}
let rabit = Object.create(animal)
rabit.run = true
console.log(rabit)
console.log(Object.keys(rabit))
for(let porp in rabit){
    console.log(porp)
}
console.log(rabit.hasOwnProperty("run"))
for(let prop in rabit){
    let own = rabit.hasOwnProperty(prop)
    if(own){
        console.log(`our,${prop}`)
    }
    else{console.log(`inherit ${prop}`)}
}
*/
/*
let animal = {
    walk: function() {
    if (!this.isSleeping) {
    console.log(`I walk`);
    }
    },
    sleep: function() {
    this.isSleeping = true;
    }
    };
    let rabbit = Object.create(animal);
    rabbit.name = "White Rabbit";
    // modifies rabbit.isSleeping
    rabbit.sleep();
    console.log(rabbit.isSleeping); // true
    console.log(animal.isSleeping);
    */
/*
    let head = {glasses:1}
    let table = Object.create(head);
    table.pen = 3;
    let bed = Object.create(table);
    bed.sheet = 1
    bed.pillow = 2
    let pocket = Object.create(bed)
    pocket.money = 2000
    let pockest2 = {__proto__:head,
    money:2000}
    console.log(pockest2.glasses)
    console.log(pocket.pen)
    console.log(pocket.glasses)
    console.log(head.glasses)
*/
    
/*
    function Calculator(num1,num2){
        this.num1 = num1,
        this.num2 = num2
    }
    Calculator.prototype.add =function(){
        return this.num1+this.num2
    }
    Calculator.prototype.subtract = function(){
        console.log(this.num1-this.num2)
    }
    Calculator.prototype.multiply = function(){
        console.log(this.num1*this.num2)
    }
    Calculator.prototype.divide = function(){
        console.log(this.num2 !=0 ? this.num1/this.num2:"undefined")
    }
    let mycalc = new Calculator(10,0)
    mycalc.divide()
    */
   /*
   let Animal ={
       walk(){if(!this.isSleeping){
          console.log("I walk")
       }},
       sleep(){this.isSleeping = true}
   }
   let rabit = {name: "white rabit",
       __proto__ : Animal
   }
   rabit.sleep()
   Animal.sleep()
   console.log(rabit.isSleeping)
   console.log(Animal.isSleeping)
   */
//   let hamstar = {
//       meal : []
//       ,
//       eat(food){
//           this.meal= [food]
//       }
//   }

//   let lazy = {__proto__:hamstar}
//   let speedy = {__proto__:hamstar}
//   speedy.eat('apple')
//   console.log(speedy.meal)
/*

function Rabit(){}
Rabit.prototype = {eat:true,}
let rabit = new Rabit()
//console.log(rabit.eat)
Rabit.prototype = {}
console.log(rabit.eat)
Rabit.prototype.eat = false;
console.log(rabit.eat)
delete rabit.eat
console.log(rabit.eat)
delete Rabit.prototype.eat
console.log(rabit.eat)
*/

//// mises only "cotation"
/*
let green = function(x){
    return x*x}
    let blue = function(x){
    return 2*x}
    
    function myfun(val,f1,f2){
    if(val <4.3){
    return f1(val)
    }
    else{return f2(val)}
    }
    console.log(myfun(10,green,blue)) // = 20
    */
    
    // console.log(myfun(-10, "green", "blue")); //100
    
    // console.log(myfun(3, "green", "blue")); //9
    
    // console.log(myfun(10, "green", "blue")); //20
    
    // console.log(myfun(15, "green", "blue")); //30
    
    
   // const numbers = [1,2,3];

    //numbers.push(4);
    
    //console.log(numbers); //[ 1, 2, 3, 4 ]
    /*
    function range(x,y){
    if(y-x <2||x===y){
    return []}
    else{ return [x].concat(range(x+1,y))
    }
    
    }
    console.log(range(2,9))
    
    */  
   // mises  bracket
   /*
   function range(x,y){
    if(y-x <2||x===y){
    return []}
    else{ return [x].concat(range(x+1,y))
    }
    
    }
    console.log(range(2,9))
    */
   /*
    let john = { name: "John", surname: "Smith", yearsExperience: 9, grades: [88,90,89,95]};

    let pete = { name: "Pete", surname: "Hunt", yearsExperience: 20, grades: [76,98,85,90]};
    
    let people = [ john, pete];
    let newarr = people.filter((item)=>item.yearsExperience >10).map((item)=>item.name+" "+item.surname)
    console.log(newarr)

    let arr = people.map((item)=>item.grades).reduce(function (accum,firstval,index,array){
    let sum = accum+firstval
    let length = array.length
    return sum/ //length
    },0)
    console.log(arr)
    
    */

    // let group = {

    //     title: "Our Group",
    
    //     students: ["John", "Pete", "Alice"],
    
    
    //     showList: function() {
    
    //         this.students.forEach(function(student) {
    
    //             console.log(this.title + ": " + student);
    
    //         });
    
    //     }
    
    // };
    
    // group.showList();
    
    // let group ={
    // title: "Our Group",
    // students : ["Jhon","Pete","Alice"],
    // showList: function(){this.students.forEach((student)=>{console.log(this.title+":"+student);});
    // }
    // };
    // group.showList()
    
    // // using bind
    // group.showList.bind(group)
    
let person1 = new Object({
    name: "Aman",
    lastname : "Abuhay",
    age: "30"
})
console.log(person1)