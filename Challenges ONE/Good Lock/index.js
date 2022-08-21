document.getElementById("texto_saida").style.display = "none";
document.getElementById("texto_copiar").style.display = "none";

let botao_criptografia = document.getElementById("texto_criptografia");
let botao_descriptografia = document.getElementById("texto_descriptografia");
let botao_copiar = document.getElementById("texto_copiar");
let tela = document.getElementById("texto_saida");
let botao = false;

function mostrarCodigo() {
    let imagem = document.getElementById("texto_aviso_saida");
    let texto = document.getElementById("texto_saida");
    let botao_copy = document.getElementById("texto_copiar");
    imagem.style.display = "none";
    texto.style.display = "block";
    botao_copy.style.display = "block";
}

function recarregar() {
    if (botao == true) {
        location.reload();
    }
}

function copiarCodigo() {
    let codigoC = document.getElementById("texto_saida");
    codigoC.select();
    document.execCommand("copy");
    Swal.fire({
        title: "🔑 Copiado!",
        text: "Recarregando a página...",
        icon: "info",
        confirmButtonText: "Fechar"
    });
    setInterval(recarregar, 3000);
}

function resetarLimite() {
    let codigoC = document.getElementById("texto_saida");
    codigoC.select();
    document.execCommand("copy");
    Swal.fire({
        title: "🔑 Copiado!",
        text: "Recarregando a página...",
        icon: "info",
        confirmButtonText: "Fechar"
    });
    setInterval(recarregar, 3000);
}

function criptografia() {
    var codigo = document.getElementById("texto_entrada").value;
    if (codigo != "") {
        let e = codigo.replace(/e/g, "enter");
        let o = e.replace(/o/g, "ober");
        let i = o.replace(/i/g, "imes");
        let a = i.replace(/a/g, "ai");
        let u = a.replace(/u/g, "ufat");
        mostrarCodigo();
        botao_copiar.innerText = "Copiar texto criptografado";
        let codigo2 = document.getElementById("texto_saida");
        codigo2.innerText = u;
        let clear = document.getElementById("texto_entrada");
        clear.value = "";
        Swal.fire({
            title: "🔒 Criptografado!",
            text: "",
            icon: "info",
            confirmButtonText: "Fechar"
        });
        botao = true;
    }
    else if (codigo == "") {
        Swal.fire({
            title: "⚠️ Texto vazio!",
            text: "Insira algum texto para ser criptografado",
            icon: "info",
            confirmButtonText: "Fechar"
        });
    }
}

function descriptografia() {
    let codigo = document.getElementById("texto_entrada").value;
    if (codigo != "") {
        if (codigo.includes("enter") || codigo.includes("ober") || codigo.includes("imes") ||
        codigo.includes("ai") || codigo.includes("ufat") == true) {
            let e = codigo.replace(/enter/g, "e");
            let o = e.replace(/ober/g, "o");
            let i = o.replace(/imes/g, "i");
            let a = i.replace(/ai/g, "a");
            let u = a.replace(/ufat/g, "u");
            mostrarCodigo();
            botao_copiar.innerText = "Copiar texto descriptografado";
            let codigo2 = document.getElementById("texto_saida");
            codigo2.innerText = u;
            let clear = document.getElementById("texto_entrada");
            clear.value = "";
            Swal.fire({
                title: "🔓 Descriptografado!",
                text: "",
                icon: "info",
                confirmButtonText: "Fechar"
            });
            botao = true;
        }
        else {
            Swal.fire({
                title: "⚠️ Texto incompatível!",
                text: "Esse texto não foi criptografado pelo Good Lock",
                icon: "info",
                confirmButtonText: "Fechar"
            });
        }
    }
    else if (codigo == "") {
        Swal.fire({
            title: "⚠️ Texto vazio!",
            text: "Insira algum texto criptografado pelo Good Lock para ser descriptografado",
            icon: "info",
            confirmButtonText: "Fechar"
        });
    }
}

botao_criptografia.onclick = criptografia;
botao_descriptografia.onclick = descriptografia;
botao_copiar.onclick = copiarCodigo;
tela.onclick = resetarLimite;