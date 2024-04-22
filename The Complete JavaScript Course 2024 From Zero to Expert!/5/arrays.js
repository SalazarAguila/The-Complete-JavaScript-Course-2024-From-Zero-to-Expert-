// Use const instead of let to maintain pointer to reference
const shop = ["cheese","milk"]

// Add Last - Push
shop.push("eggs")

// Delete Last - Pop
shop.pop()

// Add Start - Unshift
shop.unshift("soap")

// Delete Start - Shift
shop.shift()

//-- shop = ["soap","cheese","milk","eggs"] --//

// Merge two arrays - Concat
// MUST CREATE NEW VARIABLE
const veggies = ["tomato","lettuce"]
shop.concat(veggies) // ["soap","cheese","milk","eggs","tomato","lettuce"]
veggies.concat(shop) // ["tomato","lettuce","soap","cheese","milk","eggs"]

// Search for value
shop.includes("cheese")     // True
shop.includes("donut")      // False
shop.includes("cheese", 0)  // True
shop.includes("cheese", 2)  // False

// Find index
shop.indexOf("milk")    // 1
shop.indexOf("donut")   // -1

// Reverse list
shop.reverse()

// Join objects to string
shop.join()        //"soap,cheese,milk,eggs"
shop.join(" ")     //"soap cheese milk eggs"
shop.join("-->")   //"soap-->cheese-->milk-->eggs"

// Take part of array
shop.slice(0,3)     // ["soap","cheese","milk"]
shop.slice(3)       // ["milk","eggs"]
shop.slice(-3)      // ["cheese","milk","eggs"]
const copy = shop.slice   // Create copy

// Modify middle array
shop.splice(1,0,"lemons")   // ["soap","lemons","cheese","milk","eggs"]
shop.splice(1,2,"lemons","donuts")   // ["soap","lemons","donuts","eggs"]

// Sort
shop.sort()     //["cheese","eggs","milk","soap"]
let nums = [1, 45, 1000, 3, 10]
nums.sort()     //[1, 10, 1000, 3 ,45]




