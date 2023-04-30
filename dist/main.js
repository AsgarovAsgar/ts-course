// TS playground
// primitive data types:
// let myNumber = 2 // implicit
let myNumber = 2; // explicit
myNumber = 3;
let myString = 'test';
myString = 'string';
let myBoolean = true;
myBoolean = false;
let canBeAnything = true; // not recommended
canBeAnything = 'strinee';
// complex data types
// const books = ['Outliers', 'Why we sleep', 'Sapiens'] // implicit
const books = ['Outliers', 'Why we sleep', 'Sapiens']; // explicit
// books.push(2) // you cannot add number to the string Array
books.push('Thinking fast and slow'); // you can do it
// functions
function sum(x, y) {
    return x + y;
}
console.log('2' + 2); //will not work
console.log(2 + 2); //will work
function multi({ x, y }) {
    return x * y;
}
console.log(multi({ x: 2, y: 3 }));
function logAnything(value) {
    console.log(value);
}
function greet(name) {
    if (name) {
        console.log(`hello ${name}`);
    }
    else {
        console.log('Hello stranger');
    }
}
greet('asgar');
// UNION types => means variable can have many types
let booleanOrString = 'hello';
booleanOrString = true; // will not work if we've defined one type
function printId(id) {
    if (typeof id === 'string') { // narrowing
        console.log(id.toUpperCase());
    }
    else {
        console.log(id);
    }
}
// LITERAL types => means variable can only be specified types
function setProductSize(size) {
    // ...
}
function setProductSizeAlias(size) {
    // ...
}
setProductSizeAlias('small'); // works well
const tshirt = {
    name: 'myTshirt',
    price: 10
};
const shirt = {
    name: 'shirt',
    price: 20,
    color: 'red'
};
const photoShoot = {
    name: 'Wedding photo',
    price: 30,
    startTime: new Date(),
    endTime: new Date(),
};
function purchaseItem(item) {
    console.log(item);
    return item;
}
purchaseItem({
    name: 'itemName',
    price: 10
});
// ENUMS
// enum SizesEnum {
//     small = 'small',
//     medium = 'medium'
//     large = 'large'
// }
var SizesEnum;
(function (SizesEnum) {
    SizesEnum[SizesEnum["small"] = 0] = "small";
    SizesEnum[SizesEnum["medium"] = 1] = "medium";
    SizesEnum[SizesEnum["large"] = 2] = "large"; // 2
})(SizesEnum || (SizesEnum = {}));
console.log(SizesEnum);
// USING CLASSES
class ProductClass {
    constructor(name, price) {
        this.color = 'gray';
        this.name = name,
            this.price = price;
    }
    buy() {
        console.log(this.price);
        return this;
    }
}
const newShirt = new ProductClass('shirt deign', 30);
newShirt.size = SizesEnum.medium;
newShirt.color = 'green';
newShirt.buy();
// TYPE ASSERTIONS
function getNetPrice(price, discount, format) {
    let netPrice = price * (1 - discount);
    return format ? `$${netPrice}` : netPrice;
}
const netPrice = getNetPrice(10, 20, true);
const me = {
    name: 'Asgar',
    age: 24
};
const clone = (value) => {
    const json = JSON.stringify(value);
    return JSON.parse(json);
};
const books2 = ['sapiens', 'outliers', 'grit'];
const books2Clone = clone(books2);
books2Clone.push('cosmos');
// NARROWING
class Person3 {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
class Company3 {
    constructor(firstName) {
        this.firstName = firstName;
    }
}
function greet3(entity) {
    if (entity instanceof Person3) {
        console.log(`Hello ${entity.firstName} ${entity.lastName}`);
    }
    else {
        console.log(`Hello ${entity.firstName}`);
    }
}
greet3(new Person3('asgar', 'asgarov'));
greet3(new Company3('asgar'));
