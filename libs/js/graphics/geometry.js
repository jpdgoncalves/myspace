/**
 * 
 * @param {Point} point1 
 * @param {Point} point2 
 */
function calculateVector(point1,point2) {
    let x = point2.x - point1.x;
    let y = point2.y - point1.y;
    return new Vector(x,y);
}
/**
 * 
 * @param {Point} point1 
 * @param {Point} point2 
 */
function calculateDistance(point1,point2) {
    let xDistance = point2.x - point1.x;
    let yDistance = point2.y - point1.y;
    return Math.sqrt( Math.pow(xDistance,2) + Math.pow(yDistance,2) );
}
/**
 * 
 * @param {Point[]} points 
 */
function pointsAsNumberPairs(points) {
    return points.map(function(point) {
        return [point.x,point.y];
    });
}
/**
 * 
 * @param {[number,number][]} numberPairs 
 */
function numberPairsAsPoints(numberPairs) {
    return numberPairs.map(function(numberPair) {
        return new Point(numberPair[0],numberPair[1]);
    });
}

/**
 * 
 * @param {Point[]} points
 * @returns {{xMax: number, xMin: number, yMax: number, yMin: number}} 
 */
function maxMinCoords(points) {
    return points.reduce(function(accum,value) {
        if(accum.xMin === undefined) {
            accum.xMin = value.x;
        } else {
            accum.xMin = Math.min(accum.xMin, value.x);
        }

        if(accum.xMax === undefined) {
            accum.xMax = value.x;
        } else {
            accum.xMax = Math.max(accum.xMax, value.x);
        }

        if(accum.yMin === undefined) {
            accum.yMin = value.y;
        } else {
            accum.yMin = Math.min(accum.yMin, value.y);
        }

        if(accum.yMax === undefined) {
            accum.yMax = value.y;
        } else {
            accum.yMax = Math.max(accum.yMax, value.y);
        }

        return accum;
    },{});
}

class Point {

    /**
     * 
     * @param {number} x 
     * @param {number} y 
     */
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }

    /**
     * 
     * @param {Point} point 
     */
    equals(point) {
        return this.x == point.x && this.y == point.y;
    }

    /**
     * 
     * @param {Vector} vector 
     */
    move(vector) {
        let x = this.x + vector.x;
        let y = this.y + vector.y;
        return new Point(x,y);
    }

    /**
     * 
     * @param {Vector} vector 
     */
    destructiveMove(vector) {
        this.x += vector.x;
        this.y += vector.y;
        return this;
    }

    /**
     * @returns {[number,number]}
     */
    asArray() {
        return [this.x,this.y];
    }
}

class Vector {

    constructor(x,y) {
        this.x = x;
        this.y = y;
    }

    /**
     * 
     * @param {Vector} vector 
     */
    equivalent(vector) {
        return this.x / vector.x === this.y / vector.y;
    }

    /**
     * 
     * @param {Vector} vector 
     */
    sum(vector) {
        let x = this.x + vector.x;
        let y = this.y + vector.y;
        return new Vector(x,y);
    }

    /**
     * 
     * @param {Vector} vector 
     */
    destructiveSum(vector) {
        this.x += vector.x;
        this.y += vector.y;
        return this;
    }

    /**
     * @returns {[number,number]}
     */
    asArray() {
        return [this.x,this.y];
    }
}

class BoundingBox {

    /**
     * 
     * @param {Point[]} points 
     */
    constructor(points) {
        let maxMins = maxMinCoords(points);
        this.xMin = maxMins.xMin;
        this.xMax = maxMins.xMax;
        this.yMin = maxMins.yMin;
        this.yMax = maxMins.yMax;
    }

    /**
     * 
     * @param {Point} point 
     */
    contains(point) {
        return this.xMin <= point.x
        && this.xMax >= point.x
        && this.yMin <= point.y
        && this.yMax >= point.y;
    }

    asArray() {
        return [
            [this.xMin,this.yMin],
            [this.xMin,this.yMax],
            [this.xMax,this.yMax],
            [this.xMax,this.yMin]
        ];
    }
}

class Figure {

    /**
     * 
     * @param {Point[]} points 
     */
    constructor(points) {
        this.points = points.map((point) => new Point( point.x, point.y));
        /**
         * @type {Segment[]}
         */
        this.segments = [];
        this.boudingBox = new BoundingBox(points);

        for(let i = 0, j = points.length-1; i < points.length; j = i++) {
            this.segments.push(new Segment( points[j], points[i]));
        }
    }

    /**
     * 
     * @param {Point} point
     * @returns {number}
     */
    isPointInside(point) {
        if(!this.boudingBox.contains(point)) return false;

        let horizontal_line = new Segment(point, new Point(point.x+1,point.y));
        let intersections = 0;

        for(let segment of this.segments) {
            if(segment.interWithLine(horizontal_line)) {
                intersections++;
            }
        }

        return intersections && 1 ? true : false;
    }

    asArray() {
        return this.points.map((point) => [point.x,point.y]);
    }

}

class Segment {

    /**
     * 
     * @param {Point} startingPoint  
     * @param {Point} endingPoint 
     */
    constructor(startingPoint,endingPoint) {
        this.startingPoint = new Point(startingPoint.x, startingPoint.y);
        this.endingPoint = new Point(endingPoint.x, endingPoint.y);
    }

    /**
     * 
     * @param {Segment} segment 
     */
    interWithSeg(segment) {
        const x1 = this.startingPoint.x, y1 = this.startingPoint.y;
        const x2 = this.endingPoint.x, y2 = this.endingPoint.y;
        const x3 = segment.startingPoint.x, y3 = segment.startingPoint.y;
        const x4 = segment.endingPoint.x, y4 = segment.endingPoint.y;
        
        const den = (x1-x2) * (y3-y4) - (y1-y2) * (x3-x4);
        if (den === 0) return undefined;

        const t = ( (x1-x3) * (y3-y4) - (y1-y3) * (x3-x4) ) / den;
        const u = -( ( (x1-x2) * (y1-y3) - (y1-y2) * (x1-x3) ) / den );

        return (t >= 0 && t <= 1 && u >= 0 && u <= u) ? new Point( x1 - t * (x2-x1), y1 - t * (y2-y1)) : undefined;
    }

    /**
     * 
     * @param {Segment} segment 
     */
    interWithLine(segment) {
        const x1 = this.startingPoint.x, y1 = this.startingPoint.y;
        const x2 = this.endingPoint.x, y2 = this.endingPoint.y;
        const x3 = segment.startingPoint.x, y3 = segment.startingPoint.y;
        const x4 = segment.endingPoint.x, y4 = segment.endingPoint.y;
        
        const den = (x1-x2) * (y3-y4) - (y1-y2) * (x3-x4);
        if (den === 0) return undefined;

        const t = ( (x1-x3) * (y3-y4) - (y1-y3) * (x3-x4) ) / den;
        const u = -( ( (x1-x2) * (y1-y3) - (y1-y2) * (x1-x3) ) / den );
        return (t >= 0 && t <= 1 && u >= 0) ? new Point( x1 - t * (x2-x1), y1 - t * (y2-y1)) : undefined;
    }

    /**
     * 
     * @param {Point} point 
     */
    containsPoint(point) {
        const x = point.x;
        const y = point.y;
        const x1 = this.startingPoint.x;
        const y1 = this.startingPoint.y;
        const x2 = this.endingPoint.x;
        const y2 = this.endingPoint.y;

        const dx = x2 - x1;
        const dy = y2 - y1;

        if(dx == 0) return (x1 == x && y1 <= y && y <= y2)
        || (x1 == x && y2 <= y && y <= y1);

        if(dy == 0) return (y1 == y && x1 <= x && x <= x2)
        || (y1 == y && x2 <= x && x <= x1);

        const m = dy / dx;
        const b = y1 - m * x1;
        
        return y == m * x + b;
    }

    /**
     * 
     * @param {Segment} segment 
     */
    equal(segment) {
        return this.startingPoint.equals(segment.startingPoint)
        && this.endingPoint.equals(segment.endingPoint);
    }

    asArray() {
        return [
            [this.startingPoint.x, this.startingPoint.y],
            [this.endingPoint.x, this.endingPoint.y]
        ];
    }
}

export {
    calculateVector,
    calculateDistance,
    pointsAsNumberPairs,
    numberPairsAsPoints,
    maxMinCoords,
    Point,
    Vector,
    BoundingBox,
    Figure,
    Segment
}