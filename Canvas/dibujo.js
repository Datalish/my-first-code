var d = document.getElementById("Dibujito");
var lienzo = d.getContext("2d");
console.log(lienzo);
lienzo.beginPath();
lienzo.strokeStyle = "green";
lienzo.moveTo(199, 89);
lienzo.lineTo(300, 50);
lienzo.stroke();
lienzo.closePath();

dibujarLinea("red", 10, 300, 220, 10);
dibujarLinea("black", 300, 10, 20, 210);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
lienzo.beginPath();
lienzo.strokeStyle = color;
lienzo.moveTo(xinicial, yinicial);
lienzo.lineTo(xfinal, yfinal);
lienzo.stroke();
lienzo.closePath();
}