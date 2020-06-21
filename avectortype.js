class Vec {
    constructor(x,y,a,b){
        this.x = x;
        this.y = y;
       
    }
    get sum (other){
        return [(this.x+other.a) , (this.y+other.b)]
    }
    get minus(other){
        return [(this.x-other.a), (this.y-other.b)]
    }
    get length(){return Math.sqrt((this.x*this.x+this.y*this.y));

    }
}
let i = new Vec(23,45);
console.log(i.length, i.minus(90,45), i.sum(57,92));
let au = new Vec(231,567);
console.log(au);