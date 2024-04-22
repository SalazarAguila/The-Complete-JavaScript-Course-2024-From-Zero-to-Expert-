for (let i = 0; i<10; i++){
    console.log(i)
}

let j = 0
while (j <= 5){
    console.log(j)
    j++
}

let dic = ["a","b","c"]
for (let d of dic) {
    console.log(d)
}
for (let char of "abcd") {
    console.log(char)
}

const objData = {
    username : "PauEagle",
    totalSteps : 1505,
    totalCalories : 130.02,
    weekWorkout : "5 of 7",
    45 : "forty five",
    exams : {
        midterm : 85,
        final : 92
    },
    colors : ["red","blue"]
}
for (let key in objData){
    console.log(key, objData[key])
}