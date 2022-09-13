document.getElementById("inicial_pagina").style.display = "block";
document.getElementById("palavra_pagina").style.display = "none";
document.getElementById("forca_pagina").style.display = "none";

var botao_jogo = document.getElementById("jogo_botao");
var botao_palavra = document.getElementById("palavra_botao");

var botao_salvar = document.getElementById("salvar_botao");
var botao_cancelar = document.getElementById("cancelar_botao");

var botao_desistir = document.getElementById("desistir_botao");

botao_jogo.onclick = function () {
    document.getElementById("inicial_pagina").style.display = "none";
    document.getElementById("forca_pagina").style.display = "block";
}

botao_palavra.onclick = function () {
    document.getElementById("inicial_pagina").style.display = "none";
    document.getElementById("palavra_pagina").style.display = "block";
}

botao_salvar.onclick = function () {
    document.getElementById("palavra_pagina").style.display = "none";
    document.getElementById("forca_pagina").style.display = "block";
}

botao_cancelar.onclick = function () {
    document.getElementById("palavra_pagina").style.display = "none";
    document.getElementById("inicial_pagina").style.display = "block";
}

botao_desistir.onclick = function () {
    document.getElementById("forca_pagina").style.display = "none";
    document.getElementById("inicial_pagina").style.display = "block";
}