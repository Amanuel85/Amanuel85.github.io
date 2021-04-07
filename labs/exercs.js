"use strict"

// function greeting(){
//     console.log(this)
// }
// //greeting()

// let user = {firstname :"Jhon",
//  sayHi  (){
//     console.log(`Hello,${this.firstname}`)
// }}
// //console.log(user.sayHi())
// //setTimeout(function(){user.sayHi()},0)
// //setTimeout(()=>user.sayHi(),1000)
// setTimeout(user.sayHi.bind(user),0)
// setTimeout(()=>user.sayHi.call(user),1000)
// setTimeout(()=>user.sayHi.apply(user),2000)
// let group = {
//     title: "Our Group",
//     students: ["John", "Pete", "Alice"],
//     showList: function() {
//     this.students.forEach((student) =>  console.log(this.title + ": " + student));
//     }
//     };
//     group.showList();
    
// let users = [
//     { id: 1, name: "John" },
//     { id: 2, name: "Pete" },
//     { id: 3, name: "Mary" }
//     ];
// let newusr = users.find(function(elemnt,index,array){
//     if(elemnt.id==1){
//     return `${elemnt},${index},${array}`}
// })    
// console.log(newusr)

// let userfilter = users.filter(function(element,indx,array){if (element.id<3) return `${element},${indx},${array}`})
// console.log(userfilter)

let users = [
    { id: 1, name: "John" },
    { id: 2, name: "Pete" },
    { id: 3, name: "Smith" },
    { id: 4, name: "William" },
    { id: 5, name: "Ivy" },
    { id: 6, name: "Christina" },
    { id: 7, name: "Martin" },
    { id: 8, name: "Stephine" },
    { id: 9, name: "Charlie" },
    { id: 10, name: "Zard" }
    ];
    
    let usercount1 = users.filter(function (element){
        if (element.name.length>4){return element
        }
    } )
    console.log(usercount1)
    let usercount = users.filter(function (element){
        if (element.name.length>4){return element
        }
    } ).reduce((sum)=>sum+1,0)
    console.log(usercount)

   let userLength = users.filter((element,index,array)=> element.name.includes("a")).map((item)=>item.name.length)
console.log(userLength)

let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
console.log(lengths); // 5,7,6

const numbers = [10, 20];
let [a, b] = numbers;
console.log(a);
console.log(b);

let [name,lastname,...rest] = ["Aman","Abuhay","Dallas,","Texas","USA"]
console.log(rest[3])
let arr1 = [1,2,3,4,5,6]
let arr2 = [7,8,9,10,11]
let arr3 = [...arr1,...arr2]
console.log(arr3)

let testarr = ["chicken","egg","milk","chicken","egg","meat","egg","stop"]
let res = testarr.reduce((item,count)=>{[item] = count+1})
let count = {}
testarr.forEach((i)=>count[i]= (count[i]||0)+1)
console.log(count)
////
// let user = {
//     firstName: "John",
//     sayHi() {
//     console.log(`Hello, ${this.firstName}!`);
//     }
//     };
    // user.sayHi(); //works
    // setTimeout(user.sayHi(), 5000); //problem!
    
    // function greeting(){
    //     console.log(this)
    // }
    // greeting()
    //setTimeout(user.sayHi.bind(user,"Bob"),1000);
    /*
    const me = {
        first: 'John',
        last: 'Smith',
        getFullName: function() {
        return this.first + ' ' + this.last;
        }
        }
        const log = function(height, weight) { // ‘this’ refers to the invoker
        console.log(this.getFullName() + height + ' ' + weight);
        //console.log( height + ' ' + weight);
        }

      log.call(me,"180","70Kg")
      */
     /*
      const user = {
        salute: ""
        ,
        greet: function() {
        //const self = this
        this.salute = "Hello";
        console.log(this.salute); //Hello
        const setFrench = (newSalute) => { //inner function
        this.salute = newSalute;
        };
        setFrench("Bonjour");
        console.log(this.salute); //Bonjour??
        }
        };
         //user.greet.bind(user)()
        user.greet();
*/

// function f(){
//     console.log(this)
// }
// f()
/*
let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function() {
    this.students.forEach((student)=> {
    // error – ‘this’ is undefined (or window)
    console.log(this.title + ": " + student);
    });
    }
    };
    group.showList();
    */
    /*
    let group = {
        title: "Our Group",
        students: ["John", "Pete", "Alice"],
        showList: function() {
           // const self = this
        this.students.forEach((student) =>{
        // error – ‘this’ is undefined (or window)
        console.log(this.title + ": " + student);
        });
        }
        };
        group.showList();
        */
       


//  let group = {
//     title: "Our Group",
//     students: ["John", "Pete", "Alice"],
//     showList: function() {
//     this.students.forEach(function(student) {
//     console.log(this.title + ": " + student);
//     });
//     }
//     };
//   group.showList.bind()
// function sayHi(pharase,who){
//     console.log(pharase,who)
// }
// setTimeout(sayHi,2000,"Hello","Aman")
/*
function print (from, to){
let i = from 
    setTimeout(function go(){
        console.log(i)
    if (i<to){
        setTimeout(go,2000)
    }
    i++

    } ,1000)

}
print(5,10)
//setTimeout(print,1000,5,10)
*/

// let pet = ["meat","egg","meat","egg","chicken","potato"]
// let count1 = {}
// function keyvaluePair(arr){
   /*
function merging(times, num){
    let arr = []
    if (times <= 0){
        arr = []
    }
    else {arr.push(merging(times-1,num))}
    
 return arr}
console.log(merging(3,5))
function merg2(times,num){
    let arr = [];
    for (let i = 0;i<times;i++){
        if (times<=0){
            arr =  []
        }
        else{  arr.push(num)}
    }
return arr}
console.log(merg2(0,5))
*/
function reversString(str){
    if(str.length === 0){
        return ""
    }
    else{reversString(str.substring(1))
       console.log(str.charAt(0))
    }
}
reversString("ABCDE")
function sum(x, y, ...more) {
    //"more" is array of all extra passed params
    let total = x + y;
    if (more.length > 0) {
    for (let i = 0; i < more.length; i++) {
    total += more[i];
    }
    }
    console.log("Total: " + total);
    return total;
    }
    sum(5, 5, 5);
    sum(6, 6, 6, 6, 6);
    function sumRange(num){
        if(num === 1){
            return 1 
        }
        else{return num+sumRange(num-1)}
    }
    console.log(sumRange(5))

function product(arr){
    if(arr.length === 0){
        return 1
    }
    else{return arr.pop()*product(arr)}
}
console.log(product([1,2,3]))

let x = 1;
function f(x){
 return function(y){
   return x + y;
  }
}
let foo = f();
//console.log(foo())
function makeCounter() { 
    let count = 0;   
    return function(n) {  
        count = count+n;
        return count};
  }
  const myCount = makeCounter();
  console.log(myCount(10))
//   let pets = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];
// function petOjb(arr){
//     let newar =  arr.reduce((current,item) =>{current[item] =(current[item]||0)+1},{})
// return newar} 
// function pow(x, n) {
//     if (n == 1) {
//          return x;
//        } else {
//             return x * pow(x, n - 1);
//      }
//  }
//  console.log( pow(2, 2) );
//let [firstName, surname] = "Baba Louie".split(' ');

function pirntresult(from,to){
    let i = from;
    setTimeout(function add(){
        console.log(i);
        if(i<to){
            setTimeout(add,1000)
        }
        i++
    },1000)
}
//pirntresult(5,10)


// function askPassword(ok, fail) {
//     let password = prompt("Password?", '');
//     if (password == "rockstar") ok();
//     else fail();
//     }
//     let user = {
//     name: 'John',
//     loginOk() {
//     alert(`${this.name} logged in`);
//     },
//     loginFail() {
//     alert(`${this.name} failed to log in`);
//     },
//     };
//     askPassword(user.loginOk, user.loginFail);



function g(){
    let a = 4;
  return function f(){
        console.log(a*2)
    }
}

let xy  = g()
xy()