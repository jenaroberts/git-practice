const fruits = ['apple', 'banana', 'orange', 'plum']
const groceries = ['milk', 'fish', 'beer']
const newArray = fruits.concat(groceries)


fruits.push('mango')
fruits.unshift('kiwi')

// function removeItems(){
// fruits.shift()
// fruits.pop()
// console.log(fruits)
// }
// removeItems()

// delete fruits[2]

console.log(fruits)

console.log(newArray)

console.log(newArray.sort())
console.log(newArray.reverse())


let indexOfApp = fruits.indexOf('apple')

console.log(indexOfApp)


const arrayInput = [1, 2, 3, 4, 5, 6, 7]
// const target = 3

function arrTest(arr, target){
    return arr.indexOf(target) !== -1
    }
    // console.log('Did we find the culprit ' + arrTest(arrayInput, 4567))
    let check = 0.1 + 0.2 == 0.3
    console.log(check)