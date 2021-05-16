var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClic); //añade al boton una funcion que escucha cuando ocurre el evento

var d = document.getElementById("Dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}
function dibujoPorClic() {
  lienzo.clearRect(0, 0, d.width, d.height);
  var lineas = parseInt(texto.value);
  var l = 0; //cuenta las lineas
  var yi, xf;
  var espacio = ancho / lineas;

  while (l < lineas) {
    //lo ejecuta tantas veces cuanto la operacion sea verdad

    yi = espacio * l; //ecuacion de ciclo
    xf = espacio * (l + 1);
    dibujarLinea("#AAF", 0, yi, xf, 300);

    console.log("linea " + l);
    l = l + 1;
  }
  dibujarLinea("RED", 1, 1, 1, 299);
  dibujarLinea("RED", 1, 299, 299, 299);
}
