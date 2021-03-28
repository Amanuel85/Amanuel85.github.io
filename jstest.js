"use strict"

let map = new Map()
map.set(true,1)
//console.log(map.get(true))

let user = {true:"true"}
// console.log(Object.keys(user))
// console.log(map.size)
let john = {name:"John"}
let visitcount = new Map();
let course = visitcount.set(john,125)
console.log(visitcount.get(john))
// console.log(visitcount.get(john))

let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion',    50]
  ])
  console.log(recipeMap)

for (let key of recipeMap.values()){
    console.log(key)
}