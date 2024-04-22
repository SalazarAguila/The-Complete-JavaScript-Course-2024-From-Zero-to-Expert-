// CALBACK FUNCTIONS FOR ARRAYS

///////////////////////////// forEach
const numbers = [1,2,3,4,5,6]

numbers.forEach(function(n) {
    console.log(n*2)
})
// OR
function printDouble(n){
    console.log(n*2)
}
numbers.forEach(printDouble)
// Obtain index
numbers.forEach(function(n,i){
    console.log(i,n)
})

///////////////////////////// Map
const sumNum = numbers.map(function(n){
    return (n+1)
})
console.log(sumNum)

const evenOdd = numbers.map(function(n){
    return {
        value: n, isEven: n%2 === 0
    }
})
console.log(evenOdd)

///////////////////////////// Arrow Functions
const sum = function(x, y) {
    return x + y
}
const sumArrow = (x, y) => {
    return x + y
}
const greet = () => {
    console.log("Hi!")
}
///////// Implicit Return on Arrow Functions
// Must a single expression
const square = (n) => (n * n)
const cube = (n) => (n*n*n)
const doubles = numbers.map(n => n*2)
console.log(doubles)

const parityList = numbers.map(n => 
    n%2 === 0 ? "even" : "odd"
)
console.log(parityList)

///////////////////////////// Find
const names = ["Oscar","Leo","Jackson","Simon","Peter"]
// Only finds 1st
const name = names.find( n => n.includes("i"))
console.log(name)

///////////////////////////// Filter
// True or false filtering
const odd = numbers.filter( n => n%2 === 1)
console.log(odd)

///////////////////////////// Every
// AND elements test
const primary = numbers.every( n => n < 10 && n > -1)
console.log(primary)
const moreNumbers = [1,2,3,4,5,6,7,8,9,10,11,12]
const morePrimary = moreNumbers.every( n => n < 10 && n > -1)
console.log(morePrimary)

///////////////////////////// Some
// OR elements test
const somePrimary = numbers.some( n => n < 10 && n > -1)
console.log(somePrimary)
const someMorePrimary = moreNumbers.some( n => n < 10 && n > -1)
console.log(someMorePrimary)

///////////////////////////// Sort
const sorting = [100,1,134,542,5.63,432.4,34]
const sort1 = sorting.slice().sort((a,b) => a-b)
console.log(sort1)
const sort2 = sorting.slice() .sort((a,b) => b-a)
console.log(sort2)

///////////////////////////// Reduce
// Results in a single variable
const reduceSum = numbers.reduce((total,currVal) => total+currVal)
console.log(reduceSum)
const maxVal = sorting.reduce((max,currVal) => Math.max(max,currVal))
console.log(maxVal)
// Initial Value
const newSum = numbers.reduce((total,currVal) => total+currVal,100)
console.log(newSum)

const votes = ['y', 'y', 'n', 'y', 'n', 'y', 'n', 'y', 'n', 'n', 'n', 'y', 'y'];

 const results1 = votes.reduce((tally, val) => {
   if (tally[val]) {
     tally[val]++
   } else {
     tally[val] = 1;
   }
   return tally;
 }, {})
 console.log(results1)
// The shorter version:
const results2 = votes.reduce((tally, val) => {
  tally[val] = (tally[val] || 0) + 1;
  return tally;
}, {});
console.log(results2)