/* const btn = document.getElementById("click")

btn.addEventListener("click", () => { alert("CLICKED") })
btn.addEventListener("mouseover",() => { 
    btn.innerText = "DON'T TOUCH ME"
})
btn.addEventListener("mouseout",() => { 
    btn.innerText = "CLICK ME"
}) */
const btn = document.getElementById("click")
btn.addEventListener("mouseover",() => { 
    const h = Math.floor(Math.random()*window.innerHeight)
    const w = Math.floor(Math.random()*window.innerWidth)
    btn.style.left = `${w}px`
    btn.style.top = `${h}px`
})
