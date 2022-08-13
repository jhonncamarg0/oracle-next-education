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

var raio = 20;
var sentido = 1;

function animaCirculo() {
    pincel.clearRect(0, 0, 600, 600);
    if (raio > 30){
        sentido = -1;
    }
    else if (raio < 20){
        sentido = 1;
    }
    desenhaCirculo(30, 30, raio);
    raio = raio + sentido;
}

setInterval(animaCirculo, 10);