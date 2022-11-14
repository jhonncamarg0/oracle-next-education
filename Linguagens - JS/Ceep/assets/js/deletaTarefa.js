const BotaoDeleta = () => {
    const botaoDeleta = document.createElement("button");
    botaoDeleta.innerText = "🔴";
    botaoDeleta.classList.add("card__button--deletar");
    botaoDeleta.addEventListener("click", deletarTarefa);
    return botaoDeleta;
}

const deletarTarefa = (evento) => {
    const botaoDeleta = evento.target;
    const divBotao = botaoDeleta.parentElement;
    const itemConcluido = divBotao.parentElement;
    itemConcluido.remove();
    return botaoDeleta;
}

export default BotaoDeleta;