const numbers = [10, 20];
let [a, b] = numbers;

console.log(a);
console.log(b);

const [first, , third] = ["foo", "bar", "baz"];
console.log(first);
console.log(third);

let user = {};
[user.name, user.surname] = "John Smith".split(' ');
console.log(user); //{ name: 'John', surname: 'Smith' }


let [name1, name2, ...rest] = ["John", "Smith", "is", "taking CS303 course!"];
console.log(name1); // John
console.log(name2); // Smith

// Note that type of `rest` is Array.
console.log(rest[0]); // is
console.log(rest[1]); // taking CS303 course!
console.log(rest.length); // 2

let [firstName, surname] = [];
alert(firstName); // undefined
alert(surname); // undefined


// default values
let [name = "Guest", surname = "Anonymous"] = ["Julius"];
alert(name); // Julius (from array)
alert(surname); // Anonymous (default used)


let options = {
    title: "Menu",
    width: 100,
    height: 200
};
let { title, width, height } = options;
alert(title); // Menu
alert(width); // 100
alert(height); // 200


let options = {
    title: "Menu",
    width: 100,
    height: 200
};

// { sourceProperty: targetVariable }
let { width: w, height: h, title } = options;

// width -> w
// height -> h
// title -> title

alert(title); // Menu
alert(w); // 100
alert(h); // 200


let title, width, height;

// okay now
({ title, width, height } = { title: "Menu", width: 200, height: 100 });


let options = {
    title: "Menu"
};
let { width = 100, height = 200, title } = options;
alert(title); // Menu
alert(width); // 100
alert(height); // 200

let options = {
    title: "My menu",
    items: ["Item1", "Item2"]
};

function showMenu({ title = "Untitled", width = 200, height = 100, items = [] }) {
    // title, items – taken from options,
    // width, height – defaults used
    alert(`${title} ${width} ${height}`); // My Menu 200 100
    alert(items); // Item1, Item2
}
showMenu(options);