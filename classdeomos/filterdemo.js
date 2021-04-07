let  users  =   [    {  id:  1,  name:   "John"  },      {  id:  2,  name:   "Pete"  },      {  id:  3,  name:   "Mary"  },   {  id:  4,  name:   "Charile"  }];

let filteredUsers = users.filter(function(item, index, array) {
    return item.name.includes('abc');
});

let filteredUsers2 = users.filter((item, index, array) => {
    return item.name.includes('e');
});

let filteredUsers3 = users.filter(item => item.name.includes('abc'));

console.log(filteredUsers3);

// function filter(arr, letter){
//   let result = [];
//   for(let item of arr){
//     if(item.name.includes(letter) ){
//         result.push(item);
//     }
//   }
//   return result;
// }

// let res = filter(users, 'e');
// console.log(res);