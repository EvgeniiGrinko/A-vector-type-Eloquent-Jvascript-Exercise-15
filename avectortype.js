class Vec {
    constructor(x,y,){
        this.x = x;
        this.y = y;
       
    }
    sum (other){
        return new Vec (this.x+other.x,this.y+other.y);
    }
    minus(other){
        return new Vec(this.x-other.x, this.y-other.y);
    }
    get length(){return Math.sqrt((this.x*this.x+this.y*this.y));

    }
}
let i = new Vec(23,45);
console.log(i.length, new Vec(12,73).minus(new Vec(28,101)), new Vec(77,88).sum(new Vec(56,73)) );
