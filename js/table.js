var botaoAdicionar = document.querySelector('#atualizar-ranking');
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    var table = document.querySelector("#tabela-estados");

    var posicao = table.posicao.value;
    var estado = table.estado.value;
    var variacao = table.variacao.value;



    var estadoTr = document.createElement("tr");
    var posicaoTd = document.createElement("td")
    var estadoTd = document.createElement("td")
    var variacaoTd = document.createElement("td")


    posicaoTd.textContent = posicao;
    estadoTd.textContent = estado;
    variacaoTd.textContent = variacao;
    

    estadoTr.appendChild(posicaoTd);
    estadoTr.appendChild(estadoTd);
    estadoTr.appendChild(variacaoTd);
    

    var tabela = document.querySelector("#tabela-estados");
    tabela.appendChild(estadoTr);

});
