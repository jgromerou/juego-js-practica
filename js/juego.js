let fps = 10;
let xEscenario = 0;

function atacar() {
  console.log('Estás atacando a tu enemigo!!');
}

function mueveescenario() {
  xEscenario++;
  console.log(xEscenario);
}

function principal() {
  mueveescenario();
}

// setInterval(() => {
//   principal();
// }, 1000 / fps);
