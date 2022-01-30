var text = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick );

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujoPorClick()
{
    var x = parseInt(text.value);
    var lineas = x;
    var l = 0;
    var yi, xf;
    var colorcito = "red";
    var espacio = ancho / lineas;

    for (l = 0; l < lineas; l++) 
    {
        yi = espacio * l;
        xf = espacio * (l + 1);
        dibujarLinea(colorcito, 0, yi, xf, 300);
        console.log("Linea " + l);
    }

    dibujarLinea(colorcito, 0, 0, 0, 300)
    dibujarLinea(colorcito, 0, 300, 300, 300)

    colorcito = "blue"
    for (l = 0; l < lineas; l++)
    {
        yi = espacio * (l + 1)
        xf = espacio * l
        dibujarLinea(colorcito, 300, yi, xf, 0)
        console.log("linea" + l)
    }

    dibujarLinea(colorcito, 300, 300, 300, 0)
    dibujarLinea(colorcito, 300, 0, 0, 0)

    colorcito = "green"
    for (l = 0; l < lineas; l++)
    {
        xi = 300 - (l * espacio)
        yf = 10 + (l * espacio)
        dibujarLinea(colorcito, xi, 0, 0, yf)
        console.log("linea" + l)
    }

    dibujarLinea(colorcito, 0, 300, 0, 0)
    dibujarLinea(colorcito, 0, 0, 300, 0)

    colorcito = "yellow"
    for (l = 0; l < lineas; l++)
    {
        xi = espacio * l
        yf = 290 - (l * espacio)
        dibujarLinea(colorcito, xi, 300, 300, yf)
        console.log("linea" + l)
    }

    dibujarLinea(colorcito, 300, 0, 300, 300)
    dibujarLinea(colorcito, 300, 300, 0, 300)
}