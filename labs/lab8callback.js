
"use strict"
//Question 1: Write a function printNumbers(from, to) that outputs a number every second,
//starting from from and ending with to.

function count(from,to){
    let current = from
    let timerId = setInterval(function(){
        console.log(current)
        if(current === to){
            clearTimeout(timerId)}
            current++
    },1000)
    
}
count(1,10)


/*In the code below there’s a setTimeout call scheduled, then a heavy calculation is run, that takes more than 100ms to finish.

When will the scheduled function run?

A,After the loop.
B,Before the loop.
C,In the beginning of the loop.
What is alert going to show?
*/
/*
let i = 0;

setTimeout(() => alert(i), 100); // ?

// assume that the time to execute this function is >100ms
for(let j = 0; j < 100000000; j++) {
  i++;
}
*/

//Answer

//Any setTimeout will run only after the current code has finished.

//The i will be the last one: 100000000.

let i = 0;

setTimeout(() => console.log(i), 100); // 100000000

// assume that the time to execute this function is >100ms
for(let j = 0; j < 100000000; j++) {
  i++;
}

