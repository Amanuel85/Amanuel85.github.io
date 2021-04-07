let users = [
    { id: 1, name: "John" },
    { id: 2, name: "Pete" },
    { id: 3, name: "Smith" },
    { id: 4, name: "William" },
    { id: 5, name: "Ivy" },
    { id: 6, name: "Christina" },
    { id: 7, name: "Martin" },
    { id: 8, name: "Stephine" },
    { id: 9, name: "Charlie" },
    { id: 10, name: "Zard" }
];

//Return an array which contains the length of user’s name for those user’s name contains letter ‘a’. – filter, map

let namesLenArr = users.filter(item => item.name.includes('a')) //Array
    .map(item => item.name.length) //Array
console.log(namesLenArr);

console.log('================');





//Count the total of users which name’s length is greater than 4. 
let total = users.filter(user => user.name.length > 4) //Array
    .reduce(sum => sum + 1, 0); //Number


let filterUsers = users.filter(user => user.name.length > 4);
console.log(filterUsers);
let count = filterUsers.reduce(sum => sum + 1, 0);
console.log(count);