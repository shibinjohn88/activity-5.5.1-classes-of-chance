class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    brag() {
        console.log("My car is a " + this.year + " " + 
             this.brand + " " + this.model + "!");
    }
}

const myCoolCar = new Car("Ford", "Mustang", 2022);
myCoolCar.brag();

class Calculator {
    addNums(num1, num2) {
        return (num1 + num2);
    }
}

const calc = new Calculator();
let sum = calc.addNums(7,33);
console.log(sum)

