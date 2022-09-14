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
        document.getElementById("inicial_pagina").style.display = "none";
        document.getElementById("forca_pagina").style.display = "block";
        Swal.fire({
            title: "Partida rápida criada",
            text: "Use o teclado para jogar",
            icon: "success",
            confirmButtonText: "Jogar"
        });
        function forca_inicial() {
            let forca = document.getElementById("forca_desenho");
            let estrutura_forca = forca.getContext("2d");
            estrutura_forca.fillStyle = "chocolate";
            estrutura_forca.fillRect(10, 30, 20, 370);
            estrutura_forca.fillRect(10, 10, 170, 20);
            estrutura_forca.fillRect(180, 10, 20, 80);
        }

        forca_inicial();

        var palavra_rapida = "";
        
        function tracinhos () {
            if(partida_rapida == true) {
                var x = 0;
                for (i = 0; i <= palavra_rapida.length; i++){
                    let tracinhos = document.getElementById("letras_certas_desenho");
                    let estrutura_tracinhos = tracinhos.getContext("2d");
                    estrutura_tracinhos.fillRect(10 + x, 10, 40, 10);
                    x = x + 50;
                }
            }
        }

        tracinhos();

        /* partida rápida */

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
                text: "Retire as letras com acento, caracteres especiais ou os espaços/underlines da palavra",
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
                partida_rapida = false;
                document.getElementById("palavra_pagina").style.display = "none";
                document.getElementById("forca_pagina").style.display = "block";
                Swal.fire({
                    title: "Partida personalizada criada",
                    text: "Use o teclado para jogar",
                    icon: "success",
                    confirmButtonText: "Jogar"
                });

                function forca_inicial() {
                    let forca = document.getElementById("forca_desenho");
                    let estrutura_forca = forca.getContext("2d");
                    estrutura_forca.fillStyle = "chocolate";
                    estrutura_forca.fillRect(10, 30, 20, 370);
                    estrutura_forca.fillRect(10, 10, 170, 20);
                    estrutura_forca.fillRect(180, 10, 20, 80);
                }

                forca_inicial();
                
                function tracinhos () {
                    if (partida_rapida == false) {
                        let palavra_personalizada = palavras.pop();
                        var x = 0;
                        for (i = 0; i <= palavra_personalizada.length; i++){
                            let tracinhos = document.getElementById("letras_certas_desenho");
                            let estrutura_tracinhos = tracinhos.getContext("2d");
                            estrutura_tracinhos.fillRect(10 + x, 20, 40, 10);
                            x = x + 50;
                        }
                    }
                }

                tracinhos();

                /* partida personalizada */

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

/*

var erros = 0;

function forca_tentativa () {
    let forca = document.getElementById("forca_desenho");
    let estrutura_forca = forca.getContext("2d");
    if (erros == 1) {
        estrutura_forca.fillStyle = "whitesmoke";
        estrutura_forca.beginPath();
        estrutura_forca.arc(190, 118, 30, 0, 2 * Math.PI);
        estrutura_forca.fill();
    }
    else if (erros == 2) {
        estrutura_forca.fillStyle = "whitesmoke";
        estrutura_forca.fillRect(160, 150, 60, 120);
    }
    else if (erros == 3) {
        estrutura_forca.fillStyle = "whitesmoke";
        estrutura_forca.fillRect(138, 150, 20, 100);
    }
    else if (erros == 4) {
        estrutura_forca.fillStyle = "whitesmoke";
        estrutura_forca.fillRect(222, 150, 20, 100);
    }
    else if (erros == 5) {
        estrutura_forca.fillStyle = "whitesmoke";
        estrutura_forca.fillRect(160, 272, 29, 100);
    }
    else if (erros == 6) {
        estrutura_forca.fillStyle = "whitesmoke";
        estrutura_forca.fillRect(191, 272, 29, 100);
        Swal.fire({
            title: "Você perdeu a partida",
            text: "Tente na próxima vez",
            icon: "error",
            confirmButtonText: "Fechar"
        });
    }
}

function tentativa (evento) {
    if (partida_rapida == true) {
        let tecla = evento.key;
        let palavra_rapida_min = palavra_rapida.toLowerCase();
        for (i = 0; i <= palavra_rapida.length; i ++){
            if (tecla == palavra_rapida_min.charAt(i)) {
                let letra = palavra_rapida.charAt(i);
                let desenho_letra = document.getElementById("certas_letras");
                desenho_letra.innerText = letra;
            }
            else if (tecla != palavra_rapida_min.charAt(i)) {
                let letra = palavra_rapida.charAt(i);
                let desenho_letra = document.getElementById("erradas_letras");
                desenho_letra.innerText = letra;
                erros ++;
                forca_tentativa();
            }
        }
    }
    else if (partida_rapida == false) {
        let tecla = evento.key;
        let palavra_personalizada = palavras.pop();
        let palavra_personalizada_min = palavra_personalizada.toLowerCase();
        for (i = 0; i <= palavra_personalizada.length; i ++){
            if (tecla == palavra_personalizada_min.charAt(i)) {
                let letra = palavra_personalizada.charAt(i);
                let desenho_letra = document.getElementById("certas_letras");
                desenho_letra.innerText = letra;
            }
            else if (tecla != palavra_personalizada_min.charAt(i)) {
                let letra = palavra_personalizada.charAt(i);
                let desenho_letra = document.getElementById("erradas_letras");
                desenho_letra.innerText = letra;
                erros ++;
                forca_tentativa();
            }
        }
    }
}

document.onkeydown = tentativa;

*/