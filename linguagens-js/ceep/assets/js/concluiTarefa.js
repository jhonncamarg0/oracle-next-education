const BotaoConclui = () => {
    const botaoConclui = document.createElement("button");
    botaoConclui.innerText = "🟢";
    botaoConclui.classList.add("card__button--concluir");
    botaoConclui.addEventListener("click", concluirTarefa);
    return botaoConclui;
}

const concluirTarefa = (evento) => {
    const botaoConclui = evento.target;
    const divBotao = botaoConclui.parentElement;
    const itemConcluido = divBotao.parentElement;
    const divTexto = itemConcluido.children[0];
    divTexto.classList.toggle("card__text--strike");
}

export default BotaoConclui;