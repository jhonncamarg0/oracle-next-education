
document.getElementById("texto_saida").style.display = "none";

function hideTextExit() {
    var a = document.getElementById("texto_saida");
    if (a.style.display === "none") {
        a.style.display = "block";
    } else {
        a.style.display = "none";
    }
}