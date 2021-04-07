"use strict"

// let map = new Map()
// map.set(true,1)
// //console.log(map.get(true))

// let user = {true:"true"}
// // console.log(Object.keys(user))
// // console.log(map.size)
// //let john = {name:"John"}
// // let visitcount = new Map();
// // let course = visitcount.set(john,125)
// //console.log(visitcount.get(john))
// // console.log(visitcount.get(john))

// let recipeMap = new Map([
//     ['cucumber', 500],
//     ['tomatoes', 350],
//     ['onion',    50]
//   ])
//   //console.log(recipeMap)

// // for (let key of recipeMap.values()){
// //     console.log(key)
// // }

// // console.log(null??false)
// function isEmpty(obj){
//   for(let key in obj)
//     {
//       return false}
      
// return true}

// let schedule = {fullname:"aa"};
// console.log(isEmpty(schedule))

// let sumsalary = function(obj){
//   let sum = 0
//   for(let key in obj){
//     sum = sum+obj[key]
//   }
// return sum}
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
// console.log(sumsalary(salaries))

// let clone = {}
// for (let key in salaries){
//   clone[key]= salaries[key]
// }
// salaries["John"] = 300
// console.log(clone)
// let user1 = { name: "John" };

// let permissions1 = { canView: true };
// let permissions2 = { canEdit: true };
// Object.assign(user1,permissions1,permissions2,clone)
// user1["sayHi"] = function syHi(){
//   console.log("Hi "+this.name)
// }
// // console.log(user1.sayHi())
// let car = {name:"Jhon",age:30, hello:function(){
//   console.log(car.name)
// }}
// let car2 = car
// // console.log(car)
// // console.log(car2)
// function hello(){
// console.log(this.age)}
// car.f = hello;
// //car2.f = hello;
// car.hello()
// const numbers = [10, 20];
// let [a, b] = numbers;
// console.log(a);
// console.log(b);
// const [first, , third] = ["foo", "bar",
// "baz"];
// console.log(first);
// console.log(third);
/*
let usergroup = {};
[usergroup.firstname, usergroup.lastname] = "Smith Tom".split(" ")
console.log(usergroup)
let userx = {};
[userx.name, userx.surname] = "John Smith".split(' ');
console.log(userx); 
/// fibnaci using recursive:
function fib(n){
  if(n<2){
    return n
  }
  else return fib(n-1)+fib(n-2)
}
let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Mary" }
  ];

//  let someuser =  users.filter(function term(item,index,arr){ item = users[index] <3
//   return item})
//   console.log(someuser)
function Person (name,age){
  this.name = name,
  this.age = age
}
let newpr = new Person("aman",30)
console.log(newpr)
let {firstName, surname} = "Ilya Kantor".split(' ');
console.log(firstName)
*/
let user = {
  firstName: "John",
  sayHi() {
  console.log(`Hello, ${this.firstName}!`);
  }
  };
  setTimeout(user.sayHi, 1000); // Hello, undefined