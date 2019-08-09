import {Emitter,EmitterBuilder} from '../libs/js/graphics/emitter.js';
import * as Canvas from '../libs/js/graphics/canvas.js'
import * as Geometry from '../libs/js/graphics/geometry.js';

window.onload = function() {
    let body = document.querySelector("body");
    Canvas.initCanvas("background",body);

    let emitterBuilder = new EmitterBuilder();
    let corner1 = new Geometry.Point(0, Canvas.CANVAS.height+600);
    let corner2 = new Geometry.Point(Canvas.CANVAS.width, Canvas.CANVAS.height);
    let spawningBox = new Geometry.BoundingBox([corner1,corner2]);

    emitterBuilder.spawningBox = spawningBox;

    let emitter = emitterBuilder.build();

    Canvas.startAnimation(function() {
        emitter.update();
    }, function() {
        emitter.draw(Canvas);
    });
}