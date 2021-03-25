/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
"use strict";

/*
Function analyzer
Has an unbound this
Creates an object that contains the following information from the "this" object.
{
	numProperties  	// number of properties
	cntShortName	// count of property names shorter than 3 characters
	cntReferences	// count of reference properties (use the typeof operator to compute this)
}	
*/
/*
function analyzer() {
	let numProp = 0;
	let cntShort = 0;
	let cntRefere = 0;
	// this.numProperties 
	// this.cntShortName 
	// this.cntReference 

	for (let key in Object.keys(this) )
	{
		//this.numProperties +=key;
		 if(typeof this[key] === "object"){
		 	cntRefere += key
		 }
		// if(key.length<2){
		// 	this.cntShortName +=1
		// }
	return{ cntReference :cntRefere}
	}
	
	//return {numProperties :this.numProperties,cntShortName:this.cntShortName,cntReference:this.cntReference}
}
*/

function analyzer() {
	let numProperties =0;
	let cntShortName = 0;
	let cntReference =0;
	for (let key in this )
	{
		numProperties +=key;
		if(typeof this[key] === "object"){
			cntReference +=1
		}
		if(key.length<2){
			cntShortName +=1
		}
	}
	return {numProperties:numProperties,cntShortName:cntShortName,cntReference:cntReference}
}

/////////////////////
// function analyzer() {
// 	// let numProp = 0;
// 	// let cntShort = 0;
// 	// let cntRefere = 0;
// 	// this.numProperties  
// 	// this.cntShortName 
// 	// this.cntReference 
// 	return {this.numProperties; this.cntShortName;this.cntReference}
// }




/* Constructor for a person object
	Person(name, country, grades) creates object
	{
		name: name,  // person's name
		county: country, // person's country
		grades: grades,  // integer array of grades
		computeGrade     // function that computes the grade from grades
	}
*/
function Person(name, country, grades) {
	this.name = name,
	this.country = country,
	this.grades = grades ,
	 this.computeGrade = function(){
		let sum = 0;
		let avg = 0;
		for (let  i = 0;i<this.grades.length;i++){
			sum = sum+this.grades[i];}
			avg = sum/this.grades.length;
		return avg; }  
}

//  let ama = new Person("bob", "usa", [100, 90]).computeGrade()
// console.log(ama)
