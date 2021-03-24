/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
"use strict";

//See tests.js for behavior
function nameString(obj) {
   let arr = [];
 
if (obj.length === 0){
    return "object has no properties"
}

    for(let key in obj){
        arr.push(key); 
      }
         arr.sort();
        let newarr = arr.join(".");
            return newarr;}
    

function nameString1(obj) {
 
if (obj === null){
return "null argument"}

else {return "no object passed"}
}
                            
  

    


// function nameString(obj){
//     for (let key in obj){
//         if (key === null){
//         return "no object passed" }}
// }

/*
function test (obj){
    let arr = []
    let newarr;
    for(let key in obj){
      arr.push(key)
      
    }
arr.sort()
let newarr = arr.join(".")
return newarr}
*/

// let obj = {a:5, z:6, m:8}
// for (let key in obj)
// {
//     console.log(key)
// }

