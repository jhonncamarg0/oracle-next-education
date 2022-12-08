import BotaoConclui from "./concluiTarefa.js";
import BotaoDeleta from "./deletaTarefa.js";

const criarItem = (evento) => {
    const input = document.querySelector("[data-form-input]");
    const inputValor = input.value;
    if(inputValor == "") {
        evento.preventDefault();
        alert("⚠️ Campo vazio! / Empty field!");
    }
    else if(inputValor != "") {
        evento.preventDefault();
        const lista = document.querySelector("[data-list]");
        lista.classList.add("card__list");
        const divTexto = document.createElement("div");
        const divBotao = document.createElement("div");
        divTexto.classList.add("list__div");
        divBotao.classList.add("list__div");
        const item = document.createElement("li");
        item.classList.add("card__item");
        const texto = `<p class="card__text">${inputValor}</p>`;
        divTexto.innerHTML = texto;
        divBotao.appendChild(BotaoConclui());
        divBotao.appendChild(BotaoDeleta());
        item.appendChild(divTexto);
        item.appendChild(divBotao);
        lista.appendChild(item);
        input.value = "";
    }
}

const novoItem = document.querySelector("[data-form-button]");
novoItem.addEventListener("click", criarItem);