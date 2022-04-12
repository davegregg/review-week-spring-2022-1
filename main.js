console.log("it is running")

// Simulate the "undo" feature for a document editor
let historyStack = [
    "add word 'poop'",
    "delete word 'couch'",
    "delete word 'pet'",
    "add word 'ghost'",
    "changed text color to red",
]

// let redoStack = []
while (historyStack.length > 0) {
    let actionToBeUndone = historyStack.pop()
    // ... undo the action
    console.log("One action undone:", actionToBeUndone)

    redoStack.push(actionToBeUndone)
}

let count = 0
while (count < 10) {
    console.log(count)
    count += 1
}

// ... rest of the code ...

let numbers = [5, 3, 4.2, 9, 9.1, -4, -2, 0, 0.12]

Math.max(...numbers)



// How to copy an array?

// Loop through an array and push to a new array

let oldArray = ["raven", "marmot", "merganser", "ocelot"]
let newArray1 = oldArray.slice()
let newArray2 = [...oldArray]
let newArray3 = Array.from(oldArray)
let newArray4 = [].concat(oldArray)
let newArray5 = oldArray.map(item => item)
let newArray6 = JSON.parse(JSON.stringify(oldArray))

// let arrowFunction1 = item => item
// let standardFunction1 = function (item) {
//     return item
// }

// for (let index = 0; index < pets.length; index += 1) {
//     newArray.push(pets[index])
// }

let a1 = [1, 2, 3]
let a2 = [1, 2, 3]

let arraysAreShallowClones = function (array1, array2) {
    if (array1 === array2) {
        return false
    }

    if (array1.length !== array2.length) {
        return false
    }

    for (let index = 0; index < array1.length; index += 1) {
        let itemFrom1 = array1[index]
        let itemFrom2 = array2[index]

        if (itemFrom1 !== itemFrom2) {
            return false
        }
    }

    return true
}

let arraysAreDeepClones = function (array1, array2) {
    let jsonOf1 = JSON.stringify(array1)
    let jsonOf2 = JSON.stringify(array2)

    return (jsonOf1 === jsonOf2)
}




add(1, 2) // would give an error
multiply(1, 2) // would NOT give an error

// Function expressions
let add = function (x, y) {
    return x + y
}

// Function statements
function multiply (x, y) {
    return x * y
}

/* Arrow functions
   - Note the difference between the "fat arrow" (=>) and the greater-than-or-equal-to sign (>=).
   - If the arrow function can fit on one line and has only one little expression, then the curly braces and "return" keyword become optional.
   - If the arrow function has EXACTLY ONE input parameter, then the parentheses become optional.
*/

let subtractA = (x, y) => {
    return x - y
}

let subtractB = (x, y) => x - y

let log = thing => {
    console.log(thing)
}

let subtractTwo = x => x - 2

let getRandomInteger = () => {
    return Math.floor(Math.random() * 10)
}

let isEven = num => num % 2 === 0

isEven(4)
isEven(3)

