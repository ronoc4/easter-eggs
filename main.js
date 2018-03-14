/*
 Author: Conor Budge
 Date: March 11th, 2018
 Purpose: A simple app for Easter Eggs
 */
const CANVAS = document.getElementById('ee-canvas');
const ctx = CANVAS.getContext('2d');
const radiusX = 65;
const radiusY = 90;
const rotation = 180 * Math.PI/180;
const startAngle = 0;
const endAngle = 2* Math.PI;
let cx, cy;
let userInput = "";
let totalEggs = getUserInput();

let userClick = document.getElementById("add-eggs-btn");

window.onload = function () {
    userClick.onclick = function () {
        console.log(totalEggs);
        draw();
    };
};

function getUserInput() {
    userInput = document.getElementById("txtNumEggs").value;
    return 12;
}

//Create the egg shape
function drawEgg() {
    for(let i = 0; i < totalEggs; i++) {
        ctx.strokeStyle = randomColor();
        ctx.fillStyle = randomColor();
        cx = Math.random() * 500;
        cy = Math.random() * 500;

        ctx.beginPath();
        ctx.ellipse(cx, cy, radiusX, radiusY, rotation, startAngle, endAngle);
        ctx.stroke();
        ctx.moveTo(0, 200);
        ctx.stroke();
        ctx.fill();
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

