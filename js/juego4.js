let miCanvas;

function inicializar() {
  miCanvas = document.getElementById('canvas');

  miCanvas.addEventListener('mousedown', clickRaton, false);
  miCanvas.addEventListener('mouseup', sueltaRaton, false);
  miCanvas.addEventListener('mousemove', mueveRaton, false);
}

function clickRaton(e) {
  console.log('e');
}

function sueltaRaton(e) {
  console.log('s');
}

function mueveRaton(e) {
  let x = e.pageX;
  let y = e.pageY;
  console.log(`x: ${x}, y: ${y}`);
}
