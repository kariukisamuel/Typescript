"use strict";
//number
let id = 1;
//string
let company = 'Mega';
//boolean
let isActive = true;
//any
let x = 'Hi';
//array of numbers
let ids = [1, 2, 3, 4, 5];
//mixed array
let arr = [1, true, 'Hello'];
//tuple
let person = ['Sam', 30, true];
//tupple array
let employee;
employee = [
    [1, 'Sam'],
    [2, 'Benjamin'],
    [3, 'John']
];
//union
let pid;
pid = 22;
//Enum numbers
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
//Enum String
var Direction1;
(function (Direction1) {
    Direction1["Up"] = "up";
    Direction1["Down"] = "down";
    Direction1["Left"] = "left";
    Direction1["Right"] = "right";
})(Direction1 || (Direction1 = {}));
//objects
let user = {
    name: 'Sam',
    age: 10
};
const employee1 = {
    id: 1,
    name: 'John',
};
//type assertion 
let cid = 1;
let customerId = cid;
let customersId = cid;
//functions
function sum(a, b) {
    return a + b;
}
// console.log(sum(1,2))
function printMessage(msg) {
    console.log(msg);
}
const mother = {
    id: 1,
    name: "Mary",
    country: "United States"
};
const father = {
    id: 1,
    name: "John",
};
console.log(mother);
console.log(father);
const add = (x, y) => {
    return x + y;
};
const subtract = (x, y) => {
    return x - y;
};
console.log(add(1000, 1000));
console.log(subtract(1000, 500));
class Car {
    constructor(model, regNo) {
        this.model = model;
        this.regNo = regNo;
    }
    register() {
        return `this ${this.model} is registered as ${this.regNo}`;
    }
}
//subclass
class Mileage extends Car {
    constructor(model, regNo, mileage) {
        super(model, regNo);
        this.mileage = mileage;
    }
}
const tesla = new Car('Tesla', 123);
const mileage = new Mileage('Tesla', 123, 1000);
console.log(mileage);
//generics
function generateArr(items) {
    return new Array().concat(items);
}
let numArrays = generateArr([1, 2, 3, 4, 5, 6]);
let stringArrays = generateArr(['1', '2', '3', '4', '5', '6']);
console.log(numArrays);
console.log(stringArrays);
// console.log(printMessage('string'))
// console.log(printMessage(1))
// // console.log(id)
// // console.log(arr)
// // console.log(employee)
// // console.log(pid)
// // console.log(Direction.Up)
// // console.log(Direction.Down)
// // console.log(user)
// // console.log(employee1)
// // console.log(customerId)
// // console.log(customersId)
