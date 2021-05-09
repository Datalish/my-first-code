var d = document.getElementById("Dibujito");
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0; //cuenta las lineas
var yi, xf;

while (l < lineas) {
  //lo ejecuta tantas veces cuanto la operacion sea verdad

  yi = 10 * l; //ecuacion de ciclo
  xf = 10 * (l + 1);
  dibujarLinea("#AAF", 0, yi, xf, 300);

  console.log("linea " + l);
  l = l + 1;
}
dibujarLinea("RED", 1, 1, 1, 299);
dibujarLinea("RED", 1, 299, 299, 299);


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}
