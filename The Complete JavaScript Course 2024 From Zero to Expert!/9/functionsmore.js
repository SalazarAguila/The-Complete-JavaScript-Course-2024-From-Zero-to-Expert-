function add(x, y) {
    return x + y
  }
  
  const subtract = function (x, y) {
    return x - y
  }
  
  function multiply(x, y) {
    return x * y
  }
  
  const divide = function (x, y) {
    return x / y
  }
  
  //We can store functions in an array!
  const operations = [add, subtract, multiply, divide]
  
  //Loop over all the functions in operations
  for (let func of operations) {
    let result = func(30, 5) //execute func!
    console.log(result)
  }
  
  // METHOD
  // We can also store functions in objects!
  const thing = {
    doSomething: multiply
  }
  thing.doSomething(4, 5) //20

  // CALLBACKS
  // TimeOut/Anonymus Functions
  setTimeout(function() {
    alert("This is an alert!")
  }, 5000)

  const btn = document.querySelector("button")
  btn.addEventListener("click",function() {
    alert("This is a BUTTON!")
  })
