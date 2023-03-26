class personaje {
  constructor(x, y, nombre) {
    this.x = x;
    this.y = y;
    this.nombre = nombre;
  }
  //metodo abajo
  abajo() {
    this.y += 10;
  }

  //metodo hablar
  hablar() {
    console.log(`Hola amigo, me llamo ${this.nombre}`);
  }
}

let personaje1 = new personaje(10, 100, 'gera');
personaje1;
