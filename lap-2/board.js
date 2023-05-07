
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let isDrawing = false;
let lastX = 0;
let lastY = 0;

canvas.addEventListener('mousedown', e => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mousemove', e => {
    if (!isDrawing) return;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mouseup', () => {
    isDrawing = false;
});

canvas.addEventListener('mouseout', () => {
    isDrawing = false;
});


const drawLineBtn = document.getElementById('drawLineBtn');

drawLineBtn.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.moveTo(100, 100);
    ctx.lineTo(400, 400);
    ctx.closePath();
    ctx.stroke();
});


const drawRectBtn = document.getElementById('drawRectBtn');

drawRectBtn.addEventListener('click', () => {
    
    ctx.beginPath();
    ctx.rect(450, 200, 300, 200);
    ctx.fillStyle = 'orange';
    ctx.fill();
    ctx.stroke();
});


const drawCircleBtn = document.getElementById('drawCircleBtn');

drawCircleBtn.addEventListener('click', () => {
    ctx.beginPath();
    ctx.arc(1000, 250, 100, 0, 2 * Math.PI);
    ctx.fillStyle = 'orange';
    ctx.fill();
    ctx.stroke();
});

const erase = document.getElementById('eraseBoared');

erase.addEventListener('click', () => {
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);

});