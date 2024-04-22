///////////////////////////// Shorthand Sintax
const getStats = (arr) => {
    const max = Math.max(...arr)
    const min = Math.min(...arr)
    const sum = arr.reduce((sum, r) => sum + r)
    const avg = sum / arr.length
    // Using the new shorthand property syntax:
    return { max, min, sum, avg }
}
const reviews = [4.5, 5.0, 3.44, 2.8, 3.5, 4.0, 3.5]
console.log(getStats(reviews))

///////////////////////////// Computer Properties
const role = "host"
const person = "John"
const role2 = "director"
const person2 = "Maurice"

const team = {
    [role] : person,
    [role2] : person2
}
console.log(team)

///////////////////////////// Methods
const math = {
    add : function(x,y) {
        return x+y
    },
    multiply : function(x,y) {
        return x*y
    }
}
console.log(math.add, math.multiply)

// SHORTHAND
const auth = {
    username: "Eagle",
    login() {
        console.log("Logged In")
    },
    logout() {
        console.log("Logged Out")
    }
}

