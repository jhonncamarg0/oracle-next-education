function desenhaQuadrado(x, y, tamanho, cor) {
    var tela = document.querySelector("canvas");
    var pincel = tela.getContext("2d");
    pincel.fillStyle = cor
    pincel.fillRect(x, y, tamanho, tamanho);
    pincel.strokeStyle = "black";
    pincel.strokeRect(x, y, tamanho, tamanho);
}

desenhaQuadrado(0, 0, 100, "green");
desenhaQuadrado(100, 0, 100, "green");
desenhaQuadrado(200, 0, 100, "green");
desenhaQuadrado(300, 0, 100, "white");