// Your code here
class Polygon {
 constructor(side) {
    this.side = side;
  }
  
  get countSides() {
    return (this.side).length
  }
  
  get perimeter(){
    let total = 0;
    for(let i = 0; i < this.countSides; i++){
      total += (this.side)[i];
    }
      return total
  }

}

class Triangle extends Polygon {
  get isValid() {
     if (this.countSides !== 3) return 
      let side1 = this.side[0]
    let side2 = this.side[1]
    let side3 = this.side[2]
    return ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1))
     
  }
}

class Square extends Polygon {
  get isValid() {
    if(this.countSides !== 4) return 
    let side1 = this.side[0]
    let side2 = this.side[1]
    let side3 = this.side[2]
    let side4 = this.side[3]
    return ((side1 === side2) && (side1 === side3) && (side1 === side4))
     
  }
  get area() {
    return (this.side)[0]**2
  }
}