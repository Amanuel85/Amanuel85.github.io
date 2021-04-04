'use strict'

//Question 1: Sum all numbers till the given one
function sumAll(n){
    if (n===1){
        return n
    }
    else{ return n+sumAll(n-1)}
}

console.log("expect 5050 ",sumAll(100))
/* q2 Use Object literal to create an object named linkedlist which has the followingmethods:
linkedlist.add(1)
➢linkedlist.remove(2) – remove the first one
➢linkedlist.print() – format: LinkedList{ 1, 2, 5, 7 }

*/
let linkedlist = {};
linkedlist.add = function(element) {
if (this.value === undefined) {
this.value = element;
this.next = null;
} else {
let current = this;
while (current.next) {
current = current.next;
}
current.next = { value: element, next: null };
}
}
linkedlist.remove = function(element) {
var current = this;
var prev = null;
while (current) {
if (current.value === element) {
if (prev == null) {
this.value = current.next.value;
this.next = current.next.next;
} else {
prev.next = current.next;
}
return true;
}
prev = current;
current = current.next;
}
return false;
}
linkedlist.printHelper = function(list, result) {
if (list.next == null) {
result += list.value;
return result;
}
result += list.value + ',';
return this.printHelper(list.next, result);
}
linkedlist.print = function() {
let result = 'LinkedList{';
result = this.printHelper(this, result);
result += '}';
console.log(result);
}

linkedlist.add(1);
linkedlist.add(2);
linkedlist.add(3);
linkedlist.print(); 
linkedlist.remove(3);
linkedlist.print()

// var LinkedList = {
//     head: null,
//     createNode: function(data) {
//         return {
//             data: data,
//             next: null
//         };
//     },
//     add: function(data) {
//         var current,
//         newNode = this.createNode(data); 
//         if(this.head == null) {
//             this.head = newNode;
//         }
//         else {
//             current = this.head;
//             while(current.next != null) {
//                 current = current.next;
//             }
//             current.next = newNode;
//         }
//     },
//     remove: function(data) {
//         if(this.head.data == data) {
//             this.head = this.head.next;
//             return;
//         }
//         var prev = this.head,
//             current = this.head.next;
        
//         while(current.data !=null) {
//             if(current.data == data) {
//                 prev.next =current.next;
//                 return;
//             }
//             prev = current;
//             current = current.next;
//         }
//     },
   
        
// }

