console.log('Chegou na pagina table.js');


var infosVariacoes = [{id: 1, estado: 'São Paulo', infoVariacao: 10},
                      {id: 2, estado: 'Acre', infoVariacao: 20}, 
                      {id: 2, estado: 'Acre', infoVariacao: 20}, 
                      {id: 2, estado: 'Acre', infoVariacao: 20}, 
                      {id: 2, estado: 'Acre', infoVariacao: 20}, 
                      {id: 2, estado: 'Acre', infoVariacao: 20}, 
                      {id: 2, estado: 'Acre', infoVariacao: 20}, 
                      {id: 2, estado: 'Acre', infoVariacao: 20}, 
                      {id: 2, estado: 'Acre', infoVariacao: 20}, 
                      {id: 2, estado: 'Acre', infoVariacao: 20}, 
                      {id: 3, estado: 'Goiás', infoVariacao: 30}]
var tableRowCcontent = '<tr class="estado" id="quinto-estado">'+
                            '<th class="info-posicao" scope="row">{{id}}</th>'+
                            '<td class="info-estado">{{infoEstado}}</td>'+
                            '<td class="info-variacao">{{infoVariacao}}</td>'+
                        '</tr>'

var botaoAdicionar = document.querySelector('#atualizar-ranking');
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault(); 

    

    var table = document.querySelector("#tabela-estados");
    var newContent = '';
    infosVariacoes.forEach(x=> {
        newContent += tableRowCcontent.replace("{{id}}", x.id).replace("{{infoEstado}}", x.estado).replace("{{infoVariacao}}", x.infoVariacao);
    });
    
    table.innerHTML += newContent;

    // var posicao = table.posicao.value;
    // var estado = table.estado.value;
    // var variacao = table.variacao.value;



    // var estadoTr = document.createElement("tr");
    // var posicaoTd = document.createElement("td")
    // var estadoTd = document.createElement("td")
    // var variacaoTd = document.createElement("td")


    // posicaoTd.textContent = posicao;
    // estadoTd.textContent = estado;
     variacaoTd.textContent = variacao;
    

    // estadoTr.appendChild(posicaoTd);
    // estadoTr.appendChild(estadoTd);
    // estadoTr.appendChild(variacaoTd);
    

    // var tabela = document.querySelector("#tabela-estados");
    // tabela.appendChild(estadoTr);

});
