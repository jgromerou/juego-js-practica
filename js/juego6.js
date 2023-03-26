let canvas,
  ctx,
  FPS = 50;

let imgMega;
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

class Protagonista {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.velocidad = 3;
  }

  dibuja() {
    ctx.drawImage(imgMega, this.x, this.y);
  }

  arriba() {
    this.y -= this.velocidad;
  }

  abajo() {
    this.y += this.velocidad;
  }

  izquierda() {
    this.x -= this.velocidad;
  }

  derecha() {
    this.x += this.velocidad;
  }
}

function borrarCanvas() {
  canvas.width = 500;
  canvas.height = 400;
}

class Personaje {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.derecha = true;
  }

  dibuja() {
    ctx.fillStyle = '#fff000';
    ctx.fillRect(this.x, this.y, 50, 50);
  }
  mueve(velocidad) {
    if (this.derecha === true) {
      if (this.x < 400) {
        this.x += velocidad;
      } else {
        this.derecha = false;
      }
    } else {
      if (this.x > 50) {
        this.x -= velocidad;
      } else {
        this.derecha = true;
      }
    }
  }
}

const personaje1 = new Personaje(10, 50);
const personaje2 = new Personaje(10, 120);
const personaje3 = new Personaje(10, 230);

const prota = new Protagonista(200, 200);

document.addEventListener('keydown', function (tecla) {
  //arriba
  if (tecla.keyCode == 38) {
    prota.arriba();
  }

  //abajo
  if (tecla.keyCode == 40) {
    prota.abajo();
  }

  //izquierda
  if (tecla.keyCode == 37) {
    prota.izquierda();
  }

  //derecha
  if (tecla.keyCode == 39) {
    prota.derecha();
  }
});

function principal() {
  borrarCanvas();
  personaje1.dibuja();
  personaje2.dibuja();
  personaje3.dibuja();

  personaje1.mueve(1);
  personaje2.mueve(3);
  personaje3.mueve(15);

  prota.dibuja();

  console.log('funcion principal');
}
