var tela = document.querySelector("canvas");
var pincel = tela.getContext("2d");

function desenhaQuadrado(x, color) {
    pincel.fillStyle = color;
    pincel.fillRect(x, 0, 50, 50);
    pincel.strokeStyle = "black";
    pincel.strokeRect(x, 0, 50, 50);
}

function desenhaQuadrado2(y, color) {
    pincel.fillStyle = color;
    pincel.fillRect(0, y, 50, 50);
    pincel.strokeStyle = "black";
    pincel.strokeRect(0, y, 50, 50);
}

x = 0;
y = 0;

while (x < 500) {
    desenhaQuadrado(x, "green");
    x = x + 50;
}

while (y < 500) {
    desenhaQuadrado2(y, "green");
    y = y + 50;
}