let canvas,
  ctx,
  FPS = 50;

let anchoF = 50;
let altoF = 50;

let muro = '#044f14';
let puerta = '#3a1700';
let tierra = '#c68924';
let llave = '#c6bc00';

let protagonista;

let escenario = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 2, 2, 0, 0, 0, 2, 2, 2, 2, 0, 0, 2, 2, 0],
  [0, 0, 2, 2, 2, 2, 2, 0, 0, 2, 0, 0, 2, 0, 0],
  [0, 0, 2, 0, 0, 0, 2, 2, 0, 2, 2, 2, 2, 0, 0],
  [0, 0, 2, 2, 2, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0],
  [0, 2, 2, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0],
  [0, 0, 2, 0, 0, 0, 2, 2, 2, 0, 0, 2, 2, 2, 0],
  [0, 2, 2, 2, 0, 0, 2, 0, 0, 0, 2, 0, 0, 2, 0],
  [0, 2, 2, 2, 0, 0, 2, 0, 0, 2, 2, 2, 2, 2, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

function dibujarEscenario() {
  let color;
  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 15; x++) {
      if (escenario[y][x] == 0) {
        color = muro;
      }
      if (escenario[y][x] == 1) {
        color = puerta;
      }
      if (escenario[y][x] == 2) {
        color = tierra;
      }
      if (escenario[y][x] == 3) {
        color = llave;
      }

      ctx.fillStyle = color;
      ctx.fillRect(x * anchoF, y * altoF, anchoF, altoF);
    }
  }
}

function inicializa() {
  canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d');

  //cargamos imagen del personaje
  imgMega = new window.Image();
  imgMega.src = 'img/minimega.jpg';
  imgMega.width = 100;
  imgMega.height = 100;
  setInterval(function () {
    principal();
  }, 1000 / FPS);
}

function borrarCanvas() {
  canvas.width = 750;
  canvas.height = 500;
}

function principal() {
  dibujarEscenario();
  //   borrarCanvas();
  //   personaje1.dibuja();
  //   personaje2.dibuja();
  //   personaje3.dibuja();

  //   personaje1.mueve(1);
  //   personaje2.mueve(3);
  //   personaje3.mueve(15);

  //   prota.dibuja();

  //   console.log('funcion principal');
}
