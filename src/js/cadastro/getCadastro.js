function main() {
    const form = document.querySelector(`form#cadastro`);
    form.addEventListener(`submit`, cadastro);

    const cadastros = [];//salva temporáriamente os cadastros em um array de objetos

    function cadastro(pausa) {
        pausa.preventDefault();//evita que a página seja recarregada
        const email = document.querySelector(`input#inputEmail`).value;
        const senha = document.querySelector(`input#loginPassword`).value;
        const senhaConfirm = document.querySelector(`input#loginPasswordConfirm`).value;
        const termos = document.querySelector(`input#checkTermos`).checked;
        let setSenha;

        function campoVazio(campo) {// verifica se os campos estão vazios 
            let valorCampo = campo.trim();

            if (valorCampo.length !== 0) {
                return true;
            } else {
                return false;
            }
        }

        function salvaCadastro() {
            if (termos === true) {//verifica se a checkbox está marcada caso sim
                if (senha == senhaConfirm) {// verifica se as senhas correspondem e caso sim realiza o cadastro
                    setSenha = senha;
                    let cadastro = { email: email, senha: setSenha };
                    cadastros.push(cadastro);//coloca o cadastro dentro da array
                    return cadastros;
                } else {
                    alert(`As senhas não correspondem`);
                }

            } else {
                alert(`Primeiro aceite os termos`);
            }
        }

        //caso todos os campos estejam preenchidos realiza a função de cadastrar
        if (campoVazio(email) && campoVazio(senha) && campoVazio(senhaConfirm)) {
            salvaCadastro();
        } else {
            alert(`preencha todos os campos`);
        }
    };
}

main();