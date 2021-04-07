let  users  =   [    {  id:  1,  name:   "John"  },      {  id:  2,  name:   "Pete"  },      {  id:  3,  name:   "Mary"  },
    {  id:  4,  name:   "Charile"  }
];

// [
//   {index: 0, name: "John", length: 4},
//   {index: 1, name: "Pete", length: 4},
//   {index: 2, name: "Mary", length: 4},
//   {index: 3, name: "Charile", length: 7}
// ]

let result = users.map(function(item, idx, array) {
    return { index: idx, name: item.name, length: item.name.length };
});

let result2 = users.map((item, idx, array) => {
    return { index: idx, name: item.name, length: item.name.length };
});
console.log(result2);


let names = users.map(function(item, index, array) {
    return item.name;
});
console.log(names);


function map(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i].name);
    }
    return result;
}

console.log(map(users));