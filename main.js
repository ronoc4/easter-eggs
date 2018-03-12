/*
 Author: Conor Budge
 Date: March 11th, 2018
 Purpose: A simple app for Easter Eggs
 */
const CANVAS = document.getElementById('ee-canvas');
const ctx = CANVAS.getContext('2d');
const radius = 75;
const startAngle = 0;
const endAngle = 2* Math.PI;
let cx, cy;

//Create the egg shape
function drawEgg() {
    for(let i = 0; i < 15; i++) {
        ctx.strokeStyle = randomColor();
        ctx.fillStyle = randomColor();
        cx = Math.random() * 500;
        cy = Math.random() * 500;

        ctx.beginPath();
        ctx.ellipse(cx, cy, 50, 75, 45 * Math.PI/180, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.moveTo(0, 200);
        ctx.stroke();
        ctx.fill();

        // ctx.beginPath();
        // ctx.arc(cx,cy,radius,startAngle,endAngle, false);
        // ctx.fill();
        // ctx.stroke();
        ctx.closePath();
    }
}

//Draw the eggs on the canvas
function draw() {
    ctx.clearRect(0,0, CANVAS.width, CANVAS.height);
    drawEgg();
}

//Change to random colors
function randomColor() {
    let o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

