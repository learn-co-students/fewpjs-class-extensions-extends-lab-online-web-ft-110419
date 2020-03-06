class Polygon {
    constructor(sidesArray) {
        this.sidesArray = sidesArray
    }
    get countSides(){
        return this.sidesArray.length
    }

    get perimeter() {
        const reducer = (a, b) => a + b
        return this.sidesArray.reduce(reducer)
    }
}

class Triangle extends Polygon{
    
    get isValid() {
        let [a,b,c] = this.sidesArray
        if (this.countSides == 3 && a+b>c && a+c>b && b+c>a) {
            return true
        } else {
            return false
        }
    }
}

class Square extends Polygon {
    
    get isValid() {
        let [a,b,c,d] = this.sidesArray
        if (a==b && c==d && b==c && a==d) {
            return true
        } else {
            return false
        }
    }

    get area(){
        return this.sidesArray[0] * this.sidesArray[0]  
    }

}