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
		if(cntShortName.length<2){
			cntShortName +=1
		}
	}
	return numProperties,cntShortName,cntReference;
}


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

// let ama = new Person("bob", "usa", [100, 90]).computeGrade()
// console.log(ama)
