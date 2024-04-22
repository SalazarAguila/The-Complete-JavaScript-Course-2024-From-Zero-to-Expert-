 ///////////////////////////// Default Parameters
 // The new super clean way of adding defaults!
function multiply(x, y = 1) {
    return x * y
}
console.log(multiply(3, 4)) //12
console.log(multiply(3)) //3

// Another example!
const greet1 = (person, greeting = "hi") => {
    console.log(`${greeting}, ${person}!`)
}

// Default value of an array:
const blah = (x, y = [1, 2, 3]) => {
    console.log(x, y)
}

// Multiple default values are possible, but rare
const greet2 = (person, greeting = "hi", punctuation = "!") => {
    console.log(`${greeting}, ${person} ${punctuation}`)
}

///////////////////////////// Spread
// Expands an iterable
const nums = [45,23,34,7,5]
const maxNums = Math.max(...nums)
console.log(maxNums)

// Create a new array using an existing array
const n1 = [1,2,3,4]
const n2 = [5,6,7,8]
const numbers = [...n1, ...n2, 9]
console.log(numbers)

// Create copy of an array with different reference
const numCopy = [...numbers]
console.log(numCopy)
console.log(numbers === numCopy)

// Copies objects properties
const feline = {
legs: 4,
family: 'Felidae'
};
const canine = {
family: 'Caninae',
furry: true,
legs: 4
};

const dog = {...canine, isPet: true, adorable: true}
console.log(dog)
const houseCat = {...feline, isGrumpy: true, 
    personality: 'unpredictable'}
console.log(houseCat)
const catDog = {...canine, ...feline}
console.log(catDog)
//Order matters! Legs will be 3 here, because we set it AFTER spreading canine.
const tripod = {...canine, legs: 3,}
console.log(tripod)
const catDogClone = {...catDog}
console.log(catDogClone)
const random = [...'hello', {...catDog}]
console.log(random)

///////////////////////////// Rest
// Make n number of arguments into array
function sum(...n){
    return n.reduce((total,currVal) => {
        return total + currVal
    })
}
console.log(sum(1,2,3,4,5))
// Collect remainting arguments
function winners(first, second, third, ...nonwinners) {
    console.log(first)
    console.log(second)
    console.log(third)
    console.log(nonwinners)
}
console.log(winners("a","b","c","d","e","f"))
// Used in arrow function
const mult = (...n) => (
    n.reduce((total,currVal) => total * currVal)
)
console.log(mult(1,2,3,4,5))

///////////////////////////// Destructuring
// ARRAYS
const raceResults = [
    'Eliud Kipchoge',
    'Feyisa Lelisa',
    'Galen Rupp',
    'Ghirmay Ghebreslassie',
    'Alphonce Simbu',
    'Jared Ward'
];
const [gold,silver,bronze] = raceResults
console.log(gold,silver,bronze)
// Skip indexes
const [firstP,,,fourth] = raceResults
console.log(firstP,fourth)
// Using rest
const [winner,...others] = raceResults
console.log(others)

// OBJECTS
const runner = {
    first: "Eliud",
    last: "Kipchoge",
    country: "Kenya",
    title: "Elder of the Order of the Golden Heart of Kenya"
}
// Must use the existing names, else undefined
const {first, last, time} = runner
// Can change name and use rest
const {country: nation, last: surname, ...other} = runner
console.log(first,last, time)
console.log(nation,surname,other)

// NESTED
const results = [{
    first: "Eliud",
    last: "Kipchoge",
    country: "Kenya",
  },
  {
    first: 'Feyisa',
    last: 'Lilesa',
    country: 'Ethiopia'
  },
  {
    first: 'Galen',
    last: 'Rupp',
    country: 'United States'
  }
]
const [,{first: goldWinner}, {country}] = results;
console.log(goldWinner,country)

// PARAMETERS