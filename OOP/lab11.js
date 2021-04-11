'use strict'

/*
➢Properties: firstName:String, lastName:String, grades: Array
➢Methods:
➢inputNewGrade(newGrade): push newGrade to grades
➢computeAverageGrade(): return average of grades
➢Create an Array with multiple students which are created using Object.create();
➢Then compute the average grade for all students in the array */

 let student = {firstName: this.firstName,lastName:this.lastName,grades:this.grades,
inputNewGrade:function(newGrade){
    this.grades.push(newGrade);
},
computeAverageGrade:function(){
    return this.grades.reduce(((currentVal,nextVal,index,array)=>currentVal+nextVal/array.length),0);}
};


//console.log(student.computeAverageGrade())
//
let student1 = Object.create(student);
student1.firstName = "Alex";
student1.lastName = "Bruno";
student1.grades = [70,80,90,60,75];
console.log(student1.computeAverageGrade());

let student2 = Object.create(student);
student2.firstName = "Mike";
student2.lastName = "Dean";
student2.grades = [90,100,80,70,75];
console.log(student2.computeAverageGrade());


let student3 = Object.create(student);
student3.firstName = "Jimy";
student3.lastName = "Fox";
student3.grades = [100,70,65,70,75];
console.log(student3.computeAverageGrade());

let studentsArray = [student1,student2,student3];
//console.log(studentsArray)

let averageScore = studentsArray.map(function(item){ 
let avg =  item.grades
return avg.reduce((currentval,firstval,index,array) =>currentval+firstval/array.length,0)
});
console.log(averageScore)


//// Question 2: Redo the Question 1 using Constructor Function


function Students(firstName,lastName,grades){
    this.firstName = firstName,
    this.lastName = lastName,
    this.grades = grades
}

Students.prototype.inputNewGrade =  function(newGrade){
    this.grades.push(newGrade);
};
Students.prototype.computeAverageGrade = function(){
    let avg =  this.grades.reduce(((currentVal,nextVal,index,array)=>currentVal+nextVal/array.length),0);
    console.log(avg)};

let mystudent1 = new Students("Aman","Abu",[80,90,85,100])
mystudent1.inputNewGrade(96)
//console.log(mystudent1.grades)
//console.log(mystudent1.__proto__ === Students.prototype)
let mystudent2 = new Students("Alex","Jhon",[50,60,70,90])
let mystudent3 = new Students("Nina","Bruce",[])
mystudent3.inputNewGrade(75)
mystudent3.inputNewGrade(82)
mystudent3.inputNewGrade(91)
mystudent3.inputNewGrade(100)
console.log(mystudent3)
mystudent3.computeAverageGrade()

/*Question 3:
Add a new method named sort() without parameters in built-in constructor function Array.
It’ll sort all elements in the array in ascending order */
//console.log(mystudent3.grades)
//console.log(mystudent3.grades.sort())
Array.prototype.sort = function (){
    let newarr = []
    let temp = 0 ;
   // let smallest =[this[0]]
    for  (let i = 0;i < this.length;i++){
        for(let j = i+1;j<this.length;j++){
            if( this[i]>this[j]){
                temp = this[i];
                this[i]= this[j];
                this[j]=temp

                newarr.push(this[j]);
            }
        }
    }

    return newarr};
//console.log(mystudent3.grades)
let myarray = [50,60,40,90,20,10]
myarray.sort()
console.log(myarray)
mystudent3.grades.sort()
console.log(mystudent3.grades)