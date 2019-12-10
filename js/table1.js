
/*var botaoAdicionar = document.querySelector('#adicionar-paciente');
botaoAdicionar.addEventListener("click", function(event){
    //event.preventDefault();

var estados = document.querySelectorAll('.estado');


for (var i = 0; i < estados.length; i++) {

    var estado = estados[i];

    var posicao = estado.querySelector('.info-posicao').textContent;
    var uf = estado.querySelector('.info-estado').textContent;
    var variacao = estado.querySelector('.info-variacao').textContent;



    var validaPeso = true;
    var validaAltura = true;

    if (peso < 0 || peso > 1000) {
        validaPeso = false;
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
    }

    if (altura < 0 || altura > 3.00) {
        validaAltura = false;
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
    }

    if (validaPeso && validaAltura){
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);

    }

}

*/