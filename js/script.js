/*
    Atividade: Painel de Tarefas Escolares

    Escreva aqui o código JavaScript para programar os recursos da página.
*/


//mesagens que vao ser as aleatorias lá 



const botoes = document.querySelectorAll(".botao-avancar");

function atualizarContador() {
    const concluidas = document.querySelectorAll(".tarefa-concluida").length;

    document.querySelector("#contador-tarefas").innerText =
        concluidas + " de 4 tarefas concluídas";
}

botoes.forEach(function(botao) {
    botao.addEventListener("click", function() {
        const tarefa = botao.closest(".tarefa");
        const estado = tarefa.querySelector(".indicador-estado");

        if (tarefa.classList.contains("tarefa-pendente")) {
            tarefa.className = "tarefa tarefa-andamento";
            estado.className = "indicador-estado estado-andamento";
            estado.innerText = "Em andamento";
            botao.innerText = "Concluir tarefa";

        } else if (tarefa.classList.contains("tarefa-andamento")) {
            tarefa.className = "tarefa tarefa-concluida";
            estado.className = "indicador-estado estado-concluida";
            estado.innerText = "Concluída";
            botao.innerText = "Recomeçar tarefa";

        } else {
            tarefa.className = "tarefa tarefa-pendente";
            estado.className = "indicador-estado estado-pendente";
            estado.innerText = "Pendente";
            botao.innerText = "Iniciar tarefa";
        }

        atualizarContador();
    });
});

atualizarContador();

const mensagens = [
    "Grandes aprendizados começam com pequenos passos.",
    "Cada exercício é uma oportunidade de descobrir algo novo.",
    "Com dedicação e prática, você chega mais longe.",
    "Errar faz parte do caminho de quem está aprendendo."
];

document.querySelector("#botao-motivacao").addEventListener("click", function() {
    const numero = Math.floor(Math.random() * mensagens.length);

    document.querySelector("#mensagem-motivacional").innerText =
        mensagens[numero];
});
