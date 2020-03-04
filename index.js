// Your code here

class Polygon{
    constructor(sides){
        this.sides = sides;
        this.count = this.sides.length;
    }

    get countSides(){
        return this.sides.length;
    }

    get perimeter(){
        //reduce?
        return this.sides.reduce((acc, side) => acc + side, 0)
    }
}

class Triangle extends Polygon{

    get isValid(){
        if (this.sides.length === 3 && (this.sides[0] + this.sides[1] > this.sides[2]) && (this.sides[1] + this.sides[2] > this.sides[0]) && (this.sides[2] + this.sides[0] > this.sides[1]))  {
            return true;
        } else {
            return false;
        }
    }
}

class Square extends Polygon{
    get isValid(){
        //            this._sides.reduce((memo, side) => memo + side, 0) === this._sides[0] * 4;
        if (this.sides[0] === this.sides[1] && this.sides[1] === this.sides[2] && this.sides[2] === this.sides[3]) {
            return true;
        } else {
            return false;
        }
    }
    get area(){
        // if (this.isValid()){}
        return this.sides[0] * this.sides[1];
    }


}