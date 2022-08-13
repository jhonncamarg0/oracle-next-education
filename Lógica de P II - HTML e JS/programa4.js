var tela = document.querySelector("canvas");
var pincel = tela.getContext("2d");
pincel.fillStyle = "lightgray";
pincel.fillRect(0, 0, 600, 600);

function desenhaCirculo(x, y, raio) {
    pincel.fillStyle = "blue";
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2 * Math.PI);
    pincel.fill();
}

var x = 30;
var sentido = 1;

function animaCirculo() {
    pincel.clearRect(0, 0, 600, 600);
    if (x > 600){
        sentido = -1;
    }
    else if (x < 0){
        sentido = 1;
    }
    desenhaCirculo(x, 30, 10);
    x = x + sentido;
}

setInterval(animaCirculo, 1);