/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
"use strict";

function countSubstring(s, target) {
   let count = s.split(target).length-1
   // return count
   //let count = (s.match(/target/g)||[]).length
return count
}

//console.log(countSubstring("5abdxyxabdabd", "abd"))

// Save obj in localStorage
function saveInLocalStorage(name, obj) {
   //obj = {name:"bob", country:"usa", grades:[80,90]}
  let json = JSON.stringify(obj)
  
  localStorage.setItem(name, json) 
}


// Return value of name in local storage
function getFromLocalStorage(name) {
    

 return  JSON.parse( localStorage.getItem(name))
  
    
}

// This function has an unbounded this. When it is called, the this will be bound to some object
// The argument "obj" is a single key/value pair, e.g. {location:"Fairfield"}
// It can be any key/value pair
// addMissProperty tests the object bound to its "this" for the key of "obj" (e.g., location)
// If the bound object doesn't have that key then the key and its value is added to the bound object.
function addMissingProperty(obj) {
    let objkey = Object.values(this);
    // for (let val  )



}

// Constructor function which creates object {name:name, country:country, creationData:...}
// Where creationDate is the time that the object is created.
// ? are we gone pass it as method or 
function Person(name, country,creationDate) {
    this.name = name;
    this.country= country;
    this.creationDate = new Date();
   // this.creationDate = creationDate;
    //  this.creationDate = function creationtime(){
    //      let now = new Date();
    //          return now;};
    //creationDate = new Date();
     
//return{name:name,country:country,creationData:new Date()}
}
let aman = new Person("aman","ETh")
//console.log(aman.creationDate.getFullYear())


// The parameter "students" is an array of student objects. Each student object has form
// {name:some name, country: some country}
// This function creates a Map using the "students" parameter and sets the value of each student
// in it to zero. This will be the number of classes that the student has missed.
// The function incrementAbscences (see next) can be called to increment the number of absences.
function register(students) {
    // this.students = students
    let map = new Map();
    for(let st of students){ 
        map.set(st,0)
    }
return map}
//let students = [{name:"bob", country:"usa"}, {name:"jill", country:"usa"}];
//console.log(register(students))
// Parameters:
// course is a Map mapping student objects to an integer which is the number of days missed
// student is an object that can be used as a key to course.
// This function increments the number of days missed for the student.
function incrementAbsences(course, student) {
    
    let map = new Map();
    for(let st of student){ 
        map.set(st,0)}
return map
}


