var elegircolor = document.getElementById("elegir_color");

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
    var lineas = parseInt(text.value);
    var l = 0;
    var yi, xf;
    var colorcito = elegircolor.value;
    var espacio = ancho / lineas;

    for (l = 0; l < lineas; l++) 
    {
        yi = espacio * l;
        xf = espacio * (l + 1);
        dibujarLinea(colorcito, 0, yi, xf, 300);
        console.log("Linea " + l);
    }

    dibujarLinea(colorcito, 0, 0, 0, 300);
    dibujarLinea(colorcito, 0, 300, 300, 300);



    for (l = 0; l < lineas; l++)
    {
        yi = espacio * (l + 1);
        xf = espacio * l;
        dibujarLinea(colorcito, 300, yi, xf, 0);
        console.log("linea" + l);
    }

    dibujarLinea(colorcito, 300, 300, 300, 0);
    dibujarLinea(colorcito, 300, 0, 0, 0);



    for (l = 0; l < lineas; l++)
    {
        xi = 300 - (espacio * l);
        yf = 300 - (espacio * (lineas-(l+1)));
        dibujarLinea(colorcito, xi, 0, 0, yf);
        console.log("linea" + l);
    }

    dibujarLinea(colorcito, 0, 300, 0, 0);
    dibujarLinea(colorcito, 0, 0, 300, 0);
    


    for (l = 0; l < lineas; l++)
    {
        xi = espacio * l;
        yf = espacio * (lineas - (l + 1));
        dibujarLinea(colorcito, xi, 300, 300, yf);
        console.log("linea" + l);
    }

    dibujarLinea(colorcito, 300, 0, 300, 300);
    dibujarLinea(colorcito, 300, 300, 0, 300);
}