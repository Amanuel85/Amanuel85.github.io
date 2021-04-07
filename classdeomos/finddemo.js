let  users  =   [    {  id:  1,  name:   "John"  },      {  id:  2,  name:   "Pete"  },      {  id:  3,  name:   "Mary"  },   {  id:  4,  name:   "Pete"  }];
//arr.find(function(item, index, array))

// const f = function (user){
//   return user.name === 'Pete';
// }

let result = users.find(function(user) {
    return user.name === 'Pete';
});

let result2 = users.find((user) => {
    return user.name === 'Pete';
});

let result3 = users.find(user => user.name === 'Pete');
console.log(result3);

let indexResult = users.findIndex(user => user.name === 'Mary');
console.log(indexResult);