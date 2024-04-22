///////////////////////////// This
const celebrity  = {
    first: 'Cherilyn',
    last: 'Sarkisian',
    nickName: 'Cher',
    fullName() {
      //In a method, this refers to the object the method "lives" in:
      const {
        first,
        last,
        nickName
      } = this;
      return `${first} ${last } AKA ${nickName}`;
    },
    printBio() {
      const fullName = this.fullName();
      console.log(`${fullName} is a person!`)
    }
}

const annoyer = {
    phrases: ["literally", "cray cray", "I can't even",
        "Totes!", "YOLO", "Can't Stop, Won't Stop"],
    pickPhrase() {
      const {
        phrases
      } = this;
      const idx = Math.floor(Math.random() * phrases.length);
      return phrases[idx]
    },
    start() {
      //Use an arrow function to avoid getting a different 'this':
      this.timerId = setInterval(() => {
        console.log(this.pickPhrase())
      }, 3000)
    },
    stop() {
      clearInterval(this.timerId);
      console.log("PHEW THANK HEAVENS THAT IS OVER!")
    }
  }