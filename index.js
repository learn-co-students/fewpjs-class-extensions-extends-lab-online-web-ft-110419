class Polygon {
    constructor(sides) {
        this.sides = sides
    }

    get countSides() {
        return this.sides.length
    }

    get perimeter() {
        return this.sides.reduce(function(accumulator, currentValue) { return accumulator + currentValue}, 0) 
    }
}

class Triangle extends Polygon {

    get isValid() {
        let ab = this.sides[0] + this.sides[1]
        let bc = this.sides[1] + this.sides[2]
        let ca = this.sides[2] + this.sides[0]

        if (ab > this.sides[2] && bc > this.sides[0] && ca > this.sides[1]) {
            return true
        } else {
            return false
        }
    } 
}

class Square extends Polygon {

    get isValid() {
        let a = this.sides
        if (a[0] === a[1] && a[1] === a[2] && a[2] === a[3] && a[3] === a[0]) {
            return true
        } else {
            return false
        }
    }

    get area() {
        return this.sides[0] ** 2
    }
}