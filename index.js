// Your code here
class Polygon {
  constructor(arry) {
    this.sides = arry;
  }

  get countSides() {
    return this.sides.length;
  }

  get perimeter() {
    return this.sides.reduce((sum, num) => sum + num);
  }
}

class Triangle extends Polygon {
  get isValid() {
    let [a, b, c] = this.sides;
    return a + b > c && a + c > b && c + b > a;
  }
}

class Square extends Polygon {
  get area() {
    return this.sides[0] * this.sides[1];
  }

  get isValid() {
    let [a, b, c, d] = this.sides;
    return this.sides.every(num => num == a);
  }
}
