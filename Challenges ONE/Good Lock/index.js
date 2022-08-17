document.getElementById("texto_saida").style.display = "none";

var botao_criptografia = document.getElementById("texto_criptografia");
var botao_descriptografia = document.getElementById("texto_descriptografia");

function mostrarCodigo() {
    var texto = document.getElementById("texto_saida");
    var imagem = document.getElementById("texto_aviso_saida");
    imagem.style.display = "none";
    texto.style.display = "block";
}

function criptografia() {
    var codigo = document.getElementById("texto_entrada").value;
    var codigo2 = document.getElementById("texto_saida").value;
    codigo.replace("a", "ai");
    codigo.replace("e", "enter");
    codigo.replace("i", "imes");
    codigo.replace("o", "ober");
    codigo.replace("u", "ufat");
    mostrarCodigo()
    codigo2.value = codigo.value;
}

function descriptografia() {
    var codigo = document.getElementById("texto_entrada").value;
    var codigo2 = document.getElementById("texto_saida").value;
    codigo.replace("ai", "a");
    codigo.replace("enter", "e");
    codigo.replace("imes", "i");
    codigo.replace("ober", "o");
    codigo.replace("ufat", "u");
    codigo2.value = codigo.value;
}

botao_criptografia.onclick = criptografia;
botao_descriptografia.onclick = descriptografia;