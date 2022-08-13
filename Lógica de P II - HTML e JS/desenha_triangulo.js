var tela = document.querySelector("canvas");
var pincel = tela.getContext("2d");

function desenharTriangulo(xa, ya, xb, yb, cor) {
    pincel.fillStyle = cor;
    pincel.beginPath();
    pincel.moveTo(xa, xa);
    pincel.lineTo(xa, ya);
    pincel.lineTo(ya, ya);
    pincel.fill();

    pincel.fillStyle = "lightgray";
    pincel.beginPath();
    pincel.moveTo(xb, xb + 75);
    pincel.lineTo(xb, yb);
    pincel.lineTo(yb - 75, yb);
    pincel.fill();
}

desenharTriangulo(50, 400, 100, 350, "black");