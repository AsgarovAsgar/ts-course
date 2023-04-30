// TS playground
// primitive data types:
// let myNumber = 2 // implicit
let myNumber: number = 2 // explicit
myNumber = 3

let myString: string = 'test'
myString = 'string'

let myBoolean: boolean = true
myBoolean = false

let canBeAnything: any = true // not recommended
canBeAnything = 'strinee'

// complex data types
// const books = ['Outliers', 'Why we sleep', 'Sapiens'] // implicit
const books: string[] = ['Outliers', 'Why we sleep', 'Sapiens'] // explicit
// books.push(2) // you cannot add number to the string Array
books.push('Thinking fast and slow') // you can do it

// functions
function sum(x:number, y:number) { // function parameters have type 'any' implicitly
    return x + y
}
console.log('2' + 2) //will not work
console.log(2 + 2) //will work

function multi({x, y} : {x:number, y: number}) : number { // when we send them as an object
    return x * y
}
console.log(multi({ x: 2, y: 3 }))

function logAnything(value: any): void { // void means the function does not return anything
    console.log(value)
}

function greet(name?: string) : void { // ? means the paramater is optional
    if(name) { console.log(`hello ${name}`) }
    else { console.log('Hello stranger') }
}
greet('asgar')

// UNION types => means variable can have many types
let booleanOrString: string | boolean = 'hello'
booleanOrString = true // will not work if we've defined one type

function printId(id: number | string) : void {
    if(typeof id === 'string') { // narrowing
        console.log(id.toUpperCase())
    } else {
        console.log(id)
    }
}

// LITERAL types => means variable can only be specified types
function setProductSize(size: 'small' | 'medium' | 'large') {
    // ...
}

// setProductSize('huge') // will not work. size param can only be small, medium, large

// TYPE ALIASES
type Sizes = 'small' | 'medium' | 'large'
function setProductSizeAlias(size: Sizes) {
    // ...
}
setProductSizeAlias('small') // works well

// examples for type aliases
type myString = string
type successCode = 1 | string // not used much

type Product = { // best practice is to use type INTERFACES with objects
    name: string,
    price: number
}

const tshirt : Product = {
    name: 'myTshirt',
    price: 10
}

// INTERFACES
interface InventoryItem {
    name: string,
    price: number,
}

interface ProductInter extends InventoryItem {
    color?: string // ? means this property is optional
}

interface Service extends InventoryItem {
    startTime: Date,
    endTime: Date
}

const shirt : ProductInter = {
    name: 'shirt',
    price: 20,
    color: 'red'
}

const photoShoot : Service = {
    name: 'Wedding photo',
    price: 30,
    startTime: new Date(),
    endTime: new Date(),
}

function purchaseItem(item: InventoryItem) : InventoryItem {
    console.log(item)
    return item
}
purchaseItem({
    name: 'itemName',
    price: 10
})

// ENUMS
// enum SizesEnum {
//     small = 'small',
//     medium = 'medium'
//     large = 'large'
// }
enum SizesEnum {
    small, // 0
    medium, // 1
    large // 2
}

console.log(SizesEnum)

// USING CLASSES
class ProductClass {
    name: string
    price: number
    color: string = 'gray'
    size: SizesEnum | undefined

    constructor(name: string, price: number) {
        this.name = name,
        this.price = price
    }
    buy(): this{
        console.log(this.price)
        return this
    }
}

const newShirt = new ProductClass('shirt deign', 30)
newShirt.size = SizesEnum.medium
newShirt.color = 'green'
newShirt.buy()

// TYPE ASSERTIONS
function getNetPrice(price: number, discount: number, format: boolean): number | string {
  let netPrice = price * (1 - discount)
  return format ? `$${netPrice}` : netPrice
}

const netPrice = getNetPrice(10, 20, true) as string
// const netPrice = <string> getNetPrice(10, 20, true)

// GENERICS IN TS
interface Person {
  name: string,
  age: number
}

const me:Person = {
  name: 'Asgar',
  age: 24
}

const clone = <Type> (value: Type) : Type => {
  const json = JSON.stringify(value)
  return JSON.parse(json)
}

const books2: string[] = ['sapiens', 'outliers', 'grit']
const books2Clone = clone(books2)

books2Clone.push('cosmos')

// NARROWING
class Person3 {
  firstName: string
  lastName: string
  constructor(firstName: string, lastName: string) {
      this.firstName = firstName
      this.lastName = lastName
  }
}

class Company3 {
  firstName: string
  constructor(firstName: string) {
      this.firstName = firstName
  }
}

function greet3(entity: Person3 | Company3): void {
  if (entity instanceof Person3) {
      console.log(`Hello ${entity.firstName} ${entity.lastName}`)
  } else {
      console.log(`Hello ${entity.firstName}`)
  }
}

greet3(new Person3('asgar', 'asgarov'))
greet3(new Company3('asgar'))