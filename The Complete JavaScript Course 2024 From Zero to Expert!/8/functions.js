 function myName(n) {
    console.log("Hello")
    console.log(`My name is ${n}`)
 }
 myName("Paulina")

 function rollDie() {
    let roll = Math.floor(Math.random() * 6) + 1
    console.log(`Rolled: ${roll}`)
 }
 rollDie()

 function sum(x, y) {
    return x+y
 }
 let add = sum(1, 4)
 console.log(add)