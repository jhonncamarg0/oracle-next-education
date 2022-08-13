var tela = document.querySelector("canvas");
var pincel = tela.getContext("2d");
pincel.fillStyle = "lightgray";
pincel.fillRect(0, 0, 600, 600);

var x = 20;
var y = 20;

var esquerda = 37;
var cima = 38;
var direita = 39;
var baixo = 40;

var taxa = 10;

function desenhaCirculo(x, y, raio) {
    pincel.fillStyle = "blue";
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2 * Math.PI);
    pincel.fill();
}

function limpaTela() {
    pincel.clearRect(0, 0, 600, 600);
}

function atualizaTela() {
    limpaTela();
    desenhaCirculo(x, y, 10);
}

setInterval(atualizaTela, 20);

function leDoTeclado(evento) {
    var tecla = evento.keyCode;
    if(tecla == esquerda){
        x = x - 10;
    }
    else if(tecla == direita){
        x = x + 10;
    }
    else if(tecla == cima){
        y = y - 10;
    }
    else if(tecla == baixo){
        y = y +10;
    }
}

document.onkeydown = leDoTeclado;