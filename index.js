// Your code here
class Polygon {
    constructor(sides) {
        this.sides = sides
        this.count = this.sides.length
    }

    get countSides() {
        return this.sides.length
    }

	get perimeter(){
		return this.sides.reduce((side, total=0) => side + total)
	}
}

class Triangle extends Polygon {
	get isValid(){
		let valid = true
		for (let i=0; i<this.sides.length; i++) {
			let copy = this.sides.slice()
			copy.splice(i, 1)
			if (this.sides[i] > (copy[0] + copy[1])) {
				valid = false
			}
		}
		return valid
	}
}


class Square extends Polygon {
	get isValid() {
		let valid = false
		let first = this.sides[0]
		if (this.countSides === 4 && first === this.sides[1] && this.sides[1] === this.sides[2] && this.sides[2] === this.sides[3]) {
			valid = true
		}
		return valid
	}

	get area() {
		return this.sides[0]**2
	}
}