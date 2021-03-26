/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
"use strict";

// Remove the even characters from string, e.g removeEvenCharacters("abcd") === "bd"
function removeEvenCharacters(string =null) {
    let str ="";
    if(string === null ){
        return "missing argument"
    }
    else if(string ===""){
        return ""}
     else if(string !== null && typeof string !== "string"){
        return "argument not string"
    }
    else{
    // if(str.length > 0){
    for(let i = 0;i<string.length;i++){
        if(i%2 !==0){
            str =str+string[i];
            }}  return str}
}
// console.log(removeEvenCharacters("ABCD"))

// Sum the numbers that are greater than zero of array, e.g. sumPositiveNumbers([-1,4,5,-2,-3,10]) === 19
// Must use the reduce method of the Array object to do this!!!
function sumPositiveNumbers(array) {
    if (array.length ===0){
        return 0
    }
    else {
        let sum = array.reduce(function(acc,cur){
            return cur > 0?acc+cur:acc
        },0)
    return sum}
}
//console.log(sumPositiveNumbers([-1, -4, -5, -6, -10]))


// Write a construction function
// Input an array containing numbers and string, e.g. [1, "a", "c", 2, 4]
// Creates an object with two array properties numbers and strings, e.g.
// new ArrayDemo([1, "a", "c", 2, 4]) returns {numbers:[1, 2, 4]; strings:["a", "c"}
function ArrayDemo(array) {
    this.array = array
    // this.numbers = numbers
    // this.strings = strings
    let num = []
    let str =[]
    for (let arr of array){
        if(typeof arr=== "string"){
            str.push(arr)
        }
        else if(typeof arr === "number"){
            num.push(arr)
        }
    }
return {numbers:num,strings:str}}

/*makePositive([-1, 2, "a", 3, -4, -5]).join(".");
            assert.equal(result, "1.2.a.3.4.5");			
        }); */

// Makes all negative numbers of the input array positive
function makePositive(array) {
    let newarr = [];
    for(let arr of array){
        if(typeof arr === "number"){
            newarr.push(Math.abs(arr))
        }
        else {newarr.push(arr)}
    }

return newarr}
//console.log(makePositive([-1, 2, "a", 3, -4, -5]))


// Replaces sequences of 0s with an "*", e.g.
// removeZeros([3, 0, 0, 0, 5, 6, 0, 0, 7, 0]) returns [3, "*", 5, "*", 7, "*"];
function removeZeros(array) {

    let unique = array.filter(function(value,index,array){
        return index === 0||value!==array[index-1]
    });
    let newarr =[]
    for (let arr of unique){
        if (arr===0){
            arr = "*"
        }
        newarr.push(arr) }  

return newarr}
console.log(removeZeros([3, 0, 0, 0, 5, 6, 0, 0, 7, 0]))

var a =[3, 0, 0, 0, 5, 6, 0, 0, 7, 0];

var b = a.filter(function(item, pos, arr){
  // Always keep the 0th element as there is nothing before it
  // Then check if each element is different than the one before it
  return pos === 0 || item !== arr[pos-1];
});
//console.log(b)