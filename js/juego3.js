let configTeclado = { prevent_repeat: true };

let eventoTeclado = new window.keypress.Listener(this, configTeclado);

function pulsaA() {
  console.log('Has pulsado a');
}

function pulsaAB() {
  console.log('Has pulsado A y B a la vez');
}

function ataqueEspecial() {
  console.log('has desbloqueado el ataque especial');
}

eventoTeclado.simple_combo('a', pulsaA);
eventoTeclado.simple_combo('a b', pulsaAB);
eventoTeclado.sequence_combo('up down a b', ataqueEspecial);

// document.addEventListener('keydown', (event) => {
//   console.log(event.key);
// });
