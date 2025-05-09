function validarFormulario() {
    const nomeIput = document.getElementById("nome");
    const emailInput = document.getElementById("email");
    const descricaoInput = document.getElementById("descricao");
    let valida = true;

    //FUNÇÃO PARA EXIBIR ERROS
    function mostrarErro(inputElement, mensagem) {
        const controle = inputElement.parentNode;
        const erroImg = controle.querySelect(".error");
        const mensagemErro = controle.querySelect("small")

        mensagemErro.innerText = mensagem
        controle.className = "control erro";
        erroImg.style.display = "block";
        valida = false;

    }


}