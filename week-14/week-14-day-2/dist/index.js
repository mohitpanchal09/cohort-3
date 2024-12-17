"use strict";
let user = {
    name: "harkirat",
    age: 30,
    address: {
        country: 'india',
        state: 'delhi',
        pincode: 110044
    }
};
function isLegal(user) {
    if (user.age > 18) {
        return true;
    }
    return false;
}
let person = {
    name: 'mohit',
    age: 22,
    greet: (a) => {
        return a;
    }
};
let greeting = person.greet('hello');
console.log(greeting);
class Area {
    constructor(length, breadth) {
        this.length = length;
        this.breadth = breadth;
    }
}
const area = new Area(2, 3);
console.log(area);
