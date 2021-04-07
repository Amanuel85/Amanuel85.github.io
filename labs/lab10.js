"use strict "

//q1  : Fix a function that loses “this” (do with bind, wrapper, call, and apply)
let prompt = require("prompt-sync")()


function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
    }
    let user = {
    name: 'John',
    loginOk() {
    console.log(`${this.name} logged in`);
    },
    loginFail() {
    console.log(`${this.name} failed to log in`);
    },
    };
//(user.loginOk())

askPassword(user.loginOk.bind(user), user.loginFail.bind(user)); // using bind
askPassword(()=>user.loginOk(), ()=>user.loginFail()); //using arrow
askPassword(function (){user.loginOk()}, function (){user.loginFail()}); //using wrapper
askPassword(()=>user.loginOk.call(user), ()=>user.loginFail.call(user)); //call 
askPassword(()=>user.loginOk.apply(user), ()=>user.loginFail.apply(user));// & apply


// question 2 
//let prompt = require("prompt-sync")()

function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
  }
  
  let user = {
    name: 'John',
  
    login(result) {
      console.log( this.name + (result ? ' logged in' : ' failed to log in') );
    }
  };
  
  askPassword(user.login.bind(user,true), user.login.bind(user,false)); // using bing
  askPassword(()=>user.login(true), ()=>user.login(false))
  askPassword(()=>user.login.call(user,true),()=>user.login.call(user,false)) ;
  //askPassword(()=>user.login.apply(user,true),()=>user.login.apply(user,false));


  ///Question 3: Fix the code below using bind
let group = {
title: "Our Group",
students: ["John", "Pete", "Alice"],
showList: function() {
this.students.forEach(function(student) {
console.log(this.title + ": " + student);
}.bind(this));
}
};
group.showList()

