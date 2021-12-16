//number
let id: number = 1
//string
let company: string = 'Mega'
//boolean
let isActive: boolean = true
//any
let x: any = 'Hi'
//array of numbers
let ids: number[] = [1, 2, 3, 4, 5]
//mixed array
let arr: any[] = [1, true, 'Hello']
//tuple
let person: [string, number, boolean] = ['Sam', 30, true]
//tupple array
let employee: [number, string][]
employee = [
    [1, 'Sam'],
    [2, 'Benjamin'],
    [3, 'John']
]
//union
let pid: string | number
pid = 22

//Enum numbers
enum Direction {
    Up = 1,
        Down,
        Left,
        Right
}
//Enum String
enum Direction1 {
    Up = 'up',
        Down = 'down',
        Left = 'left',
        Right = 'right'
}

//objects

let user:{
    name: string,
    age: number,
} ={
    name: 'Sam', 
    age: 10
}

type Employee = {
    id: number
    name: string
}

const employee1: Employee ={
    id: 1,
    name: 'John',
}

//type assertion 

let cid: any = 1
let customerId = <number> cid
let customersId = cid as number

//functions

function sum(a: number, b: number): number {
    return a + b
}
// console.log(sum(1,2))

function printMessage( msg: string|number):void {
    console.log(msg)
}


//interfaces
// field can be optional using ?
// field can be readonly
interface Person{
    readonly id: number,
    name: string,
    country ?: string
}
const mother: Person ={
    id: 1,
    name: "Mary",
    country: "United States"
}
const father: Person ={
    id: 1,
    name: "John",

}

console.log(mother)
console.log(father)




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
