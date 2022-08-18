document.getElementById("texto_saida").style.display = "none";
document.getElementById("texto_copiar").style.display = "none";

let botao_criptografia = document.getElementById("texto_criptografia");
let botao_descriptografia = document.getElementById("texto_descriptografia");
let botao_copiar = document.getElementById("texto_copiar");

function mostrarCodigo() {
    let texto = document.getElementById("texto_saida");
    let botao = document.getElementById("texto_copiar");
    let imagem = document.getElementById("texto_aviso_saida");
    imagem.style.display = "none";
    texto.style.display = "block";
    botao.style.display = "block";
}

function criptografia() {
    let codigo = document.getElementById("texto_entrada").value;
    let e = codigo.replace(/e/g, "enter");
    let o = e.replace(/o/g, "ober");
    let i = o.replace(/i/g, "imes");
    let a = i.replace(/a/g, "ai");
    let u = a.replace(/u/g, "ufat");
    mostrarCodigo();
    let codigo2 = document.getElementById("texto_saida");
    codigo2.innerText = u;
    botao_copiar.innerText = "Copiar texto criptografado";
    Swal.fire({
        title: "Criptografado!",
        text: "",
        icon: "info",
        confirmButtonText: "Fechar"
      })
}

function descriptografia() {
    let codigo = document.getElementById("texto_entrada").value;
    let e = codigo.replace(/enter/g, "e");
    let o = e.replace(/ober/g, "o");
    let i = o.replace(/imes/g, "i");
    let a = i.replace(/ai/g, "a");
    let u = a.replace(/ufat/g, "u");
    mostrarCodigo();
    let codigo2 = document.getElementById("texto_saida");
    codigo2.innerText = u;
    botao_copiar.innerText = "Copiar texto descriptografado";
    Swal.fire({
        title: "Descriptografado!",
        text: "",
        icon: "info",
        confirmButtonText: "Fechar"
      })
}

function copiar() {
    let codigo = document.getElementById("texto_saida");
    codigo.select();
    document.execCommand("copy");
    Swal.fire({
        title: "Copiado!",
        text: "",
        icon: "info",
        confirmButtonText: "Fechar"
      })
}

botao_criptografia.onclick = criptografia;
botao_descriptografia.onclick = descriptografia;
botao_copiar.onclick = copiar;