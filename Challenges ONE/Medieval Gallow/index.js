document.getElementById("inicial_pagina").style.display = "none";
document.getElementById("palavra_pagina").style.display = "none";
document.getElementById("forca_pagina").style.display = "block";

var audio = document.getElementById("audio");
var play_audio = document.getElementById("audio_play");
var pause_audio = document.getElementById("audio_pause");
pause_audio.style.display = "none";

function play_page_audio () {
    audio.play();
    play_audio.style.display = "none";
    pause_audio.style.display = "block";
}

function pause_page_audio () {
    audio.pause();
    pause_audio.style.display = "none";
    play_audio.style.display = "block";
}

play_audio.onclick = play_page_audio;
pause_audio.onclick = pause_page_audio;

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
    document.getElementById("texto_palavra_caixa").focus();
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

var forca = document.getElementById("forca_desenho");
var estrutura = forca.getContext("2d");