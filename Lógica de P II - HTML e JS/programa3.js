var tela = document.querySelector("canvas");
var pincel = tela.getContext("2d");
var paleta = document.querySelector("input");
pincel.fillStyle = "lightgray";
pincel.fillRect(0, 0, 600, 600);

var cores = ["blue", "red", "green"];
var indiceCorAtual = 0;

var raio = 10;
var paint = false;

function desenhaCirculo(evento) {
    if(paint){
        var x = evento.pageX - tela.offsetLeft;
        var y = evento.pageY - tela.offsetTop;
        pincel.fillStyle = paleta.value;
        pincel.beginPath();
        pincel.arc(x, y, raio, 0, 2 * 3.14);
        pincel.fill();
    }
    console.log(x + "," + y);
}

tela.onmousemove = desenhaCirculo;

function mudaCor() {
    indiceCorAtual++;
    if (indiceCorAtual >= cores.length) {
        indiceCorAtual = 0;    
    }
    return false;
}

tela.oncontextmenu = mudaCor;

function paintOn() {
    paint = true;
}

function paintOff() {
    paint = false;
}

tela.onmousedown = paintOn;
tela.onmouseup = paintOff;