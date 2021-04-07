let user = {
    name: "John",
    age: 30,
    toString: function() {
        return `{name: "${this.name}", age: ${this.age}}`;
    }
};
alert(user); // {name: "John", age: 30}

let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    wife: null
};

let json = JSON.stringify(student);

// stringified array
let numbers = "[0, 1, 2, 3]";
numbers = JSON.parse(numbers);
alert(numbers[1]); // 1

let user = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';
user = JSON.parse(user);
alert(user.friends[1]); // 1