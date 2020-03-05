// Your code here
class Polygon {
  constructor(sides) {
    this.sides = sides;
  }

  get countSides() {
    return this.sides.length;
  }

  get perimeter() {
    return this.sides.reduce((acc, curr) => acc + curr);
  }
}

class Triangle extends Polygon {
  get isValid() {
    if (this.countSides !== 3) return false;
    const [s1, s2, s3] = this.sides;
    return s1 + s2 > s3 && s1 + s3 > s2 && s2 + s3 > s1;
  }
}

class Square extends Polygon {
  get area() {
    return this.sides[0] ** 2;
  }

  get isValid() {
    if (this.countSides !== 4) return false;

    const [s1, s2, s3, s4] = this.sides;

    return s1 === s2 && s1 === s3 && s1 === s4;
  }
}