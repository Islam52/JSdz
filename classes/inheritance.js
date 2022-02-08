
class Mathematicks {
    constructor(a, b) {
        this.a = a
        this.b = b
    }

    calculateArea() {
        return this.a * this.b
    }
}

class Triangle extends Mathematicks {
    constructor(a, b, c) {
        super(a, b, c)
        this.c = c
    }

    calculateArea() {
        return this.a * this.b * this.c
    }
}

class Trapezia extends Triangle {
    calculateArea() {
        return (this.a + this.b) * this.c
    }
}

const square = new Mathematicks(100, 100)
const triangle = new Triangle(100, 100, 200)
const trapezia = new Trapezia(100, 100, 200)

console.log(square.calculateArea())
console.log(triangle.calculateArea())
console.log(trapezia.calculateArea())