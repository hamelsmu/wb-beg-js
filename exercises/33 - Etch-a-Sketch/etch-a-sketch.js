const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const button = document.querySelector('.shake');
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;
const MOVE_AMOUNT = 10;

// start the drawing
let x = Math.random() * canvas.width;
let y = Math.random() * canvas.height;
let hue = 0;

function clamp(n, upper, bound = 0) {
  let val = n;
  if (n >= upper * bound) {
    val = upper * bound;
  } else if (n <= upper * (1 - bound)) {
    val = upper * (1 - bound);
  }
  return val;
}

function initPoint(xi, yi) {
  x = clamp(xi, canvas.width, 0.85);
  y = clamp(yi, canvas.height, 0.85);
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x, y);
  ctx.stroke();
}

initPoint(x, y);

// write a draw func
function draw(newx, newy) {
  ctx.beginPath();
  ctx.moveTo(x, y); // move to current position
  const _newx = clamp(newx, canvas.width, 0.99);
  const _newy = clamp(newy, canvas.height, 0.99);
  ctx.lineTo(_newx, _newy);
  // set the global values for x and y
  x = _newx;
  y = _newy;
  ctx.stroke();
}

let lastkey = '';

function setColor(key) {
  if (key !== lastkey) {
    hue = parseInt(Math.random() * 360);
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    lastkey = key;
  }
}

// write a handler for the keys
function handleArrow(e) {
  switch (e.key) {
    case 'ArrowUp':
      setColor(e.key);
      draw(x, y - MOVE_AMOUNT);
      break;
    case 'ArrowDown':
      setColor(e.key);
      draw(x, y + MOVE_AMOUNT);
      break;
    case 'ArrowLeft':
      setColor(e.key);
      draw(x - MOVE_AMOUNT, y);
      break;
    case 'ArrowRight':
      setColor(e.key);
      draw(x + MOVE_AMOUNT, y);
      break;
    default:
    // pass
  }
}

// clear/shake function
canvas.addEventListener('animationend', () => {
  canvas.classList.remove('shake');
});

function clear() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function shake() {
  canvas.classList.add('shake');
  clear();
}

button.addEventListener('click', shake);

// listen for arrow keys
document.addEventListener('keydown', handleArrow);
