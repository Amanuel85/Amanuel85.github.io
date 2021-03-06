'use strict'

class Clock {
    constructor({ template }) {
      this.template = template;
    }
  
    render() {
      let date = new Date();
  
      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
  
      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
  
      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
  
      let output = this.template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
  
      console.log(output);
    }
  
    stop() {
      clearInterval(this.timer);
    }
  
    start() {
      this.render();
      this.timer = setInterval(() => this.render(), 1000);
    }
  }
  
  
  let clock = new Clock({template: 'h:m:s'});
  clock.start();
  setTimeout(()=>clock.stop(), 10000);

  // Q2 
  
   class Student {
constructor(firstName, lastName, grades = []) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.grades = grades;
  }
  inputNewGrade(newGrade) {
  this.grades.push(newGrade);
  }
  computeAverageGrade() {
  return this.grades.reduce((sum, current, index, array) => sum + current /
  array.length, 0);
  }
  }
  const stu1 = new Student('Mike', 'Dean');
  stu1.inputNewGrade(100);
  stu1.inputNewGrade(90);
  stu1.inputNewGrade(80);
  stu1.inputNewGrade(70);
  const stu2 = new Student('Paw', 'Doug');
  stu2.inputNewGrade(85);
  stu2.inputNewGrade(78);
  stu2.inputNewGrade(90);
  stu2.inputNewGrade(70);
  const students = [stu1, stu2];
  const result = students.reduce((average, stu, index, array) => average + stu.computeAverageGrade() / array.length, 0);
  console.log(result);
  