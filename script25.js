function isObjectEmpty(obj) {
    for(const key in obj) {
      if(obj.property(key))
        return false;
    }
    return true;
}

const user = {
    name: "Василь",
    age: 25,
    sayHello: function() {
      return `Привіт, я ${this.name}, мені ${this.age} років.`;
    }
}

const calculator = {
    x: null,
    y: null,
  
    ask: function() {
      this.x = Number(prompt("Введіть перше число:"));
      this.y = Number(prompt("Введіть друге число:"));
    },
  
    sum: function() {
      return this.x + this.y;
    },
  
    mul: function() {
      return this.x * this.y;
    }
}

calculator.ask();
console.log(calculator.sum());
console.log(calculator.mul());

