import { Particle } from "./particle.js";
import { getRandomInt, getRandomArbitrary } from "./utils.js";
import * as Geometry from "./geometry.js";

class Emitter {

    /**
     * 
     * @param {EmitterBuilder} emitterBuilder 
     */
    constructor(emitterBuilder) {
        this.amount = emitterBuilder.amount;
        this.size = emitterBuilder.size;
        this.spawningBox = emitterBuilder.spawningBox;
        this.style = emitterBuilder.style;
        this.particleMaker = emitterBuilder.particleMaker;
        this.particleSizeControl = emitterBuilder.particleSizeControl;
        this.particleVelControl = emitterBuilder.particleVelControl;
        this.particleAccControl = emitterBuilder.particleAccControl;
        this.particleResetTesterControl = emitterBuilder.particleResetTesterControl;
        this.particleResetControl = emitterBuilder.particleResetControl;
        /**
         * @type {Particle[]}
         */
        this.particles = [];
        for(let i = 0; i < this.amount; i++) {
            this.particles.push( this.particleMaker(this));
        }
    }

    update() {
        for(let particle of this.particles) {
            if(this.particleResetTesterControl(particle,this)) {
                this.particleResetControl(particle,this);
            } else {
                this.particleSizeControl(particle,this);
                this.particleAccControl(particle,this);
                this.particleVelControl(particle,this);
                particle.update();
            }
        }
    }

    draw(canvas) {
        canvas.CTX.fillStyle = this.style;
        for(let particle of this.particles) {
            particle.draw(canvas);
        }
    }
}

class EmitterBuilder {

    constructor() {
        this.amount = 100;
        this.size = 4;
        this.style = "#222222";
        this.spawningBox = new Geometry.BoundingBox([
            new Geometry.Point(0, 0)
        ]);
        this.particleMaker = EmitterBuilder.Controllers.makeParticle;
        this.particleSizeControl = EmitterBuilder.Controllers.randomSizeReduction;
        this.particleAccControl = EmitterBuilder.Controllers.randomAcc;
        this.particleVelControl = EmitterBuilder.Controllers.velLimiter;
        this.particleResetTesterControl = EmitterBuilder.Controllers.isSmallEnough;
        this.particleResetControl = EmitterBuilder.Controllers.resetParticle;
    }

    build() {
        return new Emitter(this);
    }
}

EmitterBuilder.Controllers = {};

EmitterBuilder.Controllers.randomAcc = /**
 * 
 * @param {Particle} particle 
 * @param {Emitter} emitter 
 */  function randomAcc(particle, emitter) {
        var randomAccX = getRandomArbitrary(-0.5 / 12, 0.5 / 12);
        particle.acc.x = randomAccX;
    };

EmitterBuilder.Controllers.velLimiter = /**
 * 
 * @param {Particle} particle 
 * @param {Emitter} emitter 
 */function velLimiter(particle, emitter) {
        particle.acc.x = Math.abs(particle.vel.x + particle.acc.x) < 0.4 ? particle.acc.x : 0;
    }

EmitterBuilder.Controllers.randomSizeReduction = /**
 * 
 * @param {Particle} particle 
 * @param {Emitter} emitter
 */ function randomSizeReduction(particle, emitter) {
        let size = particle.size - getRandomArbitrary(0, 1 / 100);
        particle.size = size < 0 ? 0 : size;
    }

EmitterBuilder.Controllers.isSmallEnough = /**
 * 
 * @param {Particle} particle 
 * @param {Emitter} emitter 
 */ function isSmallEnough(particle, emitter) {
        return particle.size === 0;
    }

EmitterBuilder.Controllers.resetParticle = /**
 * 
 * @param {Particle} particle 
 * @param {Emitter} emitter 
 */ function resetParticle(particle, emitter) {

        let location = particle.location;
        let velocity = particle.vel;
        let accelaration = particle.acc;
        let spawningBox = emitter.spawningBox;
        let size = emitter.size;

        let randomSize = getRandomArbitrary(size / 3, size);
        let randomX = getRandomInt(spawningBox.xMin, spawningBox.xMax);
        let randomY = getRandomInt(spawningBox.yMin, spawningBox.yMax);

        location.x = randomX;
        location.y = randomY;
        velocity.x = 0;
        accelaration.x = 0;
        particle.size = randomSize;
    }

EmitterBuilder.Controllers.makeParticle = /**
 * 
 * @param {Emitter} emitter 
 */function makeParticle(emitter) {

        let spawningBox = emitter.spawningBox;
        let size = emitter.size;

        let randomSize = getRandomArbitrary(size / 3, size);
        let randomX = getRandomInt(spawningBox.xMin, spawningBox.xMax);
        let randomY = getRandomInt(spawningBox.yMin, spawningBox.yMax);

        let location = new Geometry.Point(randomX, randomY);
        let velocity = new Geometry.Vector(0, -1);
        let acc = new Geometry.Vector(0, 0);

        return new Particle(randomSize,location,velocity,acc);
    }

export {
    Emitter,
    EmitterBuilder
}