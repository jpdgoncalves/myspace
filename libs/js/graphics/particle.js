import * as Geometry from "./geometry.js";

class Particle {

    /**
     * 
     * @param {Geometry.Point} location 
     * @param {number} size
     * @param {Geometry.Vector} [vel] 
     * @param {Geometry.Vector} [acc] 
     */
    constructor(size,location,vel,acc) {
        this.location = location;
        this.size = size;

        this.vel = vel ? vel : new Geometry.Vector(0,0);
        this.acc = acc ? acc : new Geometry.Vector(0,0);
    }

    update() {
        this.vel.destructiveSum(this.acc);
        this.location.destructiveMove(this.vel);
    }

    draw(canvas) {
        canvas.drawCircle(this.location.x, this.location.y, this.size);        
    }
}

export {Particle};