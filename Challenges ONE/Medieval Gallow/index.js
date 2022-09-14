document.getElementById("palavra_pagina").style.display = "none";
document.getElementById("forca_pagina").style.display = "none";

let audio = document.getElementById("audio");
let play_audio = document.getElementById("audio_play");
let pause_audio = document.getElementById("audio_pause");
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

let botao_jogo = document.getElementById("jogo_botao");
let botao_palavra = document.getElementById("palavra_botao");
let botao_salvar = document.getElementById("salvar_botao");
let botao_cancelar = document.getElementById("cancelar_botao");
let botao_reiniciar = document.getElementById("reiniciar_botao");
let botao_desistir = document.getElementById("desistir_botao");

var partida_rapida = true;
let palavras = [];

botao_jogo.onclick = function () {
    if (palavras.length == 0){
        Swal.fire({
            title: "Inventário de palavras vazio",
            text: "Comece jogando uma partida personalizada",
            icon: "info",
            confirmButtonText: "Fechar"
        });
    }
    else if (palavras.length >= 1){
        /* partida rápida */
        document.getElementById("inicial_pagina").style.display = "none";
        document.getElementById("forca_pagina").style.display = "block";
    }
}

botao_palavra.onclick = function () {
    document.getElementById("inicial_pagina").style.display = "none";
    document.getElementById("palavra_pagina").style.display = "block";
    document.getElementById("texto_palavra_caixa").focus();
}

botao_salvar.onclick = function () {
    let palavra_nova = document.getElementById("texto_palavra_caixa").value;
    if (palavra_nova.length == 0) {
        Swal.fire({
            title: "Campo vazio",
            text: "",
            icon: "info",
            confirmButtonText: "Fechar"
        });
    }
    else if (palavra_nova.length <= 3) {
        Swal.fire({
            title: "Mínimo de 4 letras",
            text: "",
            icon: "info",
            confirmButtonText: "Fechar"
        });
    }
    else if (palavra_nova.length >= 4) {
        let regex_a = /\W|_/;
        let regex_b = /[0-9]/;
        let regex_c = /[a-z]|[A-Z]/;
        if (regex_a.test(palavra_nova)) {
            Swal.fire({
                title: "Palavra inválida",
                text: "Retire as letras com acento, caracteres especiais ou o underline da palavra",
                icon: "info",
                confirmButtonText: "Fechar"
            });
        }
        else if (regex_b.test(palavra_nova)) {
            Swal.fire({
                title: "Palavra inválida",
                text: "Retire os números da palavra",
                icon: "info",
                confirmButtonText: "Fechar"
            });
        }
        else if (regex_c.test(palavra_nova)) {
            if (palavras.length == 10) {
                Swal.fire({
                    title: "Inventário de palavras cheio",
                    text: "Recarregue a página para iniciar uma nova sessão e limpar o inventário",
                    icon: "info",
                    confirmButtonText: "Fechar"
                });
            }
            else if (palavras.length <= 9) {
                let palavra_nova_max = palavra_nova.toUpperCase();
                palavras.push(palavra_nova_max);
                partida_rapida == false;
                document.getElementById("palavra_pagina").style.display = "none";
                document.getElementById("forca_pagina").style.display = "block";
                Swal.fire({
                    title: "Palavra adicionada",
                    text: "Use o teclado para jogar",
                    icon: "info",
                    confirmButtonText: "Jogar"
                });
            }
        }
    }
}

botao_cancelar.onclick = function () {
    let palavra_nova = document.getElementById("texto_palavra_caixa");
    palavra_nova.value = "";
    document.getElementById("palavra_pagina").style.display = "none";
    document.getElementById("inicial_pagina").style.display = "block";
}

botao_reiniciar.onclick = function () {
    /* reiniciar partida */
}

botao_desistir.onclick = function () {
    /* desistir da partida */
    document.getElementById("forca_pagina").style.display = "none";
    document.getElementById("inicial_pagina").style.display = "block";
}

let forca = document.getElementById("forca_desenho");
let estrutura_forca = forca.getContext("2d");

/*
function forca () {

}
*/

let tracinhos = document.getElementById("letras_certas_desenho");
let estrutura_tracinhos = tracinhos.getContext("2d");

/*
function tracinhos () {
    if(partida_rapida == true) {

    }
    else if (partida_rapida == false) {

    }
}*/