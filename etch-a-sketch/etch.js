const canvas = document.querySelector('#etch-a-sketch');
console.log(canvas);

const ctx = canvas.getContext('2d');
console.log(ctx);

const shakebuttton = document.querySelector('.shake');
console.log(shakebuttton);

let hue = 0;
ctx.strokeStyle = `hsl(${hue},100%,50%)`;

const MOVE_AMOUNT = 10;
const { width, height } = canvas;

console.log(width, height);

let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;
console.log(ctx);

ctx.beginPath(); // start the drawing
ctx.moveTo(x, y); // where the starting dot should move
ctx.lineTo(x, y); //
ctx.stroke();

function draw({ key }) {
  hue += 10;
  ctx.strokeStyle = `hsl(${hue},100%,50%)`;

  console.log(key);
  ctx.beginPath();
  ctx.moveTo(x, y);

  switch (key) {
    case `ArrowUp`:
      console.log(y);
      y -= MOVE_AMOUNT;
      console.log(y);
      break;
    case `ArrowDown`:
      console.log(y);
      y += MOVE_AMOUNT;
      console.log(y);
      break;
    case `ArrowLeft`:
      console.log(x);
      x -= MOVE_AMOUNT;
      console.log(x);
      break;
    case `ArrowRight`:
      console.log(x);
      x += MOVE_AMOUNT;
      console.log(x);
      break;
    default:
      break;
  }
  ctx.lineTo(x, y);
  ctx.stroke();
}

function handleKey(event) {
  if (event.key.includes('Arrow')) {
    event.preventDefault();
    // console.log(event.key, 'yes it does');
    draw({ key: event.key });
  }
}

function clearCanvas() {
  console.log('clear');
  canvas.classList.add('shake');
  ctx.clearRect(0, 0, width, height);
  canvas.addEventListener(
    'animationend',
    function() {
      console.log('done shaking');
      canvas.classList.remove('shake');
    },
    { once: true }
  );
}
window.addEventListener('keydown', handleKey);
window.addEventListener('dblclick', clearCanvas);

shakebuttton.addEventListener('click', clearCanvas);
