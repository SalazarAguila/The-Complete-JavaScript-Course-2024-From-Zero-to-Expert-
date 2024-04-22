 function isValidPassword(username, password){
    if (password.length < 8){
        return false
    }
    else if (password.includes(" ")){
        return false
    }
    else if (password.includes(username) || username.includes(password)){
        return false
    }
    return true
 }
 console.log(isValidPassword("chicken", "chicken1234"))
 console.log(isValidPassword("chimcken", "chicken1234"))

////////////////////////////////////////////////////////////////
 function average(nums){
    let avg = 0
    for (let i of nums){
        avg += i
    }
    return avg/nums.length
 }
 console.log(average([75,76,80,95,100]))

///////////////////////////////////////////////////////////////
 function isPangram(sentence){
    let s = sentence.toLowerCase()
    for (let char of "abdcefghijklmnopqrstuvwxyz"){
        if (!s.includes(char)){
            return false
        }
    }
    return true
 }
 console.log(isPangram("The five boxing wizards jump quickly"))
 console.log(isPangram("The five boxing wizards jump quickl"))

/////////////////////////////////////////////////////////////
function rand(r){
    return r[Math.floor(Math.random()*r.length)]
}
function getCard() {
    v = ["1","2","3","4","5","6","7","8","9","10","J","Q","K","A"]
    s = ["CLUBS","SPADES","DIAMONDS","HEARTS"]
    return {value: rand(v), suit: rand(s)}
}
console.log(getCard())


