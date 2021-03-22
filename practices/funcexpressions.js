"use strict";
function ask(question){
    if (question === "yes"){ return yes() }

    else {return no()}
}

//function yes(){console.log("yes");}
//function no(){console.log("no")}
function yes() {console.log("yep");}
function no (){console.log("no")}

console.log(ask("yes"))