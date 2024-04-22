// js object = python hash table 
// key : value

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

console.log(objData.username)

// keys are converted into STRINGS
console.log(objData["45"])

// Adding or modifying keys
objData["dayOfWeek"] = "Wednesday"
// OR
objData.dayOfMonth = 21

// Nested arrays or objects
const avg = (objData.exams.midterm +  objData.exams.final)/2
console.log(objData.colors[1])
