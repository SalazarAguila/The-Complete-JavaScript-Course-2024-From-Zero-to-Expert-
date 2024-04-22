const durationInput = document.getElementById("duration")
const startButton = document.getElementById("start")
const pauseButton = document.getElementById("pause")
const circle = document.querySelector("circle")

const perimeter = parseFloat(circle.getAttribute("r"))* 2 * Math.PI

circle.setAttribute("stroke-dasharray",perimeter)

let duration = 0
const timer = new Timer(durationInput, startButton, pauseButton, {
    onStart(totalDuration) {
        duration = totalDuration
    },
    onTick(timeRemaining) {
        circle.setAttribute("stroke-dashoffset",
        perimeter * timeRemaining / duration - perimeter)
    },
    onComplete() {
        console.log("Timer completed")
    }
})