var tela = document.querySelector("canvas");
var pincel = tela.getContext("2d");
pincel.fillStyle = "lightgray";
pincel.fillRect(0, 0, 600, 400);

function desenhaCirculo(x, y, raio, cor) {

    pincel.fillStyle = cor;
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2 * 3.14);
    pincel.fill();
}

desenhaCirculo(300, 200, 25, "red");
desenhaCirculo(250, 200, 25, "orange");
desenhaCirculo(350, 200, 25, "black");
desenhaCirculo(300, 150, 25, "yellow");
desenhaCirculo(300, 250, 25, "blue");