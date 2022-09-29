document.getElementById("palavra_pagina").style.display = "none";
document.getElementById("forca_pagina").style.display = "none";

let audio = document.getElementById("audio");
let play_audio = document.getElementById("audio_play");
let pause_audio = document.getElementById("audio_pause");
pause_audio.style.display = "none";

function play_page_audio() {
    audio.play();
    play_audio.style.display = "none";
    pause_audio.style.display = "block";
}

function pause_page_audio() {
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

let campos = ["certa_letra1", "certa_letra2", "certa_letra3", "certa_letra4", "certa_letra5",
"certa_letra6", "certa_letra7", "certa_letra8", "certa_letra9", "certa_letra10"];
var partida = 0;
var reboot = 0;
let palavras = [];
let letras_certas = [];
let letras_erradas = [];
var acertos = 0;
var erros = 0;

botao_jogo.onclick = function() {
    if (palavras.length == 0) {
        Swal.fire({
            title: "Inventário de palavras vazio",
            text: "Comece jogando uma partida personalizada",
            icon: "info",
            confirmButtonText: "Fechar"
        });
        let onclick = new Audio("./assets/notification.wav");
        onclick.addEventListener("canplaythrough", function() { onclick.play(); });
    }
    else if (palavras.length >= 1) {
        partida = 1;
        document.getElementById("inicial_pagina").style.display = "none";
        document.getElementById("forca_pagina").style.display = "block";
        Swal.fire({
            title: "Partida rápida criada",
            text: "Use o teclado para jogar",
            icon: "success",
            confirmButtonText: "Jogar"
        });
        let onclick = new Audio("./assets/notification.wav");
        onclick.addEventListener("canplaythrough", function() { onclick.play(); });
        function forca_inicial() {
            let forca = document.getElementById("forca_desenho");
            let estrutura_forca = forca.getContext("2d");
            estrutura_forca.fillStyle = "chocolate";
            estrutura_forca.fillRect(10, 30, 20, 370);
            estrutura_forca.fillRect(10, 10, 170, 20);
            estrutura_forca.fillRect(180, 10, 20, 80);
            estrutura_forca.beginPath();
            estrutura_forca.arc(190, 118, 40, 0, 2 * Math.PI);
            estrutura_forca.fill();
            estrutura_forca.fillStyle = "darkslategray";
            estrutura_forca.beginPath();
            estrutura_forca.arc(190, 118, 30, 0, 2 * Math.PI);
            estrutura_forca.fill();
        }
        forca_inicial();
        let palavra_aleatoria = Math.floor(Math.random() * palavras.length);
        var palavra_rapida = palavras[palavra_aleatoria];
        function tracinhos_rapidos() {
            if(partida == 1) {
                var x = 0;
                for (i = 0; i < palavra_rapida.length; i++) {
                    let tracinhos = document.getElementById("letras_certas_desenho");
                    let estrutura_tracinhos = tracinhos.getContext("2d");
                    estrutura_tracinhos.fillRect(10 + x, 20, 30, 10);
                    x = x + 40;
                }
            }
        }
        tracinhos_rapidos();
        function forca_tentativa() {
            let forca_tentativa = document.getElementById("forca_desenho");
            let forca_tentativa_estrutura = forca_tentativa.getContext("2d");
            if (erros == 1) {
                forca_tentativa_estrutura.fillStyle = "whitesmoke";
                forca_tentativa_estrutura.beginPath();
                forca_tentativa_estrutura.arc(190, 118, 30, 0, 2 * Math.PI);
                forca_tentativa_estrutura.fill();

                forca_tentativa_estrutura.fillStyle = "black";
                forca_tentativa_estrutura.beginPath();
                forca_tentativa_estrutura.moveTo(190, 118);
                forca_tentativa_estrutura.arc(175, 110, 4, 0, 2 * Math.PI);
                forca_tentativa_estrutura.closePath();
                forca_tentativa_estrutura.fill();

                forca_tentativa_estrutura.beginPath();
                forca_tentativa_estrutura.moveTo(190, 118);
                forca_tentativa_estrutura.arc(205, 110, 4, 0, 2 * Math.PI);
                forca_tentativa_estrutura.closePath();
                forca_tentativa_estrutura.fill();

                forca_tentativa_estrutura.strokeStyle = "black";
                forca_tentativa_estrutura.beginPath();
                forca_tentativa_estrutura.moveTo(190, 128);
                forca_tentativa_estrutura.arc(190, 120, 20, 0, Math.PI);
                forca_tentativa_estrutura.stroke();
                forca_tentativa_estrutura.closePath();
                forca_tentativa_estrutura.fill();
            }
            else if (erros == 2) {
                forca_tentativa_estrutura.fillStyle = "whitesmoke";
                forca_tentativa_estrutura.fillRect(160, 158, 60, 120);
            }
            else if (erros == 3) {
                forca_tentativa_estrutura.fillStyle = "whitesmoke";
                forca_tentativa_estrutura.fillRect(129, 158, 29, 100);
            }
            else if (erros == 4) {
                forca_tentativa_estrutura.fillStyle = "whitesmoke";
                forca_tentativa_estrutura.fillRect(222, 158, 29, 100);
            }
            else if (erros == 5) {
                forca_tentativa_estrutura.fillStyle = "whitesmoke";
                forca_tentativa_estrutura.fillRect(160, 280, 29, 100);
            }
            else if (erros == 6) {
                forca_tentativa_estrutura.fillStyle = "whitesmoke";
                forca_tentativa_estrutura.fillRect(191, 280, 29, 100);
            }
        }
        reboot = partida;
        function tentativa (evento) {
            if (partida == 1) {
                let codigo = evento.keyCode;
                let comandos = [8, 9, 12, 13, 16, 17, 18, 20, 27, 32, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 144, 219, 222];
                if (comandos.includes(codigo) == false) {
                    let tecla = evento.key;
                    let regex = /\W|_|[0-9]/;
                    if (regex.test(tecla) == false) {
                        let palavra_rapida_min = palavra_rapida.toLowerCase();
                        let letras_rapidas = palavra_rapida_min.split("");
                        if (letras_rapidas.includes(tecla) == true) {
                            let letra_rapida = tecla.toUpperCase();
                            if (letras_certas.includes(letra_rapida) == false) {
                                function ponto(id, contador_letra) {
                                    if (typeof letras_certas[contador_letra] != "undefined") {
                                        let desenho_letra_certa = document.getElementById(id[contador_letra]);
                                        desenho_letra_certa.innerText = letras_certas[contador_letra];
                                        acertos ++;
                                        let onclick = new Audio("./assets/score.wav");
                                        onclick.addEventListener("canplaythrough", function() { onclick.play(); });
                                    }
                                }
                                function scan(id , letra) {
                                    if (letras_certas.includes(letra) == true) {
                                        for (i = 0; i <= letras_rapidas.length; i++) {
                                            let tecla_min = letra.toLowerCase();
                                            if (letras_rapidas[i] == tecla_min && letras_certas[i] != letra) {
                                                let desenho_letra_certa = document.getElementById(id[i]);
                                                letras_certas[i] = letra;
                                                desenho_letra_certa.innerText = letras_certas[i];
                                                acertos ++;
                                            }
                                        }
                                    }
                                }
                                for (i = 0; i <= letras_rapidas.length; i++) {
                                    let a = 1;
                                    let b = 5;
                                    if (letras_rapidas[i] == tecla) {
                                        if (typeof letras_certas[i] == "undefined") {
                                            let tecla_max = tecla.toUpperCase();
                                            letras_certas[i] = tecla_max;
                                            ponto(campos, 0);
                                            scan(campos, tecla_max);
                                        }
                                    }
                                    else if (letras_rapidas[i + a] == tecla) {
                                        if (typeof letras_certas[i + a] == "undefined") {
                                            let tecla_max = tecla.toUpperCase();
                                            letras_certas[i + a] = tecla_max;
                                            ponto(campos, 1);
                                            scan(campos, tecla_max);
                                        }
                                    }
                                    else if (letras_rapidas[i + (a * 2)] == tecla) {
                                        if (typeof letras_certas[i + (a * 2)] == "undefined") {
                                            let tecla_max = tecla.toUpperCase();
                                            letras_certas[i + (a * 2)] = tecla_max;
                                            ponto(campos, 2);
                                            scan(campos, tecla_max);
                                        }
                                    }
                                    else if (letras_rapidas[i + (a * 3)] == tecla) {
                                        if (typeof letras_certas[i + (a * 3)] == "undefined") {
                                            let tecla_max = tecla.toUpperCase();
                                            letras_certas[i + (a * 3)] = tecla_max;
                                            ponto(campos, 3);
                                            scan(campos, 3, tecla_max);
                                        }
                                    }
                                    else if (letras_rapidas[i + (a * 4)] == tecla) {
                                        if (typeof letras_certas[i + (a * 4)] == "undefined") {
                                            let tecla_max = tecla.toUpperCase();
                                            letras_certas[i + (a * 4)] = tecla_max;
                                            ponto(campos, 4);
                                            scan(campos, 4, tecla_max);
                                        }
                                    }
                                    else if (letras_rapidas[i + b] == tecla) {
                                        if (typeof letras_certas[i + b] == "undefined") {
                                            let tecla_max = tecla.toUpperCase();
                                            letras_certas[i + b] = tecla_max;
                                            ponto(campos, 5);
                                            scan(campos, 5, tecla_max);
                                        }
                                    }
                                    else if (letras_rapidas[i + (b + a)] == tecla) {
                                        if (typeof letras_certas[i + (b + a)] == "undefined") {
                                            let tecla_max = tecla.toUpperCase();
                                            letras_certas[i + (b + a)] = tecla_max;
                                            ponto(campos, 6);
                                            scan(campos, 6, tecla_max);
                                        }
                                    }
                                    else if (letras_rapidas[i + (b + (a * 2))] == tecla) {
                                        if (typeof letras_certas[i + (b + (a * 2))] == "undefined") {
                                            let tecla_max = tecla.toUpperCase();
                                            letras_certas[i + (b + (a * 2))] = tecla_max;
                                            ponto(campos, 7);
                                            scan(campos, 7, tecla_max);
                                        }
                                    }
                                    else if (letras_rapidas[i + (b + (a * 3))] == tecla) {
                                        if (typeof letras_certas[i + (b + (a * 3))] == "undefined") {
                                            let tecla_max = tecla.toUpperCase();
                                            letras_certas[i + (b + (a * 3))] = tecla_max;
                                            ponto(campos, 8);
                                            scan(campos, 8, tecla_max);
                                        }
                                    }
                                    else if (letras_rapidas[i + (b + (a * 4))] == tecla) {
                                        if (typeof letras_certas[i + (b + (a * 4))] == "undefined") {
                                            let tecla_max = tecla.toUpperCase();
                                            letras_certas[i + (b + (a * 4))] = tecla_max;
                                            ponto(campos, 9);
                                            scan(campos, 9, tecla_max);
                                        }
                                    }
                                }
                                if (acertos == palavra_rapida.length) {
                                    partida = 0;
                                    Swal.fire({
                                        title: "Você ganhou!",
                                        text: "Parabéns! Reinicie sua partida ou tente jogar com palavras mais difíceis",
                                        icon: "success",
                                        confirmButtonText: "Fechar"
                                    });
                                    let onclick = new Audio("./assets/win.mp3");
                                    onclick.addEventListener("canplaythrough", function() { onclick.play(); });
                                }
                            }
                        }
                        else if (letras_rapidas.includes(tecla) == false) {
                            let letra_rapida = tecla.toUpperCase();
                            if (letras_erradas.includes(letra_rapida) == false) {
                                letras_erradas.push(letra_rapida);
                                let desenho_letra_errada = document.getElementById("erradas_letras");
                                desenho_letra_errada.innerText = letras_erradas.join(" ");
                                erros ++;
                                forca_tentativa();
                                let onclick = new Audio("./assets/noscore.wav");
                                onclick.addEventListener("canplaythrough", function() { onclick.play(); });
                                if (erros == 6) {
                                    partida = 0;
                                    Swal.fire({
                                        title: "Você perdeu!",
                                        text: "Reinicie sua partida para jogar novamente",
                                        icon: "error",
                                        confirmButtonText: "Fechar"
                                    });
                                    let onclick = new Audio("./assets/lose.wav");
                                    onclick.addEventListener("canplaythrough", function() { onclick.play(); });
                                }
                            }
                        }
                    }
                }
            }
        }
        document.onkeydown = tentativa;
    }
}

botao_palavra.onclick = function() {
    document.getElementById("inicial_pagina").style.display = "none";
    document.getElementById("palavra_pagina").style.display = "block";
    document.getElementById("texto_palavra_caixa").focus();
    let onclick = new Audio("./assets/onclick.wav");
    onclick.addEventListener("canplaythrough", function() { onclick.play(); });
}

botao_salvar.onclick = function() {
    let palavra_nova = document.getElementById("texto_palavra_caixa").value;
    let palavra_nova_x = document.getElementById("texto_palavra_caixa");
    palavra_nova_x.value = "";
    if (palavra_nova.length == 0) {
        Swal.fire({
            title: "Campo vazio",
            text: "",
            icon: "info",
            confirmButtonText: "Fechar"
        });
        let onclick = new Audio("./assets/notification.wav");
        onclick.addEventListener("canplaythrough", function() { onclick.play(); });
    }
    else if (palavra_nova.length <= 3) {
        Swal.fire({
            title: "Mínimo de 4 letras",
            text: "",
            icon: "info",
            confirmButtonText: "Fechar"
        });
        let onclick = new Audio("./assets/notification.wav");
        onclick.addEventListener("canplaythrough", function() { onclick.play(); });
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
            let onclick = new Audio("./assets/notification.wav");
            onclick.addEventListener("canplaythrough", function() { onclick.play(); });
        }
        else if (regex_b.test(palavra_nova)) {
            Swal.fire({
                title: "Palavra inválida",
                text: "Retire os números da palavra",
                icon: "info",
                confirmButtonText: "Fechar"
            });
            let onclick = new Audio("./assets/notification.wav");
            onclick.addEventListener("canplaythrough", function() { onclick.play(); });
        }
        else if (regex_c.test(palavra_nova)) {
            if (palavras.length == 10) {
                Swal.fire({
                    title: "Inventário de palavras cheio",
                    text: "Recarregue a página para iniciar uma nova sessão e limpar o inventário",
                    icon: "info",
                    confirmButtonText: "Fechar"
                });
                let onclick = new Audio("./assets/notification.wav");
                onclick.addEventListener("canplaythrough", function() { onclick.play(); });
            }
            else if (palavras.length <= 9) {
                partida = 2;
                let palavra_nova_max = palavra_nova.toUpperCase();
                palavras.push(palavra_nova_max);
                document.getElementById("palavra_pagina").style.display = "none";
                document.getElementById("forca_pagina").style.display = "block";
                Swal.fire({
                    title: "Partida personalizada criada",
                    text: "Use o teclado para jogar",
                    icon: "success",
                    confirmButtonText: "Jogar"
                });
                let onclick = new Audio("./assets/notification.wav");
                onclick.addEventListener("canplaythrough", function() { onclick.play(); });
                function forca_inicial() {
                    let forca = document.getElementById("forca_desenho");
                    let estrutura_forca = forca.getContext("2d");
                    estrutura_forca.fillStyle = "chocolate";
                    estrutura_forca.fillRect(10, 30, 20, 370);
                    estrutura_forca.fillRect(10, 10, 170, 20);
                    estrutura_forca.fillRect(180, 10, 20, 80);
                    estrutura_forca.beginPath();
                    estrutura_forca.arc(190, 118, 40, 0, 2 * Math.PI);
                    estrutura_forca.fill();
                    estrutura_forca.fillStyle = "darkslategray";
                    estrutura_forca.beginPath();
                    estrutura_forca.arc(190, 118, 30, 0, 2 * Math.PI);
                    estrutura_forca.fill();
                }
                forca_inicial();
                function tracinhos_personalizados() {
                    if (partida == 2) {
                        let palavra_personalizada = palavras[palavras.length - 1];
                        var x = 0;
                        for (i = 0; i < palavra_personalizada.length; i++) {
                            let tracinhos = document.getElementById("letras_certas_desenho");
                            let estrutura_tracinhos = tracinhos.getContext("2d");
                            estrutura_tracinhos.fillRect(10 + x, 20, 30, 10);
                            x = x + 40;
                        }
                    }
                }
                tracinhos_personalizados();
                function forca_tentativa() {
                    let forca_tentativa = document.getElementById("forca_desenho");
                    let forca_tentativa_estrutura = forca_tentativa.getContext("2d");
                    if (erros == 1) {
                        forca_tentativa_estrutura.fillStyle = "whitesmoke";
                        forca_tentativa_estrutura.beginPath();
                        forca_tentativa_estrutura.arc(190, 118, 30, 0, 2 * Math.PI);
                        forca_tentativa_estrutura.fill();

                        forca_tentativa_estrutura.fillStyle = "black";
                        forca_tentativa_estrutura.beginPath();
                        forca_tentativa_estrutura.moveTo(190, 118);
                        forca_tentativa_estrutura.arc(175, 110, 4, 0, 2 * Math.PI);
                        forca_tentativa_estrutura.closePath();
                        forca_tentativa_estrutura.fill();
        
                        forca_tentativa_estrutura.beginPath();
                        forca_tentativa_estrutura.moveTo(190, 118);
                        forca_tentativa_estrutura.arc(205, 110, 4, 0, 2 * Math.PI);
                        forca_tentativa_estrutura.closePath();
                        forca_tentativa_estrutura.fill();
        
                        forca_tentativa_estrutura.strokeStyle = "black";
                        forca_tentativa_estrutura.beginPath();
                        forca_tentativa_estrutura.moveTo(190, 128);
                        forca_tentativa_estrutura.arc(190, 120, 20, 0, Math.PI);
                        forca_tentativa_estrutura.stroke();
                        forca_tentativa_estrutura.closePath();
                        forca_tentativa_estrutura.fill();
                    }
                    else if (erros == 2) {
                        forca_tentativa_estrutura.fillStyle = "whitesmoke";
                        forca_tentativa_estrutura.fillRect(160, 158, 60, 120);
                    }
                    else if (erros == 3) {
                        forca_tentativa_estrutura.fillStyle = "whitesmoke";
                        forca_tentativa_estrutura.fillRect(129, 158, 29, 100);
                    }
                    else if (erros == 4) {
                        forca_tentativa_estrutura.fillStyle = "whitesmoke";
                        forca_tentativa_estrutura.fillRect(222, 158, 29, 100);
                    }
                    else if (erros == 5) {
                        forca_tentativa_estrutura.fillStyle = "whitesmoke";
                        forca_tentativa_estrutura.fillRect(160, 280, 29, 100);
                    }
                    else if (erros == 6) {
                        forca_tentativa_estrutura.fillStyle = "whitesmoke";
                        forca_tentativa_estrutura.fillRect(191, 280, 29, 100);
                    }
                }
                reboot = partida;
                function tentativa (evento) {
                    if (partida == 2) {
                        let codigo = evento.keyCode;
                        let comandos = [8, 9, 12, 13, 16, 17, 18, 20, 27, 32, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 144, 219, 222];
                        if (comandos.includes(codigo) == false) {
                            let tecla = evento.key;
                            let regex = /\W|_|[0-9]/;
                            if (regex.test(tecla) == false) {
                                let palavra_personalizada = palavras[palavras.length - 1];
                                let palavra_personalizada_min = palavra_personalizada.toLowerCase();
                                let letras_personalizadas = palavra_personalizada_min.split("");
                                if (letras_personalizadas.includes(tecla) == true) {
                                    let letra_personalizada = tecla.toUpperCase();
                                    if (letras_certas.includes(letra_personalizada) == false) {
                                        function ponto(id, contador_letra) {
                                            if (typeof letras_certas[contador_letra] != "undefined") {
                                                let desenho_letra_certa = document.getElementById(id[contador_letra]);
                                                desenho_letra_certa.innerText = letras_certas[contador_letra];
                                                acertos ++;
                                                let onclick = new Audio("./assets/score.wav");
                                                onclick.addEventListener("canplaythrough", function() { onclick.play(); });
                                            }
                                        }
                                        function scan(id , letra) {
                                            if (letras_certas.includes(letra) == true) {
                                                for (i = 0; i <= letras_personalizadas.length; i++) {
                                                    let tecla_min = letra.toLowerCase();
                                                    if (letras_personalizadas[i] == tecla_min && letras_certas[i] != letra) {
                                                        let desenho_letra_certa = document.getElementById(id[i]);
                                                        letras_certas[i] = letra;
                                                        desenho_letra_certa.innerText = letras_certas[i];
                                                        acertos ++;
                                                    }
                                                }
                                            }
                                        }
                                        for (i = 0; i <= letras_personalizadas.length; i++) {
                                            let a = 1;
                                            let b = 5;
                                            if (letras_personalizadas[i] == tecla) {
                                                if (typeof letras_certas[i] == "undefined") {
                                                    let tecla_max = tecla.toUpperCase();
                                                    letras_certas[i] = tecla_max;
                                                    ponto(campos, 0);
                                                    scan(campos, tecla_max);
                                                }
                                            }
                                            else if (letras_personalizadas[i + a] == tecla) {
                                                if (typeof letras_certas[i + a] == "undefined") {
                                                    let tecla_max = tecla.toUpperCase();
                                                    letras_certas[i + a] = tecla_max;
                                                    ponto(campos, 1);
                                                    scan(campos, tecla_max);
                                                }
                                            }
                                            else if (letras_personalizadas[i + (a * 2)] == tecla) {
                                                if (typeof letras_certas[i + (a * 2)] == "undefined") {
                                                    let tecla_max = tecla.toUpperCase();
                                                    letras_certas[i + (a * 2)] = tecla_max;
                                                    ponto(campos, 2);
                                                    scan(campos, tecla_max);
                                                }
                                            }
                                            else if (letras_personalizadas[i + (a * 3)] == tecla) {
                                                if (typeof letras_certas[i + (a * 3)] == "undefined") {
                                                    let tecla_max = tecla.toUpperCase();
                                                    letras_certas[i + (a * 3)] = tecla_max;
                                                    ponto(campos, 3);
                                                    scan(campos, 3, tecla_max);
                                                }
                                            }
                                            else if (letras_personalizadas[i + (a * 4)] == tecla) {
                                                if (typeof letras_certas[i + (a * 4)] == "undefined") {
                                                    let tecla_max = tecla.toUpperCase();
                                                    letras_certas[i + (a * 4)] = tecla_max;
                                                    ponto(campos, 4);
                                                    scan(campos, 4, tecla_max);
                                                }
                                            }
                                            else if (letras_personalizadas[i + b] == tecla) {
                                                if (typeof letras_certas[i + b] == "undefined") {
                                                    let tecla_max = tecla.toUpperCase();
                                                    letras_certas[i + b] = tecla_max;
                                                    ponto(campos, 5);
                                                    scan(campos, 5, tecla_max);
                                                }
                                            }
                                            else if (letras_personalizadas[i + (b + a)] == tecla) {
                                                if (typeof letras_certas[i + (b + a)] == "undefined") {
                                                    let tecla_max = tecla.toUpperCase();
                                                    letras_certas[i + (b + a)] = tecla_max;
                                                    ponto(campos, 6);
                                                    scan(campos, 6, tecla_max);
                                                }
                                            }
                                            else if (letras_personalizadas[i + (b + (a * 2))] == tecla) {
                                                if (typeof letras_certas[i + (b + (a * 2))] == "undefined") {
                                                    let tecla_max = tecla.toUpperCase();
                                                    letras_certas[i + (b + (a * 2))] = tecla_max;
                                                    ponto(campos, 7);
                                                    scan(campos, 7, tecla_max);
                                                }
                                            }
                                            else if (letras_personalizadas[i + (b + (a * 3))] == tecla) {
                                                if (typeof letras_certas[i + (b + (a * 3))] == "undefined") {
                                                    let tecla_max = tecla.toUpperCase();
                                                    letras_certas[i + (b + (a * 3))] = tecla_max;
                                                    ponto(campos, 8);
                                                    scan(campos, 8, tecla_max);
                                                }
                                            }
                                            else if (letras_personalizadas[i + (b + (a * 4))] == tecla) {
                                                if (typeof letras_certas[i + (b + (a * 4))] == "undefined") {
                                                    let tecla_max = tecla.toUpperCase();
                                                    letras_certas[i + (b + (a * 4))] = tecla_max;
                                                    ponto(campos, 9);
                                                    scan(campos, 9, tecla_max);
                                                }
                                            }
                                        }
                                        if (acertos == palavra_personalizada.length) {
                                            partida = 0;
                                            Swal.fire({
                                                title: "Você ganhou!",
                                                text: "Parabéns! Reinicie sua partida ou tente jogar com palavras mais difíceis",
                                                icon: "success",
                                                confirmButtonText: "Fechar"
                                            });
                                            let onclick = new Audio("./assets/win.mp3");
                                            onclick.addEventListener("canplaythrough", function() { onclick.play(); });
                                        }
                                    }
                                }
                                else if (letras_personalizadas.includes(tecla) == false) {
                                    let letra_personalizada = tecla.toUpperCase();
                                    if (letras_erradas.includes(letra_personalizada) == false) {
                                        letras_erradas.push(letra_personalizada);
                                        let desenho_letra_errada = document.getElementById("erradas_letras");
                                        desenho_letra_errada.innerText = letras_erradas.join(" ");
                                        erros ++;
                                        forca_tentativa();
                                        let onclick = new Audio("./assets/noscore.wav");
                                        onclick.addEventListener("canplaythrough", function() { onclick.play(); });
                                        if (erros == 6) {
                                            partida = 0;
                                            Swal.fire({
                                                title: "Você perdeu!",
                                                text: "Reinicie sua partida para jogar novamente",
                                                icon: "error",
                                                confirmButtonText: "Fechar"
                                            });
                                            let onclick = new Audio("./assets/lose.wav");
                                            onclick.addEventListener("canplaythrough", function() { onclick.play(); });
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                document.onkeydown = tentativa;
            }
        }
    }
}

botao_cancelar.onclick = function() {
    let palavra_nova = document.getElementById("texto_palavra_caixa");
    palavra_nova.value = "";
    document.getElementById("palavra_pagina").style.display = "none";
    document.getElementById("inicial_pagina").style.display = "block";
    let onclick = new Audio("./assets/onclick.wav");
    onclick.addEventListener("canplaythrough", function() { onclick.play(); });
}

function reiniciar_partida1 () {
    function forca_inicial() {
        let forca = document.getElementById("forca_desenho");
        let estrutura_forca = forca.getContext("2d");
        estrutura_forca.fillStyle = "chocolate";
        estrutura_forca.fillRect(10, 30, 20, 370);
        estrutura_forca.fillRect(10, 10, 170, 20);
        estrutura_forca.fillRect(180, 10, 20, 80);
        estrutura_forca.beginPath();
        estrutura_forca.arc(190, 118, 40, 0, 2 * Math.PI);
        estrutura_forca.fill();
        estrutura_forca.fillStyle = "darkslategray";
        estrutura_forca.beginPath();
        estrutura_forca.arc(190, 118, 30, 0, 2 * Math.PI);
        estrutura_forca.fill();
    }
    forca_inicial();
    let palavra_aleatoria = Math.floor(Math.random() * palavras.length);
    var palavra_rapida = palavras[palavra_aleatoria];
    function tracinhos_rapidos() {
        var x = 0;
        for (i = 0; i < palavra_rapida.length; i++) {
            let tracinhos = document.getElementById("letras_certas_desenho");
            let estrutura_tracinhos = tracinhos.getContext("2d");
            estrutura_tracinhos.fillRect(10 + x, 20, 30, 10);
            x = x + 40;
        }
    }
    tracinhos_rapidos();
}

function reiniciar_partida2 () {
    function forca_inicial() {
        let forca = document.getElementById("forca_desenho");
        let estrutura_forca = forca.getContext("2d");
        estrutura_forca.fillStyle = "chocolate";
        estrutura_forca.fillRect(10, 30, 20, 370);
        estrutura_forca.fillRect(10, 10, 170, 20);
        estrutura_forca.fillRect(180, 10, 20, 80);
        estrutura_forca.beginPath();
        estrutura_forca.arc(190, 118, 40, 0, 2 * Math.PI);
        estrutura_forca.fill();
        estrutura_forca.fillStyle = "darkslategray";
        estrutura_forca.beginPath();
        estrutura_forca.arc(190, 118, 30, 0, 2 * Math.PI);
        estrutura_forca.fill();
    }
    forca_inicial();
    function tracinhos_personalizados() {
        let palavra_personalizada = palavras[palavras.length - 1];
        var x = 0;
        for (i = 0; i < palavra_personalizada.length; i++) {
            let tracinhos = document.getElementById("letras_certas_desenho");
            let estrutura_tracinhos = tracinhos.getContext("2d");
            estrutura_tracinhos.fillRect(10 + x, 20, 30, 10);
            x = x + 40;
        }
    }
    tracinhos_personalizados();
}

botao_reiniciar.onclick = function() {
    let forca_tentativa = document.getElementById("forca_desenho");
    let forca_tentativa_estrutura = forca_tentativa.getContext("2d");
    forca_tentativa_estrutura.clearRect(0, 0, forca_tentativa.width, forca_tentativa.height);
    let tracinhos = document.getElementById("letras_certas_desenho");
    let estrutura_tracinhos = tracinhos.getContext("2d");
    estrutura_tracinhos.clearRect(0, 0, tracinhos.width, tracinhos.height);
    for (i = 0; i < campos.length; i++) {
        let certa_letra = document.getElementById(campos[i]);
        certa_letra.innerText = "";
    }
    let desenho_letra_errada = document.getElementById("erradas_letras");
    desenho_letra_errada.innerText = "";
    letras_certas = [];
    letras_erradas = [];
    acertos = 0;
    erros = 0;
    if (reboot == 1) {
        partida = 1;
        reiniciar_partida1();
        Swal.fire({
            title: "Partida rápida reiniciada",
            text: "Use o teclado para jogar",
            icon: "success",
            confirmButtonText: "Jogar"
        });
        let onclick = new Audio("./assets/notification.wav");
        onclick.addEventListener("canplaythrough", function() { onclick.play(); });
    }
    if (reboot == 2) {
        partida = 2;
        reiniciar_partida2();
        Swal.fire({
            title: "Partida personalizada reiniciada",
            text: "Use o teclado para jogar",
            icon: "success",
            confirmButtonText: "Jogar"
        });
        let onclick = new Audio("./assets/notification.wav");
        onclick.addEventListener("canplaythrough", function() { onclick.play(); });
    }
}

botao_desistir.onclick = function() {
    partida = 0;
    document.getElementById("forca_pagina").style.display = "none";
    document.getElementById("inicial_pagina").style.display = "block";
    let forca_tentativa = document.getElementById("forca_desenho");
    let forca_tentativa_estrutura = forca_tentativa.getContext("2d");
    forca_tentativa_estrutura.clearRect(0, 0, forca_tentativa.width, forca_tentativa.height);
    let tracinhos = document.getElementById("letras_certas_desenho");
    let estrutura_tracinhos = tracinhos.getContext("2d");
    estrutura_tracinhos.clearRect(0, 0, tracinhos.width, tracinhos.height);
    for (i = 0; i < campos.length; i++) {
        let certa_letra = document.getElementById(campos[i]);
        certa_letra.innerText = "";
    }
    let desenho_letra_errada = document.getElementById("erradas_letras");
    desenho_letra_errada.innerText = "";
    letras_certas = [];
    letras_erradas = [];
    acertos = 0;
    erros = 0;
    let onclick = new Audio("./assets/onclick.wav");
    onclick.addEventListener("canplaythrough", function() { onclick.play(); });
}